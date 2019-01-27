<template>
  <section>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="mb-4">
            <h1 class="headline font-weight-bold">
              {{ __('Preferences') }}
            </h1>
          </div>
          <v-form
            @submit.prevent="savePreferences"
            method="POST"
            >
            <v-card>
              <v-card-text>
                <v-text-field
                  box
                  label="Date Format"
                  name="date_format"
                  v-model="resource.date_format"
                  >
                </v-text-field>

                <v-text-field
                  box
                  label="Items per Page"
                  name="items_per_page"
                  v-model="resource.items_per_page"
                  >
                </v-text-field>

                <v-checkbox
                  label="Center the main content when possible."
                  v-model="resource.center_main_content"
                  >
                </v-checkbox>
                <v-btn
                  color="secondary"
                  depressed
                  type="submit"
                  >
                  {{ __('Save') }}
                </v-btn>
              </v-card-text>
            </v-card>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Preferences',

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
          this.$router.push({name: 'settings.preferences'})
        })
    },
  }
}
</script>
