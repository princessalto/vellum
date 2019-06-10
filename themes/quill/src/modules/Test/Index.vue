<template>
  <section>
    <toolbar-menu :items="toolbar" class="mb-3"></toolbar-menu>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <!-- iconmenu -->
          <v-card class="mb-3">
            <v-card-title class="emphasis--medium">
              {{ trans('Icon Menu') }}
            </v-card-title>
            <v-card-text>
              <icon-menu :items="iconmenu"></icon-menu>
            </v-card-text>
          </v-card>
          <!-- iconmenu -->

          <!-- dialogbox -->
          <v-card flat class="mb-3 text-xs-center">
            <v-card-title
              class="emphasis--medium"
              >
              {{ trans('Dialogbox') }}
            </v-card-title>
            <v-card-text>
              <dialogbox></dialogbox>
              <v-btn
                class="v-btn--gradient"
                @click="openDialogbox"
                >
                {{ trans('Open Dialog Test') }}
              </v-btn>
            </v-card-text>
          </v-card>
          <!-- dialogbox -->

          <!-- modal -->
          <v-card flat class="mb-3 text-xs-center">
            <v-card-title
              class="emphasis--medium"
              >
              {{ trans('Modal') }}
            </v-card-title>
            <v-card-text>
              <modal></modal>
              <v-btn
                @click="openModal"
                >
                {{ trans('Open Modal') }}
              </v-btn>
            </v-card-text>
          </v-card>
          <!-- modal -->

          <!-- grid / list view -->
          <template v-if="toggletoolbar.toggleview">
            <data-table :items="courses"></data-table>
          </template>

          <template v-else>
            <data-iterator :items="courses"></data-iterator>
          </template>
          <!-- grid / list view -->
        </v-flex>

        <v-flex sm4 xs12>
          <!-- tag -->
          <v-card class="mb-3">
            <v-card-title class="emphasis--medium">
              {{ trans('Tags Card') }}
            </v-card-title>
            <v-card-text>
              <tag :items="tag"></tag>
            </v-card-text>
          </v-card>
          <!-- tag -->

          <!-- category -->
          <v-card class="mb-3 emphasis--medium">
            <v-card-title>
              {{ trans('Category Card') }}
            </v-card-title>
            <category :items="category"></category>
          </v-card>
          <!-- category -->
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  name: 'Index',

  data () {
    return {
      toolbar: {
        title: 'All Courses',
      },

      timeline: {
        items: [
          {
            title: 'A Series of UnforssfasdfEvef',
            category: 'video'
          }
        ]
      },

      iconmenu: {
        model: '',
        label: 'Choose Icon Menu'
      },

      tag: {
        model: [],
        clearable: false,
        items: [
          'Programming',
          'Reading',
          'Eating'
        ],
      },

      category: {
        hasSaved: false,
        isEditing: true,
        categoryList: false,
        categoryCreate: true,
        label: 'Choose Category',
        items: [
          { name: 'Video', icon: 'videocam' },
          { name: 'Image', icon: 'photo' },
        ],
        chipColor: 'secondary',
        iconColor: 'white--text',
      },

      courses: {
        timestamp: false,
        slug: false,
        author: false,
        created: false,
        modified: false,
        selected: [],
        bulkDestroy: false,
        selectAll: true,
        search: '',
        cardLink: '/admin/courses/show',
        chip: true,
        hover: true,
        lg3: false,
        showMimetype: false,
        showToolbar: false,
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Featured', value: 'thumbnail' },
          { text: 'Title', value: 'title' },
          { text: 'Category', value: 'category' },
          { text: 'Part', value: 'part' },
          { text: 'Status', value: 'status' },
          {
            text: 'Actions',
            value: 'actions',
            sortable: false,
            align: 'center'
          },
        ],
        items: [
          {
            id: '1',
            title: 'Develop Personal Effectiveness at Operations Level',
            thumbnail: '//preview.ibb.co/cMCYYz/card_Media.png',
            category: 'DPE OPS',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            part: '6',
            status: 'enrolled'
          },
          {
            id: '2',
            title: 'Solve Problems and Make Decisions at Supervisory Level',
            thumbnail: '//cdn.dribbble.com/users/904433/screenshots/2994633/animation_fin.gif',
            category: 'DPE OPS',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            part: '6',
          },
          {
            id: '3',
            title: 'Communicate and Relate Effectively at the Workplace at Operations Level',
            thumbnail: '//i.pinimg.com/564x/74/2b/8e/742b8e6e87ef56e698b9c8bc4e930dae.jpg',
            category: 'DPE OPS',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            part: '6',
          },
          {
            id: '4',
            title: 'Develop Personal Effectiveness at Supervisory Level',
            thumbnail: '//cdn.dribbble.com/users/2559/screenshots/3145041/illushome_1x.png',
            category: 'DPE OPS',
            timestamp: '2 hours ago',
            description: 'Apply knowledge and skills such as establishing personal goals and relating them to workplace goals. Far far away, behind the word',
            part: '6',
          },
        ]
      },
    }
  },

  computed: {
    ...mapGetters({
      dialogbox: 'dialogbox/dialogbox',
      modal: 'modal/modal',
      toggletoolbar: 'toolbar/toolbar',
    }),

    empty: function () {
      return true // this.dataset.items.length === 0
    },

    page: function () {
      return this.$route.meta
    },
  },

  methods: {
    openModal () {
      this.$store.dispatch(
        'modal/PROMPT_DIALOG',
        Object.assign(
          this.modal,
          {
            model: true,
            title: 'Delete Resources',
            text: 'Are you sure you want to permanently delete those resources?',
            persistent: true,
            width: '100%',
            alignedCenter: true,
            actionText: 'Delete',
            actionColor: 'error',
            actionCallback () {
              this.model = false
            },
            discard: false
          }
        )
      )
    },

    openDialogbox () {
      this.$store.dispatch(
        'dialogbox/PROMPT_DIALOG',
        Object.assign(
          this.dialogbox,
          {
            model: true,
            // icon: 'add',
            // iconColor: 'success--text',
            image: '//img.stackshare.io/stack/26394/laravel_logo-circle-tp-xs.png',
            title: 'Delete Resources',
            text: 'You are about to permanently delete those resources.This action is irreversible. Do you want to proceed?',
            persistent: true,
            width: '100%',
            alignedCenter: true,

            actionText: 'Delete',
            actionColor: 'error',
            actionCallback () {
              this.model = false
              // store.dispatch.saveUserOrSomeShitLikeThat
              // then...
            },

            discard: false,
          }
        )
      )
    },
  }
}
</script>
