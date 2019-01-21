<?php

/**
 * ------------------------------------------------------
 * Menu Locations
 * ------------------------------------------------------
 *
 */
return [
    'main-menu' => [
        'name' => __('Main Menu'),
        'code' => 'main-menu',
        'icon' => 'mdi mdi-menu',
        'iconBackground' => 'blue lighten-5',
        'iconColor' => 'blue',
        'description' => __('The main menu of the site.'),
    ],
    'social-menu' => [
        'name' => __('Social Menu'),
        'code' => 'social-menu',
        'icon' => 'mdi mdi-twitter',
        'iconBackground' => 'purple lighten-5',
        'iconColor' => 'purple',
        'description' => __('Social menus are usually located on the footer or at the end of blog posts.'),
    ],
    'footer-menu' => [
        'name' => __('Footer Menu'),
        'code' => 'footer-menu',
        'icon' => 'mdi mdi-page-layout-footer',
        'iconBackground' => 'green lighten-5',
        'iconColor' => 'green',
        'description' => __('The location for the footer menu.'),
    ],
    'sitemap-menu' => [
        'name' => __('Sitemap'),
        'code' => 'sitemap-menu',
        'icon' => 'mdi mdi-sitemap',
        'iconBackground' => 'pink lighten-5',
        'iconColor' => 'pink',
        'description' => __('The location for the sitemap menu.'),
    ],
];
