<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field label="Name" v-model="name"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Description" v-model="description"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-combobox
          label="Color"
          v-model="color"
          clearable
          dense
          :items="tagColors"
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-combobox
          label="License"
          v-model="license"
          clearable
          dense
          :items="tagLicense"
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Image"
          v-model="image"
          chips
          truncate-length="30"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Price"
        v-model="price"
        suffix="€"
        single-line
        type="number"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Quantity"
        v-model="stock"
        single-line
        type="number"></v-text-field>
      </v-col>
    </v-row>
    <v-btn color="primary" x-large class="mx-auto d-block mt-5" @click="sendData()">Send</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tagColors: ['red', 'blue', 'green', 'pink'],
      tagLicense: ['Disney', 'Pixar', 'Marvel'],
      name: '',
      description: '',
      color: '',
      image: '',
      license: '',
      price: '',
      stock: '',
    };
  },
  methods: {
    async sendData() {
      await this.$store.dispatch('postItems', [{
        name: this.name,
        description: this.description,
        color: this.color,
        image: this.image,
        license: this.license,
        price: `${this.price} $`,
        stock: this.stock,
      }]);
    },
  },
};
</script>
