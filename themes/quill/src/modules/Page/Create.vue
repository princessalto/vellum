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
              :data-vv-as="trans('Title')"
              :error-messages="errors.collect('title')"
              v-validate="'required'"
              box
              autofocus
              label="Title"
              name="title"
              v-model="resource.title"
              @input="slugify"
              @click:append="resource.viewSlug = !resource.viewSlug"
            ></v-text-field>
            <v-slide-y-transition mode="out-in">
              <v-text-field
                :append-icon="resource.lockSlug ? 'lock' : 'lock_open'"
                :error-messages="errors.collect('slug')"
                :hint="trans('Locking this field will prevent the title field from overriding this current value')"
                :label="trans('Slug')"
                :placeholder="trans('app://your-custom-url-here')"
                :readonly="resource.lockSlug"
                @blur="resource.lockSlug = true"
                @click:append="resource.lockSlug = !resource.lockSlug"
                outline
                class="mb-2"
                name="slug"
                persistent-hint
                v-focus
                v-if="resource.viewSlug"
                v-model.trim="resource.item.slug"
                v-validate="'required'"
              ></v-text-field>
            </v-slide-y-transition>

            <v-text-field
              :data-vv-as="trans('Code')"
              :error-messages="errors.collect('code')"
              v-validate="'required'"
              @click:append="() => {resource.lockSlug = !resource.lockSlug}"
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
        lockSlug: false,
        viewSlug: false,
      },
    }
  },

  mounted () {
    this.ckEditor()
  },

  methods: {
    slugify ($value) {
      if (!this.resource.lockSlug) {
        if (typeof $value === 'undefined') {
          this.resource.item.slug = this.$options.filters.slugify(this.resource.item.title)
        } else {
          this.resource.item.slug = this.$options.filters.slugify($value)
        }
      }
    },

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
