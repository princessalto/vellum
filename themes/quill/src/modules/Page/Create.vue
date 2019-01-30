<template>
  <section>
    <v-form
      @submit.prevent="storeData"
      method="POST"
      >
      <v-card
        flat
        class="sticky emphasis--bg toolbar-mobile"
        >
        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-btn flat class="transparent" exact :to="{ name: 'pages.index' }">
              <span class="subheading primary--text">
                <v-icon size="16" class="primary--text">mdi-arrow-left</v-icon>
                {{ __('All Pages') }}
              </span>
            </v-btn>
          </v-layout>
          <v-layout row wrap justify-space-between>
            <h1 class="display-1">
              {{ __('Create Page') }}
            </h1>
            <v-btn class="mx-0" color="secondary" type="submit">
              {{ __('Save') }}
            </v-btn>
          </v-layout>
        </v-container>
      </v-card>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex md9 xs12>
            <v-card>
              <v-card-text>
                <h1 class="body-2 font-weight-bold mb-2">
                  {{ __('Page Title') }}
                </h1>
                <!-- <v-text-field
                  :data-vv-as="trans('Title')"
                  :error-messages="errors.collect('title')"
                  :hint="trans('Tap the icon to edit this page\'s slug')"
                  @click:append="resource.viewSlug = !resource.viewSlug"
                  @input="slugify"
                  append-icon="mdi-circle-edit-outline"
                  autofocus
                  placeholder="e.g. My First Page"
                  box
                  name="title"
                  single-line
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
                    autofocus
                    box
                    class="mb-2"
                    name="slug"
                    persistent-hint
                    v-if="resource.viewSlug"
                    v-model="resource.slug"
                    v-validate="'required'"
                  ></v-text-field>
                </v-slide-y-transition> -->

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

                <!-- <h1 class="body-2 font-weight-bold mb-2">
                  {{ __('Page Code') }}
                </h1>
                <v-text-field
                  :error-messages="errors.collect('code')"
                  @click:append="() => {resource.lockSlug = !resource.lockSlug}"
                  box
                  name="code"
                  single-line
                  placeholder="my-first-page"
                  v-model.trim="resource.code"
                  v-validate="'required'"
                ></v-text-field> -->

                <div id="post">
                  <input v-model="title" type="text" id="title" name="title" placeholder="Enter post title"/>
                  <p id="slug">http://tatthien.com/<span>{{ slug }}</span></p>
                </div>

                <h1 class="body-2 font-weight-bold mb-2">
                  {{ __('Page Content') }}
                </h1>
                <v-textarea
                  :data-vv-as="trans('Page Content')"
                  box
                  autofocus
                  single-line
                  name="body"
                  row="9"
                  v-model="resource.body"
                ></v-textarea>

                <!-- ck -->
                <!-- <div
                  :data-vv-as="trans('Body')"
                  autofocus
                  id="editor"
                  name="body"
                  v-model="resource.body"
                  >
                </div> -->
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md3 xs12>
            <v-card height="200" class="transparent upload-image emphasis--border">
              <v-card-text>
                <h1 class="body-2 font-weight-bold mb-2">
                  {{ __('Site Logo') }}
                </h1>
              </v-card-text>
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

  computed: {
    slug: function() {
      var slug = this.sanitizeTitle(this.title);
      return slug;
    }
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
    sanitizeTitle: function(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd');
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '');
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-');

      return slug;
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
          this.$router.go({name: 'pages.create'})
          // push to Create.vue view
        })
    },
  },
}
</script>
