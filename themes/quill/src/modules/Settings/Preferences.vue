<template>
  <section>
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg6 md8 xs12>
          <v-form
            action="/api/v1/settings/store"
            method="POST"
            @submit.prevent="savePreference"
            >
            <!-- <input type="hidden" name="user_id" :value="user().getKey()"> -->
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ __('Preferences') }}
              </v-card-title>
              <v-card-text>
                <v-text-field
                  label="Global Date Format"
                  :value="resource.date_format"
                  box
                  >
                </v-text-field>

                <v-text-field
                  label="Items per Page"
                  :value="resource.items_per_page"
                  box
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

  methods: {
    savePreference() {
      axios.post('/api/v1/settings/store', this.resource)
        .then((response) => {
          console.log(this.resource, 'data')
          this.$router.push({name: 'settings.store'})
        })
    },
  }
}
</script>
