<template>
  <div>
    <items-list />
    <item-detail></item-detail>
  </div>
</template>

<script>
import ItemDetail from '../components/ItemDetail.vue';

export default {
  name: 'ItemDetailView',
  components: {
    ItemDetail,
  },
};
</script>
