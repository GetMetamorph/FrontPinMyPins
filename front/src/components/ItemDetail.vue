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
          Article
        </v-list-item-title>
        <v-list-item-subtitle>Description</v-list-item-subtitle>
        <v-card-text>
        <div>pazojefzjoefojgp$aej$porgj</div>
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
      >
        Acheter
      </v-btn>
    </v-card-actions>
    <v-list-item four-line
    class="bottom">
      <v-card-text>
        <div>Nombre de client consultant l'article :</div>
      </v-card-text>
      <v-card-text
        fixed
        right
        class="bottom"
      >
        <div>Quantité restante :</div>
        <item></item>
      </v-card-text>
    </v-list-item>
  </v-card>
</template>
<script>
import Item from './Item.vue';

export default {
  name: 'ItemDetail',
  async mounted() {
    await this.$store.dispatch('getItems');
    console.log('ItemDetail: ', this.$store.state.ItemDetail);
    this.$socket.on('filtered_name', (data) => {
      this.ItemDetail = data;
    });
  },
  computed: {
    ItemDetail() {
      return this.$store.state.ItemDetail || [];
    },
  },
  components: {
    Item,
  },
};
</script>
