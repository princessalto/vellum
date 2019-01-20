export default [
  {
    code: 'appearance',
    name: 'appearance',
    meta: {
      title: 'Appearance',
      icon: 'mdi-note-plus-outline',
      authenticatable: true,
      sort: 500,
    },
    children: [
      // Admin Appearance
      {
        code: 'appearance.menus',
        name: 'appearance.menus',
        meta: {
          title: 'Menus',
          icon: 'mdi-home',
          authenticatable: true,
          sort: 501,
        },
      },
    ],
  }
]
