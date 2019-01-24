<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-text>
              <h1 class="title font-weight-bold mb-4" v-html="resource.title"></h1>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img :src="resource.useravatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="resource.author"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="resource.created"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-card-text>
              <p v-html="resource.body"></p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
