<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <template
        v-for="(item, i) in resource.items"
        >
        <v-flex  :key= "i" md4 sm6 xs12>
          <v-card hover>
            <v-list three-line>
              <v-list-tile>
                <v-list-tile-action>
                  <v-list-tile-avatar dark :color="item.iconBackground">
                    <v-icon
                      :color="item.iconColor"
                      v-html="item.icon"
                      >
                    </v-icon>
                  </v-list-tile-avatar>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title
                    class="font-weight-bold"
                    v-html="item.title"
                    >
                  </v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subTitle">
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-card-actions class="px-3 pb-3 pt-3">
              <small color="grey--text">
                {{ __('Application link') }}
              </small>
              <v-spacer></v-spacer>
              <v-icon color="grey--text text--lighten-3">mdi-call-made</v-icon>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Index',

  data () {
    return {
      resource: {
        items: [
          {
            iconBackground: 'blue lighten-5',
            iconColor: 'blue',
            icon: 'mdi-menu',
            title: 'Main Menu',
            subTitle: 'The main menu of the site.'
          },
          {
            iconBackground: 'purple lighten-5',
            iconColor: 'purple',
            icon: 'public',
            title: 'Social Menu',
            subTitle: 'Social menus are usually located on the footer or at the end of blog posts'
          }
        ]
      }
    }
  }
}
</script>
