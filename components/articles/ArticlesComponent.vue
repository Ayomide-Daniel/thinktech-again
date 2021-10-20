<template>
  <div id="articles-component">
    <div v-if="$route.name == 'title'" class="pt-4 pb-4">
      <h4>YOU MIGHT ALSO LIKE...</h4>
    </div>
    <div v-if="loading" class="loader-container articles-div">
      <div class="skeleton-loader postcard mb-4">
        <VSkeletonLoader type="image" />
        <VSkeletonLoader type="paragraph" class="article-meta" />
      </div>
      <div class="skeleton-loader postcard mb-4">
        <VSkeletonLoader type="image" />
        <VSkeletonLoader type="paragraph" class="article-meta" />
      </div>
      <div class="skeleton-loader postcard mb-4">
        <VSkeletonLoader type="image" />
        <VSkeletonLoader type="paragraph" class="article-meta" />
      </div>
      <div class="skeleton-loader postcard mb-4">
        <VSkeletonLoader type="image" />
        <VSkeletonLoader type="paragraph" class="article-meta" />
      </div>
      <div class="skeleton-loader postcard mb-4">
        <VSkeletonLoader type="image" />
        <VSkeletonLoader type="paragraph" class="article-meta" />
      </div>
      <div class="skeleton-loader postcard mb-4">
        <VSkeletonLoader type="image" />
        <VSkeletonLoader type="paragraph" class="article-meta" />
      </div>
    </div>
    <div v-else class="articles-div">
      <div v-for="article in articles" :key="article.id" v-ripple>
        <SingleArticleComponent :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleArticleComponent from './SingleArticleComponent'
import Article from '~/assets/js/api/Article'
export default {
  name: 'ArticlesComponent',
  components: {
    SingleArticleComponent
  },
  data() {
    return {
      loading: true,
      articles: []
      // author: {}
    }
  },
  computed: {
    author() {
      return this.$store.state.author.author
    }
  },
  watch: {
    author() {
      return this.setupAuthorArticles()
    }
  },
  mounted() {
    if (this.$route.name === 'index') {
      return this.fetchPosts()
    }
    if (this.$route.name === 'author-author') {
      if (Object.keys(this.author).length > 0) {
        return this.setupAuthorArticles()
      }
    }
    if (this.$route.name === 'tag-tag') {
      return this.fetchTag()
    }
  },
  methods: {
    setupAuthorArticles() {
      this.articles = this.author.articles
      this.loading = false
    },
    fetchPosts() {
      return Article.getArticles()
        .then((res) => {
          this.articles = res.data.data
          this.loading = false
        })
        .catch(() => {})
    },
    fetchTag() {
      return Article.getTag(this.$route.params.tag)
        .then((res) => {
          this.articles = res.data.data
          this.loading = false
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
#articles-component {
  margin-top: 2rem;
}
</style>
