<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex sm6 xs12>
        <v-form
          @submit.prevent="updateData"
          action="/api/v1/pages/update"
          method="POST"
          >
          <input
            :value="resource.id"
            disabled
            id="id"
            name="id"
            required
            type="hidden"
            >
          <v-text-field
            :data-vv-as="trans('Title')"
            :error-messages="errors.collect('title')"
            v-validate="'required'"
            box
            autofocus
            label="Title"
            name="title"
            v-model="resource.title"
          ></v-text-field>

          <v-text-field
           :data-vv-as="trans('Code')"
            :error-messages="errors.collect('code')"
            v-validate="'required'"
            box
            autofocus
            label="Code"
            name="code"
            v-model="resource.code"
          ></v-text-field>

          <v-textarea
            :data-vv-as="trans('Body')"
            box
            autofocus
            label="Body"
            name="body"
            v-model="resource.body"
          ></v-textarea>

          <!-- button -->
          <v-btn class="secondary" type="submit">{{ __('Create') }}</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Edit',

  $_veeValidate: {
    validator: 'new'
  },


  data () {
    return {
      resource: {}
    }
  },

  created() {
    // console.log(this.$route.params)
    axios
      .post('/api/v1/pages/find', {id: this.$route.params.id})
      .then((response) => {
        this.resource = response.data
        console.log(response)
      })
  },

  methods: {
    beforeFormSubmit () {
      this.$validator.reset()
      this.$validator.validateAll()
        .then(ok => {
          if (ok) {
            this.updateData()
          }
        })
    },

    updateData () {
      axios
        .post('/api/v1/pages/' + this.$route.params.id + '/update')
        .then((response) => {
          this.$router.push({name: 'pages.update'});
          console.log(response, 'Response')
        })
    },
  },
}
</script>
