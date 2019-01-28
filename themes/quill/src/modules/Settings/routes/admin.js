export default [
  {
    path: '/admin/settings',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Settings',
      sort: 6,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      // Preferences
      {
        path: 'preferences',
        props: true,
        name: 'settings.preferences',
        component: () => import('../Preferences.vue'),
        meta: {
          title: 'Preferences',
          sort: 6,
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
      // General
      {
        path: 'general/display',
        props: true,
        name: 'settings.general.display',
        component: () => import('../Display.vue'),
        meta: {
          title: 'Display',
          sort: 6,
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
      // Branding
      {
        path: 'branding',
        props: true,
        name: 'settings.branding',
        component: () => import('../Branding.vue'),
        meta: {
          title: 'Branding',
          sort: 6,
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
    ],
  }
]
