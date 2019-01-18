<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex sm6 xs12>
        <v-form
          method="POST"
          action="/api/v1/pages/store"
          @submit.prevent="storePage"
          >
          <v-text-field
           :data-vv-as="trans('Title')"
            :error-messages="errors.collect('title')"
            v-validate="'required'"
            box
            autofocus
            label="Title"
            name="title"
            v-model="dataset.title"
          ></v-text-field>

          <v-text-field
           :data-vv-as="trans('Code')"
            :error-messages="errors.collect('code')"
            v-validate="'required'"
            box
            autofocus
            label="Code"
            name="code"
            v-model="dataset.code"
          ></v-text-field>

          <v-textarea
            :data-vv-as="trans('Body')"
            box
            autofocus
            label="Body"
            name="body"
            v-model="dataset.body"
          ></v-textarea>

          <!-- ck -->
          <div
            :data-vv-as="trans('Body')"
            autofocus
            id="editor"
            name="body"
            v-model="dataset.body"
            >
          </div>

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
  $_veeValidate: {
    validator: 'new'
  },

  store,
  name: 'Create',

  data () {
    return {
      dataset: {
        title: '',
        code: '',
        body: '',
      }
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
            this.storePage()
          }
        })
    },

    storePage () {
      axios.post('/api/v1/pages/store', this.dataset).then((response) => {
        console.log(this.dataset, 'data')
        this.$router.push({name: 'pages'})
      })
    },
  },
}
</script>
