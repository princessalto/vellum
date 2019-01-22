<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <template
        v-for="(item, i) in resources.items"
        >
        <v-flex
          :key= "i"
          md4 sm6 xs12
          >
          <v-card :id="item.code">
            <v-img
              class=""
              height="300"
              :src="item.thumbnail"
              gradient="to top right, rgba(100,115,201,.45), rgba(25,32,72,.3)"
              >
              <v-container fluid fill-height>
                <v-layout row wrap justify-center align-start>
                  <v-card-text class="white--text">
                    <h3 class="mb-2" v-html="item.name"></h3>
                    <p class="caption font-weight-bold">
                      <span>{{ __('Theme by: ') }} {{ item.author.name }}</span>
                    </p>
                    <p v-html="item.description"></p>
                  </v-card-text>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-actions class="pa-3">
              <template v-if="item.active">
                <v-btn flat disabled color="secondary">
                  {{ __('Currently Active') }}
                </v-btn>
              </template>
              <template v-else>
                <form
                  @submit.prevent="saveTheme"
                  action="/api/v1/settings/store"
                  method="POST"
                  >
                  <input type="hidden" name="active_theme" :value="item.code">
                  <v-btn
                    color="secondary"
                    flat
                    type="submit"
                    >
                    {{ __('Activate') }}
                  </v-btn>
                </form>
              </template>
              <v-spacer></v-spacer>
              <v-btn flat href="">
                {{ __('Details') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Index',

  mounted () {
    axios
      .get('/api/v1/themes/all')
      .then(response => {
        this.resources.items = response.data
      })
  },

  methods: {
    saveTheme() {
      axios
        .post('/api/v1/settings/store', this.resources)
        .then((response) => {
          this.$router.push({name: 'settings'})
          console.log(this.resources.items, 'data')
        })
    }
  },

  data () {
    return {
      resources: {
        items: []
      },
    }
  }
}
</script>
