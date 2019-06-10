<template>
  <div>
    <v-dialog
      :persistent="modal.persistent"
      max-width="450px"
      lazy
      v-model="modal.model"
      >
      <v-card :class="{ 'text-xs-center': modal.alignedCenter }">
        <v-card-text>
          <v-icon
            clas="icon--xlarge"
            :class="modal.iconColor"
            v-html="modal.icon"
            v-if="modal.icon"
          ></v-icon>
          <img
            height="160px"
            :src="modal.image"
            v-if="modal.image"
          />
          <v-card-text>
            <h2
              class="headline"
              v-if="modal.title"
              v-html="trans(modal.title)"
            ></h2>
          </v-card-text>
          <v-card-text>
            <p v-if="modal.text" v-html="trans(modal.text)"></p>
          </v-card-text>
        </v-card-text>

        <v-card-actions
          v-if="modal.cancel || modal.action"
          :class="modal.discard ? `layout column wrap align-end` : `flex row wrap`"
          class="emphasis--medium"
          >
          <v-btn
            v-if="modal.discardText || modal.discard"
            :class="modal.discard ? `layout column wrap align-end` : `flex row wrap`"
            :color="modal.discardColor"
            @click.native="modal.discardCallback()"
            flat
            >
            {{ trans(modal.discardText) }}
          </v-btn>
          <v-btn
            v-if="modal.action"
            :class="modal.discard ? `layout column wrap align-end` : `flex row wrap order-xs2`"
            :color="modal.actionColor"
            @click.native="modal.actionCallback()"
            flat
            >
            {{ trans(modal.actionText) }}
          </v-btn>
          <v-btn
            v-if="modal.cancel"
            :class="modal.discard ? `layout column wrap align-end` : `flex row wrap order-xs1`"
            :color="modal.cancelColor"
            @click="modal.cancelCallback() || hide()"
            flat
            >
            {{ trans(modal.cancelText) }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'Modal',

  computed: {
    ...mapGetters({
      modal: 'modal/modal'
    })
  },

  methods: {
    show () {
      this.$store.dispatch('modal/PROMPT_DIALOG', { modal: true })
    },

    hide () {
      this.$store.dispatch('modal/PROMPT_DIALOG', { modal: false })
    },
  }
}
</script>
