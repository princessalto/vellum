<template>
  <section>
    <template v-if="dataset.loaded">
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <toolbar-archived :items="toolbar"></toolbar-archived>
            <!-- <v-toolbar>
              <v-spacer></v-spacer>
              <v-btn
                v-model="resources.showBulk"
                icon
                @click.native="resources.showBulk = !resources.showBulk"
                >
                <v-icon>mdi-checkbox-multiple-marked-circle-outline</v-icon>
              </v-btn>
            </v-toolbar> -->

            <v-card class="sticky">
              <v-data-table
                :headers="resources.headers"
                :items="resources.items"
                :pagination.sync="resources.pagination"
                class="elevation-1"
                item-key="title"
                select-all
                v-model="resources.selected"
                >
                <template slot="headers" slot-scope="props">
                  <tr>
                    <th v-show="resources.showBulk">
                      <v-checkbox
                        :indeterminate="props.indeterminate"
                        :input-value="props.all"
                        @click.stop="toggleAll"
                        hide-details
                        primary
                        >
                      </v-checkbox>
                    </th>
                    <th
                      v-for="header in props.headers"
                      :key="header.text"
                      @click="changeSort(header.value)"
                      >
                      <v-icon small>arrow_upward</v-icon>
                      {{ header.text }}
                    </th>
                  </tr>
                </template>
                <template slot="items" slot-scope="props">
                  <tr
                    :active="props.selected"
                    @click="props.selected = !props.selected"
                    >
                    <td v-show="resources.showBulk">
                      <v-checkbox
                        :input-value="props.selected"
                        primary
                        hide-details
                      ></v-checkbox>
                    </td>
                    <td v-html="props.item.id"></td>
                    <td class="table--ellipsis">
                      <v-tooltip
                        max-width="300"
                        bottom
                        >
                        <span slot="activator" v-html="trans(props.item.title)"></span>
                        <span v-html="trans(props.item.title)"></span>
                      </v-tooltip>
                    </td>
                    <td v-html="props.item.code"></td>
                    <td v-html="props.item.author"></td>
                    <td v-html="props.item.created"></td>
                    <td v-html="props.item.modified"></td>
                    <td class="layout mx-0 justify-center">
                      <v-tooltip bottom>
                        <v-btn
                          slot="activator"
                          icon
                          :to="{
                            name: 'pages.restore',
                            params: {
                              code: props.item.code,
                              meta: { item: props.item }
                            },
                          }"
                          >
                          <v-icon
                            small
                            class="mx-3"
                            >
                            mdi-open-in-new
                          </v-icon>
                        </v-btn>
                        <span>{{ trans('View Details') }}</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <v-btn slot="activator" icon>
                          <v-icon
                            small
                            class="mx-3"
                            >
                            mdi-delete-outline
                          </v-icon>
                        </v-btn>
                        <span>
                          {{ trans('Permanently Delete') }}
                        </span>
                      </v-tooltip>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </template>

    <template v-else>
      <v-card flat class="transparent">
        <v-card-text>
          <empty-state></empty-state>
        </v-card-text>
      </v-card>
    </template>
  </section>
</template>

<script>
import store from '@/store'
import EmptyState from './partials/EmptyState'

export default {
  store,
  name: 'Archived',

  components: {
    EmptyState
  },

  data () {
    return {
      dataset: {
        loaded: true,
      },
      bulk: {
        destroy: {
          model: false,
        },
      },
      toolbar: {
        homeBtn: {
          name: 'pages.index',
        },
        title: 'All Pages',
        color: '',
        listGridView: false,
        createBtn: {
          name: 'pages.create',
        },
        tooltipName: 'All Pages',
      },
      resources: {
        items: [],
        selected: [],
        data: null,
        showBulk: false,
        pagination: {
          sortBy: 'title'
        },
        headers: [
          { text: 'ID', align: 'left', value: 'id' },
          { text: 'Title', align: 'left', value: 'title' },
          { text: 'Code', align: 'left', value: 'code' },
          { text: 'Author', align: 'left', value: 'user_id' },
          { text: 'Created', align: 'left', value: 'created_at' },
          { text: 'Modified', align: 'left', value: 'updated_at' },
          { text: 'Actions', align: 'center', sortable: false },
        ],
      },
    }
  },

  mounted () {
    axios
      .get('/api/v1/pages/archived')
      .then(response => {
        this.resources.items = response.data.data
      })
  },

  methods: {
    toggleAll () {
      if (this.resources.selected.length) this.resources.selected = []
      else this.resources.selected = this.items.slice()
    },

    changeSort (column) {
      if (this.resources.pagination.sortBy === column) {
        this.resources.pagination.descending = !this.resources.pagination.descending
      } else {
        this.resources.pagination.sortBy = column
        this.resources.pagination.descending = false
      }
    }
  }
}
</script>
