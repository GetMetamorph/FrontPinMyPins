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
            <v-list-item-title style="font-size: 16px">Critère de filtrage</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-container fluid id="sidebar-item">
              <v-row>
              <p>{{ selected }}</p>
              <v-checkbox class="chkbox-layout"
                v-model="selected"
                label="Red"
                value="Red"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="selected"
                label="Green"
                value="Green"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="selected"
                label="Blue"
                value="Blue"
              ></v-checkbox>
              <v-checkbox  class="chkbox-layout"
                v-model="selected"
                label="Pink"
                value="Pink"
              ></v-checkbox>
                            <v-checkbox  class="chkbox-layout"
                v-model="selected"
                label="Disney"
                value="Disney"
              ></v-checkbox>
                            <v-checkbox  class="chkbox-layout"
                v-model="selected"
                label="Marvel"
                value="Marvel"
              ></v-checkbox>
                            <v-checkbox  class="chkbox-layout"
                v-model="selected"
                label="Pixar"
                value="Pixar"
              ></v-checkbox>
              </v-row>
            </v-container>
          </v-list-item>
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
        <v-row>
          <v-col v-for="(item, index) in itemsList" :key="index" lg="4" sm="6">
            <item :item="item" />
          </v-col>
        </v-row>
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
    console.log('itemList: ', this.$store.state.itemsList);
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
  watch: {
    nameFilter(val) {
      this.$socket.emit('filtername_change', val);
    },
  },
  data() {
    return {
      nameFilter: '',
    };
  },
};
</script>
