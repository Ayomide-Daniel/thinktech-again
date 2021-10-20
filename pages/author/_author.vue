<template>
  <div>
    <MetaComponent />
    <ArticlesComponent />
  </div>
</template>

<script>
import MetaComponent from '../../components/articles/MetaComponent.vue'
import ArticlesComponent from '../../components/articles/ArticlesComponent.vue'
import Article from '~/assets/js/api/Article'
export default {
  name: 'Author',
  components: { MetaComponent, ArticlesComponent },
  computed: {
    author() {
      return this.$store.state.author.author
    }
  },
  mounted() {
    if (this.author.length <= 0) {
      return this.setupPage()
    }
  },
  methods: {
    setupPage() {
      Article.getAuthor({
        filter_by: 'name',
        q: this.$route.params.author
      }).then((res) => {
        this.$store.commit('author/setAuthor', res.data.data.user)
      })
    }
  }
}
</script>

<style scoped></style>
