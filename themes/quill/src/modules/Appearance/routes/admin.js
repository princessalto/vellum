export default [
  {
    path: '/admin/appearance',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Appearance',
      sort: 6,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: 'menus',
        props: true,
        name: 'appearance.menus',
        component: () => import('../submodules/Menu/Index.vue'),
        meta: {
          title: 'Menus',
          sort: 6,
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
    ],
  }
]
