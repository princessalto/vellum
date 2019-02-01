<template>
  <section>
    <!-- <v-card class="mt-3 mb-3">
      <v-card-text>
        <v-text-field
          label="Title"
          outline
          >
        </v-text-field>

        <v-text-field
          label="Slug"
          append-icon="mdi-lock-outline"
          outline
          >
        </v-text-field>

        <v-text-field
          label="Code"
          outline
          >
        </v-text-field>

        <v-textarea
          label="Description"
          outline
          hide-details
          >
        </v-textarea>
      </v-card-text>
    </v-card> -->

    <v-card flat class="mt-3 mb-3">
      <v-card-text>
        <v-layout
          justify-space-between
          >
          <v-flex xs5>
            <v-treeview
              :active.sync="active"
              :items="items"
              :load-children="fetchUsers"
              :open.sync="open"
              activatable
              active-class="primary--text text--lighten-2"
              open-on-click
              transition
              expand-icon="mdi-chevron-down"
              >
              <v-icon
                v-if="!item.children"
                slot="prepend"
                slot-scope="{ item, active }"
                :color="active ? 'primary' : ''"
              >mdi-play-box-outline</v-icon>
            </v-treeview>
          </v-flex>
          <v-flex
            d-flex
            text-xs-center
            >
            <v-scroll-y-transition mode="out-in">
              <div
                v-if="!selected"
                class="grey--text"
                style="align-self: center;"
                >
                {{ __('Select an item to Edit') }}
              </div>
              <v-card
                v-else
                :key="selected.id"
                class="pt-4 mx-auto"
                flat
                max-width="400"
                >
                <v-card-text>
                  <v-text-field
                    box
                    id="name"
                    label="Part Title"
                    name="name"
                  ></v-text-field>

                  <v-text-field
                    box
                    id="icon"
                    label="Icon"
                    name="icon"
                  ></v-text-field>

                  <v-textarea
                    box
                    id="body"
                    label="Part Description"
                    name="body"
                  ></v-textarea>

                  <v-btn
                    depressed
                    color="primary"
                    >
                    {{ __('Save') }}
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-scroll-y-transition>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  name: 'Course',

  data () {
    return {
      active: [],
      open: [],
      users: []
    }
  },

  computed: {
    items () {
      return [
        {
          name: 'Chapter 1',
          children: this.users
        }
      ]
    },
    selected () {
      if (!this.active.length) return undefined

      const id = this.active[0]

      return this.users.find(user => user.id === id)
    }
  },

  methods: {
    async fetchUsers (item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(400)

      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => (item.children.push(...json)))
        .catch(err => console.warn(err))
    },
  }
}
</script>
