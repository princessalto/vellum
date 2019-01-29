<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex sm6 xs12>
          <v-img :src="app.site_logo" max-width="180px"></v-img>
        </v-flex>
        <v-flex sm6 xs12>
          <p>
            <strong>{{ __('Name') }}: </strong>
            <span>{{ resource.site_title }}</span>
            <span>{{ resource.version }}</span>
          </p>
          <p>
            <strong>{{ __('Author') }}: </strong>
            <span>{{ resource.site_author }}</span>
          </p>
          <p>
            <strong>{{ __('Copyright') }}: </strong>
            <span>{{ resource.APP_NAME }}</span>
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'Application',

  data () {
    return {
      resource: {}
    }
  },

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },

  created() {
    axios
      .get('/api/v1/settings/system')
      .then((response) => {
        this.resource = response.data
        console.log(this.resource)
      })
  },
}
</script>
