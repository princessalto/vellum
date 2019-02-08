<?php
/**
 *------------------------------------------------------------------------------
 * Permissions Array
 *------------------------------------------------------------------------------
 *
 * Here we define our permissions that you can attach to roles.
 *
 * These permissions corresponds to a counterpart
 * route (found in <this module>/routes/<route-files>.php).
 * All permissionable routes should have a `name` (e.g. 'roles.store')
 * for the role authentication middleware to work.
 *
 */
return [
    /**
     *--------------------------------------------------------------------------
     * $name Permissions
     *--------------------------------------------------------------------------
     *
     */
    'view-mockups' => [
        'name' =>  'view-mockups',
        'code' => 'mockups.index',
        'description' => 'Ability to view list of mockups',
        'group' => 'mockup',
    ],
    'show-mockup' => [
        'name' => 'show-mockup',
        'code' => 'mockups.show',
        'description' => 'Ability to show a single mockup',
        'group' => 'mockup',
    ],
    'create-mockup' => [
        'name' => 'create-mockup',
        'code' => 'mockups.create',
        'description' => 'Ability to create new mockup',
        'group' => 'mockup',
    ],
    'store-mockup' => [
        'name' => 'store-mockup',
        'code' => 'mockups.store',
        'description' => 'Ability to save the mockup',
        'group' => 'mockup',
    ],
    'edit-mockup' => [
        'name' => 'edit-mockup',
        'code' => 'mockups.edit',
        'description' => 'Ability to view the edit form',
        'group' => 'mockup',
    ],
    'update-mockup' => [
        'name' => 'update-mockup',
        'code' => 'mockups.update',
        'description' => 'Ability to update the mockup',
        'group' => 'mockup',
    ],
    'destroy-mockup' => [
        'name' => 'destroy-mockup',
        'code' =>  'mockups.destroy',
        'description' => 'Ability to move the mockup to trash',
        'group' => 'mockup',
    ],
    'delete-mockup' => [
        'name' => 'delete-mockup',
        'code' =>  'mockups.delete',
        'description' => 'Ability to permanently delete the mockup',
        'group' => 'mockup',
    ],
    'trashed-mockups' => [
        'name' => 'trashed-mockups',
        'code' =>  'mockups.trashed',
        'description' => 'Ability to view the list of all trashed mockups',
        'group' => 'mockup',
    ],
    'restore-mockup' => [
        'name' => 'restore-mockup',
        'code' => 'mockups.restore',
        'description' => 'Ability to restore the mockup from trash',
        'group' => 'mockup',
    ],

    /**
     *--------------------------------------------------------------------------
     * Limited Access Policies
     *--------------------------------------------------------------------------
     * The policy stated below will limit the users to only interact with
     * resources they created. Using this policy, the resource will usually have
     * a `user_id` field defined. A Policy Class is also required to check
     * authorization.
     *
     * E.g.
     *  1. User1 will only be able to edit/delete their own created pages.
     *  2. User1 will not be able to edit User2's created pages.
     *  3. User1 will not be able to delete User2's created pages.
     *  4. User1 will be able to view other users created pages. Although this can
     *     be set to be otherwise. It will depend on the Policy file.
     */
    'unrestricted-mockup-access' => [
        'name' => 'unrestricted-mockup-access',
        'code' => 'mockups.unrestricted',
        'description' => 'Ability to edit and delete all mockups even if the user is not the creator of the mockup.',
        'group' => 'mockup',
    ],
];
