<template>
  <section>
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg6 md8 xs12>
          <v-form
            action="/api/v1/branding"
            method="POST"
            @submit.prevent="savePreference"
            >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ __('Branding') }}
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="resource.date_format"
                  box
                  label="Global Date Format"
                  name="date_format"
                  >
                </v-text-field>

                <v-text-field
                  label="Items per Page"
                  v-model="resource.items_per_page"
                  name="items_per_page"
                  box
                  >
                </v-text-field>

                <v-checkbox
                  label="Center the main content when possible."
                  :value="resource.center_main_content"
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
  name: 'Branding',

  data () {
    return {
      resource: {}
    }
  },

  created() {
    // axios
    //   .get(`/api/v1/pages/edit/${this.$route.params.id}`)
    //   .then((response) => {
    //     this.resource = response.data
    //   })
  },

  methods: {
    savePreference() {
      axios.post('/api/v1/branding', this.resource)
        .then((response) => {
          console.log(this.resource, 'data')
          this.$router.push({name: 'settings.branding'})
        })
    },
  }
}
</script>
