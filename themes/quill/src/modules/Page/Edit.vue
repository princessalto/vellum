<template>
  <section>
    <v-form
      method="POST"
      @submit.prevent="updateData"
      >
      <v-toolbar flat class="sticky emphasis--medium">
        <v-toolbar-title>
          {{ __('Edit Page') }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          type="submit"
          depressed
          color="secondary"
          >
          {{ __('Save') }}
        </v-btn>
      </v-toolbar>

      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex md6 xs12>
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
              >
            </v-text-field>

            <v-textarea
              :data-vv-as="trans('Body')"
              box
              autofocus
              label="Body"
              name="body"
              v-model="resource.body"
            ></v-textarea>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </section>
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
    axios
      .get(`/api/v1/pages/edit/${this.$route.params.id}`)
      .then((response) => {
        this.resource = response.data
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
        .post('/api/v1/pages/update/' + this.$route.params.id, this.resource)
        .then((response) => {
          this.$router.push({name: 'pages.edit'});
        })
    },
  },
}
</script>
