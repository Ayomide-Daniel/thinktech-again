<template>
  <div>
    <ArticleComponent />
    <ArticlesComponent />
  </div>
</template>

<script>
import ArticleComponent from '../components/articles/ArticleComponent.vue'
import ArticlesComponent from '../components/articles/ArticlesComponent.vue'
export default {
  name: 'Title',
  components: { ArticleComponent, ArticlesComponent },
}
</script>

<style scoped></style>
