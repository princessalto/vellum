<template>
  <v-card>
    <v-card-text>
      <p>Account</p>
    </v-card-text>
  </v-card>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Account',

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
