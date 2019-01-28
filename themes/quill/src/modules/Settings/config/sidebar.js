export default [
  {
    code: 'settings',
    name: 'settings',
    meta: {
      title: 'Settings',
      icon: 'mdi-tune',
      authenticatable: true,
      sort: 500,
    },
    children: [
      // Preferences
      {
        code: 'settings.preferences',
        name: 'settings.preferences',
        meta: {
          title: 'Preferences',
          icon: 'home',
          authenticatable: true,
          sort: 501,
        },
      },
      //General
      {
        code: 'settings.general.display',
        name: 'settings.general.display',
        meta: {
          title: 'General',
          icon: 'home',
          authenticatable: true,
          sort: 501,
        },
      },
      // Branding
      {
        code: 'settings.branding',
        name: 'settings.branding',
        meta: {
          title: 'Branding',
          icon: 'home',
          authenticatable: true,
          sort: 503,
        },
      },
    ],
  }
]
