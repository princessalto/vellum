<template>
  <section>
    <v-toolbar class="sticky emphasis--medium" flat>
      <v-toolbar-title>
        {{ __('Create Course') }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed color="secondary">Save</v-btn>
    </v-toolbar>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex md10 xs12>
          <v-tabs
            color="transparent"
            >
            <v-tabs-slider color="secondary"></v-tabs-slider>
            <v-tab
              ripple
              key="course"
              id="course"
              >
              <strong>{{ trans('Course') }}</strong>
            </v-tab>
            <v-tab
              ripple
              key="meta"
              id="meta"
              >
              <strong>{{ trans('Meta') }}</strong>
            </v-tab>
            <v-tab
              ripple
              key="playlist"
              id="playlist"
              >
              <strong>{{ trans('Playlist') }}</strong>
            </v-tab>

            <v-tab-item href="#course">
              <course></course>
            </v-tab-item>
            <v-tab-item ref="#meta">
              <meta-card></meta-card>
            </v-tab-item>
            <v-tab-item ref="#playlist">
              <playlist></playlist>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import Course from './partials/Course'
import MetaCard from './partials/MetaCard'
import Playlist from './partials/Playlist'

export default {
  name: 'Test',

  components: {
    Course,
    MetaCard,
    Playlist,
  },

  data () {
    return {
      tab: null,
    }
  }
}
</script>
