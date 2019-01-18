export default [
  {
    code: 'appearance',
    name: 'appearance',
    meta: {
      title: 'Appearance',
      icon: 'mdi-note-plus-outline',
      authenticatable: true,
      sort: 5,
    },
    children: [
      // Admin Appearance
      {
        code: 'appearance.index',
        name: 'appearance.index',
        meta: {
          title: 'All Appearances',
          icon: 'mdi-home',
          authenticatable: true,
          sort: 5,
        },
      },
    ],
  }
]
