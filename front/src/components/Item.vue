<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template>
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>
        <router-link :to="`/detail-item/${item._id}`">
          {{ item.name }}
        </router-link>
      </v-card-title>

      <v-card-text>
        <div>{{ item.description }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>Tags:
        <v-chip class="ma-1" color="primary" outlined>{{ item.license }}</v-chip>
        <v-chip class="ma-1" color="primary" outlined>{{ item.color }}</v-chip>
      </v-card-text>

      <v-card-text>
        <v-chip-group
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip
            v-for="(attribute, index) in item.attributes"
            :key="index"
          >{{ attribute }}</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-card-text>
          <div>price : {{ item.price }} €</div>
        </v-card-text>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="buy(item.name)"
        >
          <v-icon size="32" color="teal lighten-2">mdi-cart</v-icon>
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>
<script>
export default {
  name: 'VItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    buy(name) {
      alert(`You bought the product ${name}`);
    },
  },
};
</script>
