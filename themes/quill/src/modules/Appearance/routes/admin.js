export default [
  {
    path: '/admin/appearance',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Pages',
      sort: 6,
      authenticatable: true,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: '',
        props: true,
        name: 'appearance.index',
        component: () => import('../Index.vue'),
        meta: {
          title: 'All Pages',
          sort: 6,
          authenticatable: true,
          icon: 'mdi-book-multiple-variant',
        },
      },
    ],
  }
]
