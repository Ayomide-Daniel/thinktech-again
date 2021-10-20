<template>
  <div>
    <div class="postcard-container">
      <div class="postcard-img-div">
        <nuxt-link
          :to="{
            name: 'title',
            params: { title: trend.meta.title_link }
          }"
        >
          <img
            class="postcard-img featured-postcard-img"
            :src="imgurl[0]"
            :alt="'' + trend.title"
          />
        </nuxt-link>
      </div>
      <div class="postcard-text-div">
        <div class="mb-4">
          <nuxt-link
            :to="{
              name: 'tag-tag',
              params: { tag: trend.tag }
            }"
          >
            <h4 class="postcard-tag">{{ trend.tag }}</h4>
          </nuxt-link>
        </div>
        <div class="mb-3">
          <nuxt-link
            class="post-title"
            :to="{
              name: 'title',
              params: { title: trend.meta.title_link }
            }"
          >
            {{ trend.title }}
          </nuxt-link>
        </div>
        <div>
          <div
            class="postcard-author-div"
            @click="
              setAuthor(trend.author, `/author/${trend.meta.author_link}`)
            "
          >
            <img
              :src="article.author.image_url"
              :alt="'' + article.author.name"
              class="postcard-author-img"
            />
            <h5 class="post-author">{{ trend.author.name }}</h5>
          </div>
        </div>
        <div class="postcard-mini" v-html="content[0]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleTrendComponent',
  props: ['article'],
  computed: {
    trend() {
      return this.article
    },
    imgurl() {
      const url = []
      this.article.body.blocks.forEach((block) => {
        switch (block.type) {
          case 'image':
            return url.push(block.data.file.url)
          default:
            break
        }
      })
      return url
    },
    content() {
      const url = []
      this.article.body.blocks.forEach((block) => {
        switch (block.type) {
          case 'paragraph':
            return url.push(
              block.data.text.length > 180
                ? block.data.text.substring(0, 180) + '...'
                : block.data.text
            )
          default:
            break
        }
      })
      return url
    }
  }
}
</script>

<style scoped>
.bg-stories .featured-postcard {
  border-radius: 1rem;
  -webkit-border-radius: 1rem 1rem;
  -moz-border-radius: 1rem 1rem;
  -ms-border-radius: 1rem 1rem;
  -o-border-radius: 1rem 1rem;
}
.featured-postcard-img {
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  -webkit-border-radius: 1rem 1rem 0 0;
  -moz-border-radius: 1rem 1rem 0 0;
  -ms-border-radius: 1rem 1rem 0 0;
  -o-border-radius: 1rem 1rem 0 0;
}
.featured-postcard .post-title::first-letter {
  text-transform: uppercase;
}
@media screen and (min-width: 1024px) {
  .featured-postcard .postcard-container {
    display: grid;
    grid-template-columns: 65% 35%;
  }
  .postcard-container .featured-postcard-img {
    border-radius: 1rem 0 0 1rem;
    -webkit-border-radius: 1rem 0 0 1rem;
    -moz-border-radius: 1rem 0 0 1rem;
    -ms-border-radius: 1rem 0 0 1rem;
    -o-border-radius: 1rem 0 0 1rem;
  }
  .loader-meta {
    border: 2px solid rgba(255, 255, 255, 1);
    border-radius: 1rem;
  }
  #trending-component .loader-meta {
    border-radius: 0 1rem 1rem 0;
    /* border: 1px solid var(--v-featured); */
  }
}
</style>
