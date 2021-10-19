<template>
  <div>
    <MetaComponent />
    <ArticlesComponent />
  </div>
</template>

<script>
import MetaComponent from '../../components/articles/MetaComponent.vue'
import ArticlesComponent from '../../components/articles/ArticlesComponent.vue'
export default {
  name: 'Tag',
  components: { MetaComponent, ArticlesComponent },
  mounted() {},
}
</script>

<style scoped></style>
