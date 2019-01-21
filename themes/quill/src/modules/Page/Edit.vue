<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex sm6 xs12>
        <v-form
          method="POST"
          action="/api/v1/pages/update"
          @submit.prevent="updateData"
          >
          <v-text-field
            :data-vv-as="trans('Title')"
            :error-messages="errors.collect('title')"
            v-validate="'required'"
            box
            autofocus
            label="Title"
            name="title"
            :value="resource.title"
          ></v-text-field>

          <v-text-field
           :data-vv-as="trans('Code')"
            :error-messages="errors.collect('code')"
            v-validate="'required'"
            box
            autofocus
            label="Code"
            name="code"
            :value="resource.code"
          ></v-text-field>

          <v-textarea
            :data-vv-as="trans('Body')"
            box
            autofocus
            label="Body"
            name="body"
            :value="resource.body"
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
      resource: {
        title: this.title,
        code: this.code
      }
    }
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
      axios.get('/api/v1/pages/update' + this.resource)
        .then(response => {
          this.resource = response.data.data
          console.log(response, 'data')
        })
    },
  },
}
</script>
