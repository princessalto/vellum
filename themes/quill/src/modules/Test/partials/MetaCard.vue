<template>
  <section>
    <v-layout row>
      <v-flex md8 xs12>
        <v-card class="mt-3">
          <v-card-text>
            <v-text-field
              small
              append-icon="search"
              class="mb-3"
              hide-details
              label="Search Category"
              outline
              >
            </v-text-field>

            <v-radio-group v-model="category">
              <v-radio
                v-for="n in 10"
                :key="n"
                :label="`Category ${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 xs12>
        <v-card hover flat height="160" class="mb-3 pa-4 transparent featured-image__card">
          <v-layout column fill-height justify-center align-center>
            <student-icon
              width="80"
              height="80"
              >
            </student-icon>
            <div class="grey--text text--darken-1">{{ __('Click to add cover photo') }}</div>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'MetaCard',

  data () {
    return {
      category: 1,
    }
  }
}
</script>
