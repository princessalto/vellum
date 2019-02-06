<template>
  <section>
    <h1 class="mb-3">
      {{ __('Theme') }}
    </h1>

    <v-layout row wrap>
      <template
        v-for="(resource, i) in resources.items"
        >
        <v-flex
          :key= "i"
          md4 sm6 xs12
          >
          <v-card :id="resource.code">
            <v-img
              class=""
              height="300"
              :src="resource.thumbnail"
              gradient="to top right, rgba(100,115,201,.45), rgba(25,32,72,.3)"
              >
              <v-container fluid fill-height>
                <v-layout row wrap justify-center align-start>
                  <v-card-text class="white--text">
                    <h3 class="mb-2" v-html="resource.name"></h3>
                    <p class="caption font-weight-bold">
                      <span>{{ __('Theme by: ') }} {{ resource.author.name }}</span>
                    </p>
                    <p v-html="resource.description"></p>
                  </v-card-text>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-actions class="pa-3">
              <template v-if="resource.active">
                <v-btn flat disabled color="secondary">
                  {{ __('Currently Active') }}
                </v-btn>
              </template>
              <template v-else>
                <v-form
                  @submit.prevent="saveTheme({active_theme: resource.code})"
                  method="POST"
                  >
                  <input
                    type="hidden"
                    name="active_theme"
                    v-model="resource.code"
                    >
                  <v-btn
                    color="secondary"
                    flat
                    type="submit"
                    >
                    {{ __('Activate') }}
                  </v-btn>
                </v-form>
              </template>
              <v-spacer></v-spacer>
              <v-btn flat>
                {{ __('Details') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Theme',

  data () {
    return {
      resources: {
        items: []
      },
      resource: {}
    }
  },

  created() {
    axios
      .get('/api/v1/themes/all')
      .then(response => {
        this.resources.items = response.data
      })
  },
}
</script>
