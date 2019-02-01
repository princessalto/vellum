<template>
  <section>
    <v-card class="mt-3">
      <v-card-title>
        {{ __('Chapter') }}
      </v-card-title>

      <v-card-text>
        <v-text-field
          label="Chapter Number"
          value="Chapter 1"
          outline
          >
        </v-text-field>

        <v-text-field
          label="Chapter Title"
          outline
          >
        </v-text-field>

        <v-textarea
          label="Chapter Description"
          outline
          >
        </v-textarea>
      </v-card-text>

      <v-divider></v-divider>

      <v-card>
        <v-card-title>
          {{ __('Part') }}
        </v-card-title>
        <v-card flat color="emphasis--medium">
          <v-card-text>

            <v-card flat>
              <v-card-text>
                <template
                  class="mt-3 mb-4"
                  v-if="courses.length > 0"
                  >
                  <v-slide-y-transition
                    class="py-0"
                    group
                    >
                    <template v-for="(item, i) in courses">
                     <!--  <v-divider
                        v-if="i !== 0"
                        :key="`${i}-divider`"
                        class="grey lighten-4"
                      ></v-divider> -->

                      <v-card-text
                        :key="`${i}-${item.text}`"
                        >
                        <v-layout row align-center>
                          <v-avatar size="60" class="mr-3">
                            <img src="https://images.unsplash.com/photo-1541603617355-5f53b42522f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b7f9c25a0cce01cea8650d30a588629&auto=format&fit=crop&w=375&q=80" alt="">
                          </v-avatar>
                          <div>
                            <p class="pb-0 mb-0">
                              <strong v-html="item.title"></strong>
                            </p>
                            <p class="pb-0 mb-0" v-html="item.body"></p>
                          </div>
                          <v-spacer></v-spacer>
                          <v-tooltip bottom>
                            <v-btn icon slot="activator">
                              <v-icon small color="secondary">edit</v-icon>
                            </v-btn>
                            <span>{{ __('Edit') }}</span>
                          </v-tooltip>
                        </v-layout>
                      </v-card-text>

                      <!-- edit-dialog -->
                      <v-edit-dialog
                        :key="i"
                        :return-value.sync="item.name"
                        @cancel="cancel"
                        @close="close"
                        @open="open"
                        @save="save"
                        large
                        lazy
                        persistent
                      >
                        <div>{{ item.name }}</div>
                        <div slot="input" class="mt-3 title">{{ __('Update') }}</div>
                        <v-text-field
                          slot="input"
                          v-model="item.name"
                          label="Edit"
                          single-line
                          counter
                          autofocus
                        ></v-text-field>
                      </v-edit-dialog>
                    </template>
                  </v-slide-y-transition>
                </template>
              </v-card-text>

              <v-divider :key="title"></v-divider>

              <v-card-text>
                <!-- editor -->
                <form
                  action=""
                  @submit.prevent="create"
                  >

                  <v-layout row wrap>
                    <v-flex md4 xs12>
                      <v-card hover flat height="100%" class="mb-3 pa-4 transparent featured-image__card">
                        <v-layout column fill-height justify-center align-center>
                          <student-icon
                            width="60"
                            height="60"
                            >
                          </student-icon>
                          <div class="grey--text text--darken-1">{{ __('Add interactive content') }}</div>
                        </v-layout>
                      </v-card>
                    </v-flex>

                    <v-flex md8 xs12>
                      <v-card flat>
                        <v-text-field
                          v-model='title'
                          required
                          label="Part Title"
                          value="Part 1"
                          outline
                          >
                        </v-text-field>

                        <v-textarea
                          v-model='body'
                          label="Part Description"
                          outline
                          hide-details
                          >
                        </v-textarea>
                      </v-card>
                    </v-flex>
                  </v-layout>
                  <div class="mt-3">
                    <v-btn type="submit" color="secondary" class="ma-0" outline>
                      {{ trans('Add Part') }}
                    </v-btn>
                  </div>
                </form>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
        <v-card-text>
          <v-btn outline color="secondary">{{ __('Add Chapter') }}</v-btn>
        </v-card-text>
      </v-card>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Playlist',

  data () {
    return {
      active: [],
      avatar: null,
      users: [],
      courses: [
        {
          done: false,
          title: 'Foobar',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro totam nisi nostrum ipsam? Inventore provident at accusamus aut, optio cum reprehenderit explicabo sed in. Odio rem enim asperiores voluptatem adipisci.'
        },
      ],
      title: null,
      body: null,
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
    create () {
      this.courses.push({
        done: false,
        title: this.title,
        body: this.body,
      })
      this.title = null
      this.body = null
    },

    save () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancel () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    open () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    close () {
      console.log('Dialog closed')
    }
  }
}
</script>
