<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex sm4 xs12>
        <v-card>
          <v-card-title class="title font-weight-bold">
            {{ __('Site') }}
          </v-card-title>
          <v-card-text>
            <v-card hover>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-title>
                    {{ __('Test') }}
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm8 xs12>
        <v-card>
          <v-card-text>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-title>

                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Edit',

  data () {
    return {
      resource: {}
    }
  },
}
</script>
