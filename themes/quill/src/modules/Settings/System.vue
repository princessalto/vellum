<template>
  <section>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat class="transparent">
            <h1 class="display-1 mb-3">
              {{ __('System Information') }}
            </h1>
            <p class="mb-2">
              {{ __('Listed here are the system specific informations of your application.') }}
            </p>
            <p class="mb-2">
              {{ __('Some are configurable while others are either read-only or editable only on the server.') }}
            </p>
            <v-alert
              :value="true"
              type="error lighten-1"
              dismissible
              transition="slide-y-transition"
              >
              {{ __('You are in debug mode.Set environment to `production` and debug to `off` if deployed on a live server.') }}
            </v-alert>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-card-text>
              <h1 class="body-2 font-weight-bold mb-2">
                {{ __('Date Format') }}
              </h1>
              <v-text-field
                box
                name="date_format"
                placeholder="Date Format"
                single-line
                v-model="resource.date_format"
                >
              </v-text-field>

              <h1 class="body-2 font-weight-bold mb-2">
                {{ __('Items per Page') }}
              </h1>
              <v-text-field
                box
                name="items_per_page"
                placeholder="Items per Page"
                single-line
                v-model="resource.items_per_page"
                >
              </v-text-field>

              <v-checkbox
                label="Center the main content when possible."
                v-model="resource.center_main_content"
                >
              </v-checkbox>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'System',

  data () {
    return {
      resource: {}
    }
  },

  created() {
    axios
      .get('/api/v1/settings/preferences')
      .then((response) => {
        this.resource = response.data
        console.log(this.resource)
      })
  },

  methods: {
    savePreferences() {
      axios
        .post('/api/v1/settings/store', this.resource)
        .then((response) => {
          console.log(this.resource, 'data')
          this.$router.go({name: 'settings.preferences'})
        })
    },
  }
}
</script>
