<template>
  <section>
    <v-form
      @submit.prevent="storeData"
      action="/api/v1/pages/store"
      method="POST"
      >
      <v-toolbar flat class="sticky">
        <v-toolbar-title class="subheading font-weight-bold">
          {{ __('Create') }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="secondary" type="submit">
          {{ __('Save') }}
        </v-btn>
      </v-toolbar>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex md9 xs12>
            <v-text-field
              :data-vv-as="trans('TItle')"
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

            <!-- ck -->
            <div
              :data-vv-as="trans('Body')"
              autofocus
              id="editor"
              name="body"
              v-model="resource.body"
              >
            </div>
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
  name: 'Create',

  $_veeValidate: {
    validator: 'new'
  },

  data () {
    return {
      resource: {
        title: '',
        code: '',
        body: '',
      },
    }
  },

  mounted () {
    this.ckEditor()
  },

  methods: {
    ckEditor () {
      ClassicEditor
      .create( document.querySelector( '#editor' ) )
      .catch( error => {
        console.error( error );
      } );
    },

    beforeFormSubmit () {
      this.$validator.reset()
      this.$validator.validateAll()
        .then(ok => {
          if (ok) {
            this.storeData()
          }
        })
    },

    storeData () {
      axios
        .post('/api/v1/pages/store', this.resource)
        .then((response) => {
          // console.log(this.resource, 'data')
          this.$router.push({name: 'pages.create'}) //push to Create.vue view
        })
    },
  },
}
</script>
