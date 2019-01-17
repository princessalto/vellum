<?php

namespace Role\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Role\Support\Roles\Roles;
use Role\Support\Traits\PermissibleTrait;

class AuthenticateUserPermission
{
    /**
     * The authenticated user instance.
     *
     * @var User\Models\User
     */
    protected $user;

    /**
     * Route actions array.
     *
     * @var array
     */
    protected $actions;

    /**
     * The permission code for the requested page.
     *
     * @var string
     */
    protected $permission;

    /**
     * Construct method.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->user = $request->user();

        $this->actions = $request->route()->getAction();

        $this->permission = collect($this->actions)->get('as');
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  roles
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if menu is always viewable, proceed.
        if ($this->isUrlAlwaysViewable($request->url())) {
            return $next($request);
        }

        // if user is root, proceed.
        if ($this->user && $this->user->isSuperAdmin()) {
            return $next($request);
        }

        // if user has appropriate role, proceed.
        if ($this->user && $this->user->can($this->permission)) {
            return $next($request);
        }

        if ($request->ajax()) {
            return response()->json(false, 403);
        }

        // Load the 404 or 403
        return abort('403');
    }

    /**
     * Check if the menu is tagged as 'always_viewable'
     *
     * @param  string  $url
     * @return boolean
     */
    protected function isUrlAlwaysViewable($url)
    {
        foreach (sidebar()->all() as $menu) {
            if (isset($menu->always_viewable) && $menu->always_viewable) {
                if (isset($menu->url) && $menu->url === $url) {
                    return true;
                }
            }
        }

        return false;
    }
}
