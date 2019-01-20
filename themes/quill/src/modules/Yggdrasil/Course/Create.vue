<template>
  <section>
    <v-toolbar flat>
      <v-toolbar-title>
        {{ __('Create Course') }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="secondary">{{ __('Save') }}</v-btn>
    </v-toolbar>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card class="mb-3">
            <v-layout
              justify-space-between
              row wrap
              pa-3
              >
              <v-flex md5 xs12>
                <v-treeview
                  :active.sync="active"
                  :items="items"
                  :load-children="fetchPosts"
                  :open="open"
                  activatable
                  active-class="primary--text"
                  flat
                  open-on-click
                  transition
                  prepend-icon="home"
                  >
                  <v-icon
                    v-if="!item.children"
                    slot="prepend"
                    slot-scope="{ item, active }"
                    :color="active ? 'primary' : ''"
                    >
                    mdi-account
                  </v-icon>
                </v-treeview>
                <v-layout justify-start align-start>
                  <v-btn flat color="secondary">
                    <v-icon left>add</v-icon>
                    {{ __('Add New Chapter') }}
                  </v-btn>
                </v-layout>
              </v-flex>

              <!-- view -->
              <v-flex md7 xs12>
                <v-scroll-y-transition mode="out-in">
                  <div
                    v-if="!selected"
                    style="align-self: center;"
                    >
                    {{ __('Select a Course') }}
                  </div>
                  <v-card
                    v-else
                    :key="selected.id"
                    class="pt-4 mx-auto"
                    flat
                    max-width="400"
                    >
                    <!-- <v-card-text>
                      <h3 class="title mb-3">
                        {{ selected.title }}
                      </h3>
                      <p class="mb-3">{{ selected.body }}</p>
                    </v-card-text> -->
                    <v-card flat class="card--emptystate mb-3 text-xs-center grey lighten-4">
                      <v-card-text>
                        <h3 class="subheading font-weight-normal grey--text">{{ __('Upload Interactive Content') }}</h3>
                      </v-card-text>
                    </v-card>
                    <v-text-field
                      label="Part Title"
                      box
                      >
                    </v-text-field>
                    <v-text-field
                      label="Icon"
                      box
                      >
                    </v-text-field>
                    <v-text-field
                      label="Part Description"
                      box
                      >
                    </v-text-field>
                  </v-card>
                </v-scroll-y-transition>
              </v-flex>
            </v-layout>
          </v-card>

          <!-- create form -->
          <v-card>
            <v-card-text>
              <v-layout row wrap>
                <v-flex md6 xs12>
                <v-text-field
                  label="Chapter Number"
                  box
                ></v-text-field>
                <v-text-field
                  label="Chapter Title"
                  box
                ></v-text-field>
                <v-text-field
                  label="Chapter Description"
                  box
                ></v-text-field>
              </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Create',

  data () {
    return {
      courses: {
        items: [
          [
            {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
          ]
        ]
      },
      active: [],
      avatar: null,
      open: ['Chapter 1'],
      posts: [],
    }
  },

  computed: {
    items () {
      return [
        {
          name: 'Chapter 1',
          children: this.posts
        }
      ]
    },
    selected () {
      if (!this.active.length) return undefined

      const id = this.active[0]

      return this.posts.find(post => post.id === id)
    }
  },

  // watch: {
  //   selected: 'randomAvatar'
  // },

  methods: {
    async fetchPosts (item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      // await pause(400)

      return fetch(this.courses.items)
        .then(res => res.json())
        .then(json => (item.children.push(...json)))
        .catch(err => console.warn(err))
    },
    // randomAvatar () {
    //   this.avatar = avatars[Math.floor(Math.random() * avatars.length)]
    // }
  }
}
</script>
