<template>
  <div>
    <v-container>
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
