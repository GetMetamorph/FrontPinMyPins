<template>
  <v-card
    class="mx-auto"
    max-width="700px"
    max-height="500px"
    outlined
    style="box-shadow: 16px 20px 5px #1976d2;
           margin-top:50px
           padding:3em;"
  >
    <v-list-item four-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ item.name }}
        </v-list-item-title>
        <v-list-item-subtitle>Description:</v-list-item-subtitle>
        <v-card-text>
          <div>{{ item.description }}</div>
        </v-card-text>
        <v-list-item-subtitle>Tags:</v-list-item-subtitle>
        <v-card-text>
          <div>{{ item.license }}, {{ item.color }}</div>
        </v-card-text>
        <v-list-item-subtitle>Price:</v-list-item-subtitle>
        <v-card-text>
          <div>{{ item.price }}</div>
        </v-card-text>
      </v-list-item-content>
      <v-img
        max-height="250"
        max-width="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        style="margin:15px"
      ></v-img>
    </v-list-item>

    <v-card-actions
       fixed
       bot
    >
      <v-btn
        outlined
        rounded
        text
        @click="buy()"
      >
        Buy
      </v-btn>
        <v-btn
          outlined
          rounded
          color="red lighten-2"
          text
          @click="deleteItem(item._id)"
        >Remove
      </v-btn>
    </v-card-actions>
    <v-list-item four-line
    class="bottom">
      <v-card-text>
        Number of watchers for this article:
      </v-card-text>
      <v-card-text
        fixed
        right
        class="bottom"
      >
        Available quantity: {{ item.stock }}
      </v-card-text>
    </v-list-item>
  </v-card>
</template>
<script>

export default {
  name: 'ItemDetail',
  async mounted() {
    await this.$store.dispatch('getItems');
  },
  computed: {
    item() {
      // eslint-disable-next-line
      return this.$store.state.itemsList.find((item) => item._id === this.$route.params.id);
    },
  },
  methods: {
    buy() {
      alert(`You bought the product ${this.item.name}`);
    },
    remove(id) {
      alert(`You removed the product with id: ${id}`);
    },
    deleteItem(id) {
      this.$store.dispatch('deleteItem', id).then((path) => {
        this.$router.redirect(path);
      });
    },
  },
};
</script>
