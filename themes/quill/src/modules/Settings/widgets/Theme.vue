<template>
  <section>
    <h1 class="mb-3">
      {{ __('Server Information') }}
    </h1>

    <v-card>
      <v-card-text>
        <p>Theme</p>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Theme',

  data () {
    return {
      resource: {}
    }
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
