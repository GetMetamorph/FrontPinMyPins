<template>
  <div>
    <div>
    <v-card>
      <v-navigation-drawer
        permanent
        expand-on-hover
        fixed
        right
      >
        <v-list>

        </v-list>
        <v-list
          nav
          dense
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-filter</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="font-size: 16px">Critère de filtrage :</v-list-item-title>
            </v-list-item>
          <v-list-item>
            <v-container fluid id="sidebar-item">
              <v-row>
              <v-checkbox class="chkbox-layout"
                v-model="checkboxFilter"
                label="Red"
                value="red"
                v-on:change="filterItems()"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="checkboxFilter"
                label="Green"
                value="green"
                v-on:change="filterItems()"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="checkboxFilter"
                label="Blue"
                value="blue"
                v-on:change="filterItems()"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="checkboxFilter"
                label="Pink"
                value="pink"
                v-on:change="filterItems()"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="checkboxFilter"
                label="Disney"
                value="Disney"
                v-on:change="filterItems()"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="checkboxFilter"
                label="Marvel"
                value="Marvel"
                v-on:change="filterItems()"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="checkboxFilter"
                label="Pixar"
                value="Pixar"
                v-on:change="filterItems()"
              ></v-checkbox>
              </v-row>
            </v-container>
          </v-list-item>
            <v-list-item>
            <v-list-item-icon>
            <v-icon>mdi-sort</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="font-size: 16px;">Trier par :
          </v-list-item-title>
          </v-list-item>
            <v-row style="margin-top: 10px; margin-left: 10px">
              <v-checkbox class="chkbox-layout"
                v-model="sortOrder"
                label="Prix ASC"
                value="price_asc"
                v-on:change="sortItems()"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="sortOrder"
                label="Prix DESC"
                value="price_desc"
                v-on:change="sortItems()"
              ></v-checkbox>
            </v-row>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
    <v-container style="padding-right: 56px;">
      <v-row>
        <v-col lg="3" sm="6">
          <v-text-field label="Find" prepend-icon="mdi-magnify" v-model="nameFilter">
          </v-text-field>
        </v-col>
      </v-row>
      <div v-if="itemsList.length > 0">
          <div v-if="itemsListFiltered.length === 0">
            <v-row>
              <v-col v-for="(item, index) in itemsList" :key="index" lg="4" sm="6">
                <item :item="item" />
              </v-col>
            </v-row>
          </div>
          <div v-else>
            <v-row>
              <v-col v-for="(item, index) in itemsListFiltered" :key="index" lg="4" sm="6">
                <item :item="item" />
              </v-col>
            </v-row>
          </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'ItemsList',
  async mounted() {
    await this.$store.dispatch('getItems');
    this.$socket.on('filtered_name', (data) => {
      this.itemsList = data;
    });
  },
  computed: {
    itemsList() {
      return this.$store.state.itemsList || [];
    },
  },
  components: {
    Item,
  },
  methods: {
    sortItems() {
      const itemsList = this.itemsListFiltered || this.$store.state.itemsList;
      if (this.sortOrder === 'price_asc') {
        this.itemsListFiltered = itemsList.sort((a, b) => a - b);
      } else if (this.sortOrder === 'price_desc') {
        this.itemsListFiltered = itemsList.sort((a, b) => a + b);
      }
    },
    filterItems() {
      const itemsLists = this.$store.state.itemsList.slice();
      this.itemsListFiltered = itemsLists
        .filter((item) => this.checkboxFilter.indexOf(item.color) !== -1
      || this.checkboxFilter.indexOf(item.license) !== -1);
    },
  },
  watch: {
    nameFilter(val) {
      this.$socket.emit('filtername_change', val);
    },
  },
  data() {
    return {
      checkboxFilter: [],
      itemsListFiltered: [],
      filter: false,
      sortOrder: '',
      nameFilter: '',
    };
  },
};
</script>
