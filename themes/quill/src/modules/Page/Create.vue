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
            <v-card>
              <v-card-text>
                <v-text-field
                  :data-vv-as="trans('Title')"
                  :error-messages="errors.collect('title')"
                  :hint="trans('Tap the icon to edit this page\'s slug')"
                  :label="trans('Title')"
                  @click:append="resource.viewSlug = !resource.viewSlug"
                  @input="slugify"
                  append-icon="mdi-circle-edit-outline"
                  name="title"
                  box
                  autofocus
                  v-model="resource.title"
                  v-validate="'required'"
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
                    class="mb-2"
                    name="slug"
                    box
                    persistent-hint
                    autofocus
                    v-if="resource.viewSlug"
                    v-model="resource.slug"
                    v-validate="'required'"
                  ></v-text-field>
                </v-slide-y-transition>

                <!-- <v-text-field
                  :data-vv-as="trans('Code')"
                  :error-messages="errors.collect('code')"
                  v-validate="'required'"
                  @click:append="() => {resource.lockSlug = !resource.lockSlug}"
                  box
                  autofocus
                  label="Code"
                  name="code"
                  v-model="resource.code"
                ></v-text-field> -->

                <v-text-field
                  :error-messages="errors.collect('code')"
                  :label="trans('Code')"
                  @click:append="() => {resource.lockSlug = !resource.lockSlug}"
                  box
                  name="code"
                  v-model.trim="resource.code"
                  v-validate="'required'"
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
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md3 xs12>
            <v-card hover flat height="160" class="mb-3 pa-4 transparent featured-image__card">
              <v-layout
                column
                fill-height
                justify-center
                align-center
                >
                <!-- <student-icon
                  width="80"
                  height="80"
                  >
                </student-icon> -->
                <v-icon class="grey--text text--lighten-2" size="80">
                  mdi-image-filter-center-focus
                </v-icon>
                <div class="grey--text text--darken-1">
                  {{ __('Click to add cover photo') }}
                </div>
              </v-layout>
              <input type="file" v-on:change="resource.feature">
            </v-card>
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
        title: '',
        slug: '',
      },
    }
  },

  mounted () {
    this.ckEditor();
  },

  methods: {
    slugify ($value) {
      if (!this.resource.lockSlug) {
        if (typeof $value === 'undefined') {
          this.resource.slug = this.$options.filters.slugify(this.resource.title)
        } else {
          this.resource.slug = this.$options.filters.slugify($value)
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
          this.$router.push({name: 'pages.create'})
          // push to Create.vue view
        })
    },
  },
}
</script>
