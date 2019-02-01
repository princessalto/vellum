export default [
  {
    code: 'tests',
    name: 'tests',
    meta: {
      title: 'Tests',
      icon: 'mdi-code-braces',
      authenticatable: true,
      sort: 5,
    },
    children: [
      // Admin Tests
      {
        code: 'tests.index',
        name: 'tests.index',
        meta: {
          title: 'All Tests',
          icon: 'mdi-book-multiple-variant',
          authenticatable: true,
          sort: 5,
        },
      },

      // Create
      {
        code: 'tests.create',
        name: 'tests.create',
        meta: {
          title: 'Create Test',
          icon: 'mdi-book-plus',
          authenticatable: true,
          sort: 6,
        },
      },

      // Divider
      {
        code: 'divider:tests/create.trashed',
        name: 'divider:tests/create.trashed',
        meta: {
          divider: true,
          sort: 7,
        },
      },
    ],
  }
]
