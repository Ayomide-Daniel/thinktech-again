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
    SingleArticleComponent,
  },
  data() {
    return {
      loading: true,
      articles: [],
      author: {},
    }
  },
  mounted() {
    this.$root.$on('setSimilarArticles', (data) => {
      this.articles = data
      this.loading = false
    })
    this.$root.$on('authorUpdated', () => {
      this.fetchAuthor()
    })
    if (this.$route.name === 'author-author') {
      return this.fetchAuthor()
    }
    if (this.$route.name === 'index') {
      return this.fetchPosts().then(() => {
        this.loading = false
      })
    }
    if (this.$route.name === 'tag-tag') {
      return this.fetchTag()
    }
  },
  methods: {
    fetchPosts() {
      return Article.getArticles()
        .then((res) => {
          this.articles = res.data.data
        })
        .catch(() => {})
    },
    async fetchAuthor() {
      // this.loading = true
      await this.getAuthor()
      if (!['', null, undefined, {}].includes(this.author)) {
        Article.getAuthor(this.author.id)
          .then((res) => {
            this.articles = res.data.data
            return (this.loading = false)
          })
          .catch(() => {})
      }
    },
    getAuthor() {
      return (this.author = this.$store.state.author.author)
    },
    fetchTag() {
      return Article.getTag(this.$route.params.tag)
        .then((res) => {
          this.articles = res.data.data
          this.loading = false
        })
        .catch(() => {})
    },
  },
}
</script>

<style scoped>
#articles-component {
  margin-top: 2rem;
}
</style>
