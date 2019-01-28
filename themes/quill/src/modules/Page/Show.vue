<template>
  <section>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex lg8 md10 xs12>
          <v-toolbar flat class="transparent">
            <v-toolbar-title>
              {{ __('Back to Pages') }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-img
              :src="resource.feature"
              aspect-ratio="2.0"
              >
            </v-img>
            <v-card-text>
              <h1
                class="display-1 font-weight-bold"
                v-html="resource.title"
                >
              </h1>
            </v-card-text>
            <v-list dense class="mb-4">
              <v-list-tile>
                <v-list-tile-avatar>
                  <img :src="resource.profile">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title
                    v-html="resource.author"
                    >
                  </v-list-tile-title>
                  <v-list-tile-sub-title
                    v-html="resource.created"
                    >
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-card-text>
              <p v-html="resource.body"></p>
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

  name: 'Show',

  mounted () {
    /*eslint-disable*/
    axios
      .get('/api/v1/pages/' + this.$route.params.code)
      .then(response => {
      this.resource = response.data
    })
  },

  data () {
    return {
      resource: {}
    }
  },
}
</script>
