<template>
  <section>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="mb-4">
            <h1 class="headline font-weight-bold">
              {{ __('Branding') }}
            </h1>
          </div>
          <v-form
            @submit.prevent="saveBranding"
            method="POST"
            >
            <v-card>
              <v-card-text>
                <v-text-field
                  box
                  label="Site Name"
                  name="site_title"
                  v-model="resource.site_title"
                  >
                </v-text-field>

                <v-text-field
                  box
                  label="Site Tagline"
                  name="site_tagline"
                  v-model="resource.site_tagline"
                  >
                </v-text-field>

                <v-text-field
                  box
                  label="Site Author"
                  name="site_author"
                  v-model="resource.site_author"
                  >
                </v-text-field>

                <v-text-field
                  box
                  label="Site Email"
                  name="site_email"
                  v-model="resource.site_email"
                  >
                </v-text-field>

                <v-text-field
                  box
                  label="Year Established"
                  name="site_year"
                  v-model="resource.site_year"
                  >
                </v-text-field>

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
    axios
      .get('/api/v1/settings/branding')
      .then((response) => {
        this.resource = response.data
        console.log(this.resource)
      })
  },

  methods: {
    saveBranding() {
      axios
        .post('/api/v1/settings/store', this.resource)
        .then((response) => {
          console.log(this.resource, 'data')
          this.$router.push({name: 'settings.branding'})
        })
    },
  }
}
</script>
