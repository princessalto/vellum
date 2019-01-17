<?php

namespace User\Repositories;

use Illuminate\Database\QueryException;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\Rule;
use Pluma\Support\Repository\Repository;
use Role\Models\Role;
use User\Models\User;

class UserRepository extends Repository
{
    /**
     * The model instance.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model = User::class;

    /**
     * The User model type.
     * Used for module specific users.
     *
     * @var string
     */
    protected $usertype = 'user';

    /**
     * Set of rules the model should be validated against when
     * storing or updating a resource.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'firstname' => 'required|max:255',
            'lastname' => 'required|max:255',
            'password' => 'sometimes|required|min:6|confirmed',
            'roles' => 'required|array',
            'username' => [
                'required',
                Rule::unique('users')->ignore(self::$id),
            ],
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore(self::$id),
            ],
        ];
    }

    /**
     * Array of custom error messages upon validation.
     *
     * @return array
     */
    public static function messages()
    {
        return [
            'roles.required' => 'Atleast one role is required.',
        ];
    }

    /**
     * Retrieve the full model instance.
     *
     * @return \Pluma\Models\Model
     */
    public function model()
    {
        return $this->model->type($this->usertype);
    }

    /**
     * Get the search params.
     *
     * @param array $params
     * @return \Pluma\Models\Model
     */
    public function search($params)
    {
        $this->model = $this->model->search($params)->type($this->usertype);

        return $this;
    }

    /**
     * Retrieve the roles list.
     *
     * @return array
     */
    public function roles()
    {
        if (user()->isSuperAdmin()) {
            return Role::all();
        }

        return Role::whereNotIn('code', $this->model->rootRoles())->get();
    }

    /**
     * Create model resource.
     *
     * @param array $data
     */
    public function create(array $data)
    {
        $user = new User();
        $user->prefixname = $data['prefixname'] ?? null;
        $user->firstname = $data['firstname'] ?? null;
        $user->middlename = $data['middlename'] ?? null;
        $user->lastname = $data['lastname'] ?? null;
        $user->username = $data['username'] ?? null;
        $user->email = $data['email'] ?? null;
        $user->password = bcrypt($data['password']) ?? null;
        $user->avatar = $data['avatar'] ?? null;
        $user->tokenize($data['username']) ?? null;
        $user->type = $this->usertype;
        $user->save();
        $user->roles()->attach(! empty($data['roles']) ? $data['roles'] : []);

        if (isset($data['details'])) {
            collect($data['details'])->each(function ($detail) use ($user) {
                $user->details()->create([
                    'icon' => $detail['icon'],
                    'key' => $detail['key'],
                    'value' => $detail['value']
                ]);
            });
        }

        return $user;
    }

    /**
     * Create model resource.
     *
     * @param array $data
     * @param int   $id
     */
    public function update(array $data, $id)
    {
        $user = User::findOrFail($id);
        $user->prefixname = $data['prefixname'] ?? null;
        $user->firstname = $data['firstname'] ?? null;
        $user->middlename = $data['middlename'] ?? null;
        $user->lastname = $data['lastname'] ?? null;
        $user->username = $data['username'] ?? null;
        $user->email = $data['email'] ?? null;
        // $user->password = bcrypt($data['password']) ?? null;
        $user->avatar = $data['avatar'] ?? null;
        $user->tokenize($data['username']) ?? null;
        $user->type = $this->usertype;
        $user->save();
        $user->roles()->sync($data['roles'] ?? []);

        if (isset($data['details'])) {
            $details = collect($data['details'])->each(function ($detail) use ($user) {
                return $user->details()->updateOrCreate(['key' => $detail['key']], [
                    'icon' => $detail['icon'],
                    'key' => $detail['key'],
                    'value' => $detail['value'],
                ]);
            });

            $user->details()->whereNotIn('key', $details->pluck('key'))->delete();
        }

        return $user;
    }

    /**
     * Upload the specified file as user's avatar.
     *
     * @param UploadedFile $file
     * @return mixed
     */
    public function upload(UploadedFile $file)
    {
        $folderName = settings('user:avatar_path', 'users/avatars/').date('Y-m-d');
        $uploadPath = storage_path($folderName);
        $name = str_slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME));
        $fileName = $name.'-'.date('YmdHis').'.'.$file->getClientOriginalExtension();
        $fullFilePath = "$uploadPath/$fileName";

        if ($file->move($uploadPath, $fileName)) {
            return "$folderName/$fileName";
        }

        return null;
    }

    /**
     * Export from given format
     *
     * @param int $id
     * @param array $data
     * @return void
     */
    public function export($id, $data)
    {
        $user = $this->find($id);

        switch ($data['format']) {
            case 'xlsx':
                $this->toSpreadsheet($resource, $data);
                return;
                break;

            default:
            case 'pdf':
                $this->toPDF($resource, $data);
                break;
        }
    }
}
