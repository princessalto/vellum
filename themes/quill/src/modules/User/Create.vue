<template>
  <section>
    <v-form
      @submit.prevent="storeData"
      action="/api/v1/users/store"
      method="POST"
      >
      <v-container grid-list-lg>
        <!-- toolbar -->
        <v-layout row wrap>
          <v-toolbar flat class="transparent sticky px-0">
            <div class="headline font-weight-bold px-0">
              {{ __('Add User') }}
            </div>
            <v-spacer></v-spacer>
            <v-btn color="secondary" type="submit">
              {{ __('Save') }}
            </v-btn>
          </v-toolbar>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex md9 xs12>
                <v-card flat>
                  <v-card-text>
                    <h4 class="mb-3 grey--text text-uppercase">
                      {{ __('Account Details') }}
                    </h4>
                    <v-layout row wrap>
                      <v-flex md6 sm6 xs12>
                        <v-text-field
                          :data-vv-as="trans('First Name')"
                          :error-messages="errors.collect('firstname')"
                          autofocus
                          box
                          label="First Name"
                          name="firstname"
                          v-model="resource.firstname"
                          v-validate="'required'"
                          ></v-text-field>
                      </v-flex>
                      <v-flex md6 sm6 xs12>
                        <v-text-field
                          :data-vv-as="trans('Last Name')"
                          :error-messages="errors.collect('lastname')"
                          autofocus
                          box
                          label="Last Name"
                          name="lastname"
                          v-model="resource.lastname"
                          v-validate="'required'"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-text-field
                          :data-vv-as="trans('Email Address')"
                          :error-messages="errors.collect('email')"
                          autofocus
                          box
                          label="Email Address"
                          append-icon="email"
                          name="email"
                          v-model="resource.email"
                          v-validate="'required'"
                          >
                        </v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          :data-vv-as="trans('Username')"
                          :error-messages="errors.collect('username')"
                          autofocus
                          box
                          label="Username"
                          name="username"
                          v-model="resource.username"
                          v-validate="'required'"
                          >
                        </v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap>
                      <v-flex sm6 xs12>
                        <v-text-field
                          :data-vv-as="trans('Password')"
                          :error-messages="errors.collect('password')"
                          autofocus
                          box
                          label="Password"
                          name="password"
                          type="password"
                          v-model="resource.password"
                          v-validate="'required'"
                          >
                        </v-text-field>
                      </v-flex>

                      <v-flex sm6 xs12>
                        <v-text-field
                          :data-vv-as="trans('Retype Password')"
                          :error-messages="errors.collect('password')"
                          autofocus
                          box
                          label="Retype Password"
                          type="password"
                          name="password_confirmation"
                          v-model="resource.password"
                          v-validate="'required'"
                          >
                        </v-text-field>
                      </v-flex>
                    </v-layout>

                    <h4 class="mb-3 grey--text text-uppercase">
                      {{ __('Other Background Details') }}
                    </h4>
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex md3 xs12>
                <v-card flat class="text-xs-center">
                  <v-card-text>
                    <v-avatar size="180">
                      <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="">
                    </v-avatar>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Create',

  $_veeValidate: {
    validator: 'new'
  },

  data () {
    return {
      resource: {
        lockSlug: false,
        viewSlug: false,
      },
    }
  },

  mounted () {
    this.ckEditor()
  },

  methods: {
    slugify ($value) {
      if (!this.resource.lockSlug) {
        if (typeof $value === 'undefined') {
          this.resource.item.slug = this.$options.filters.slugify(this.resource.item.title)
        } else {
          this.resource.item.slug = this.$options.filters.slugify($value)
        }
      }
    },

    ckEditor () {
      ClassicEditor
      .create( document.querySelector( '#editor' ) )
      .catch( error => {
        console.error( error );
      } );
    },

    beforeFormSubmit () {
      this.$validator.reset()
      this.$validator.validateAll()
        .then(ok => {
          if (ok) {
            this.storeData()
          }
        })
    },

    storeData () {
      axios
        .post('/api/v1/users/store', this.resource)
        .then((response) => {
          this.$router.push({name: 'pages.create'}) //push to Create.vue view
        })
    },
  },
}
</script>
