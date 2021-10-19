<template>
  <div>
    <TrendingComponent />
    <ArticlesComponent />
  </div>
</template>

<script>
import TrendingComponent from '~/components/articles/TrendingComponent'
import ArticlesComponent from '~/components/articles/ArticlesComponent'
export default {
  name: 'Index',
  components: {
    TrendingComponent,
    ArticlesComponent,
  },
}
</script>

<style scoped></style>
