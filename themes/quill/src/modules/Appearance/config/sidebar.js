export default [
  {
    code: 'appearance',
    name: 'appearance',
    meta: {
      title: 'Appearance',
      icon: 'color_lens',
      authenticatable: true,
      sort: 500,
    },
    children: [
      // Menu Appearance
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
