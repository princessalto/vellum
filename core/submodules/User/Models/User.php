<?php

namespace User\Models;

use Activity\Support\Relations\MorphManyActivities;
use Frontier\Support\Breadcrumbs\Accessors\Breadcrumable;
use Frontier\Support\Traits\TypeTrait;
use Pluma\Support\Auth\Traits\UserMutator;
use Pluma\Support\Auth\User as Authenticatable;
use Pluma\Support\Token\Traits\TokenizableTrait;
use Role\Support\Relations\BelongsToManyRoles;
use Role\Support\Relations\HasManyPermissionsThroughRoles;
use Setting\Support\Relations\HasManySettings;
use Setting\Support\Traits\WhereSettingTrait;
use User\Support\Accessors\UserAccessor;
use User\Support\Relations\HasManyDetails;
use User\Support\Traits\CanResetPasswordTrait;
use User\Support\Traits\WhereDetailTrait;

class User extends Authenticatable
{
    use BelongsToManyRoles,
        Breadcrumable,
        CanResetPasswordTrait,
        HasManyDetails,
        HasManyPermissionsThroughRoles,
        HasManySettings,
        MorphManyActivities,
        TokenizableTrait,
        TypeTrait,
        UserAccessor,
        UserMutator,
        WhereDetailTrait,
        WhereSettingTrait;

    /**
     * The key to use for the breadcrumb middleware.
     *
     * @var string
     */
    protected $crumb = 'fullname';

    protected $fillable = [
        'firstname',
        'middlename',
        'lastname',
        'username',
        'prefixname',
        'email',
        'password',
        'type',
    ];

    protected $appends = [
        'displayrole',
        'created',
        'modified',
    ];

    protected $searchables = [
        'firstname',
        'middlename',
        'lastname',
        'username',
        'prefixname',
        'email',
    ];
}
