<template>
  <section>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <!-- <v-flex md8 xs12> -->
          <!-- <v-card> -->
          <!-- <v-card> -->
            <!-- <v-card-text> -->
              <display-assignment></display-assignment>
            <!-- </v-card-text> -->
          <!-- </v-card> -->
        <!-- </v-flex> -->
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from './store'
// import DisplayAssignment from '@/modules/Yggdrasil/Assignment/Assignment.vue'

export default {
  store,

  name: 'Show',

  components: {
    // DisplayAssignment
  },

  data () {
    return {
      active: [],
      avatar: null,
      open: [],
      users: [],
      tasks: [
        {
          done: false,
          title: 'Foobar',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro totam nisi nostrum ipsam? Inventore provident at accusamus aut, optio cum reprehenderit explicabo sed in. Odio rem enim asperiores voluptatem adipisci.'
        },
      ],
      task: null,
      title: null,
      body: null,
      resource: {
        rowsPerPageItems: [3, 6, 9, 12, 'All'],
        pagination: {
          rowsPerPage: 3,
        },
        search: '',
        selected: [],
        items: [],
        data: null,
      },
    }
  },
}
</script>
