<?php

return [
    /**
     *--------------------------------------------------------------------------
     * Mockups Menus
     *--------------------------------------------------------------------------
     *
     * Specify here the menus to appear on the sidebar.
     *
     */
    'mockup' => [
        'name' => 'mockup',
        'order' => 51,
        'slug' => route('mockups.index'),
        'always_viewable' => false,
        'icon' => '',
        'labels' => [
            'title' => __('Mockups'),
            'description' => __('Manage mockups'),
        ],
        'children' => [
            'view-mockups' => [
                'name' => 'view-mockups',
                'order' => 1,
                'slug' => route('mockups.index'),
                'code' => 'mockups.index',
                'always_viewable' => false,
                'labels' => [
                    'title' => __('All Mockups'),
                    'description' => __('View the list of all mockups'),
                ],
            ],
            'create-mockup' => [
                'name' => 'create-mockup',
                'order' => 2,
                'slug' => route('mockups.create'),
                'code' => 'mockups.create',
                'always_viewable' => false,
                'labels' => [
                    'title' => __('Create Mockup'),
                    'description' => __('Create a Mockup'),
                ],
            ],
            'trashed-mockup' => [
                'name' => 'trashed-mockup',
                'order' => 3,
                'slug' => route('mockups.trashed'),
                'code' => 'mockups.trashed',
                'always_viewable' => false,
                'labels' => [
                    'title' => __('Trashed Mockups'),
                    'description' => __('View list of all mockups moved to trash'),
                ],
            ],
        ],
    ],
];
