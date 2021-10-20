<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="sm-nav-container nav-container">
          <button
            v-ripple
            class="toggle-btn"
            type="button"
            @click="showMobileNav"
          >
            <span class="toggle-btn-span1 text"></span>
            <span class="toggle-btn-span2 text"></span>
            <span class="toggle-btn-span3 text"></span>
          </button>
          <nuxt-link
            :to="{ name: 'index' }"
            class="navbar-title"
            style="height: 100%; width: 100%"
          >
            <img
              :src="require('~/assets/images/logo.png')"
              class="app-title sm-app-title"
            />
          </nuxt-link>
          <button v-ripple @click="showSearch">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="lg-nav-div">
          <div class="lg-nav-container nav-container">
            <nuxt-link :to="{ name: 'index' }" class="navbar-title">
              <img
                :src="require('~/assets/images/logo.png')"
                class="app-title lg-app-title"
              />
            </nuxt-link>
            <!-- <div class="navbar-links">
              <nuxt-link :to="{ name: 'index' }" exact>Home</nuxt-link>
            </div> -->
            <div class="navbar-tools">
              <a
                href="https://authors.thinktech.ng/create-account"
                target="_blank"
                rel="noopener noreferrer"
                >Become an author
              </a>
              <a
                href="https://authors.thinktech.ng/login"
                target="_blank"
                rel="noopener noreferrer"
                >Resume writing
              </a>
              <button v-if="!dark" v-ripple @click="darkThemeSwitch">
                <i class="fas fa-moon"></i>
              </button>
              <button v-else v-ripple @click="darkThemeSwitch">
                <i class="fas fa-sun"></i>
              </button>
              <button v-ripple @click="showSearch">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <v-slide-x-transition>
      <div v-show="showAsideNav" class="aside-container vs-wrapper">
        <div
          style="height: 100%"
          :style="`background: ${$vuetify.theme.themes.light.aside}`"
          @click="ctcMobileNav"
        >
          <aside class="mobile-nav nav">
            <br />
            <div class="close-mobile-nav">
              <button v-ripple type="button" @click="closeMobileNav">
                &times;
              </button>
            </div>
            <br />
            <div class="aside-nav-content nav-container">
              <div class="navbar-links">
                <nuxt-link :to="{ name: 'index' }" exact>Home</nuxt-link>
              </div>
              <br />
              <div class="navbar-tools">
                <a
                  href="https://authors.thinktech.ng/create-account"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Become an author
                </a>
                <a
                  href="https://authors.thinktech.ng/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Resume writing
                </a>
                <button v-if="!dark" v-ripple @click="darkThemeSwitch">
                  <i class="fas fa-moon"></i>
                </button>
                <button v-else v-ripple @click="darkThemeSwitch">
                  <i class="fas fa-sun"></i>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </v-slide-x-transition>
    <v-scale-transition>
      <div v-show="showSearchBar">
        <div
          class="search-container vs-wrapper"
          :style="
            !dark
              ? `background: ${$vuetify.theme.themes.dark.text}`
              : `background: ${$vuetify.theme.themes.light.text}`
          "
        >
          <div class="search-container-content">
            <div class="close-search-div">
              <button v-ripple type="button" @click="closeSearch">
                &times;
              </button>
            </div>
            <br />
            <br />
            <form>
              <input
                type="text"
                placeholder="Type to search"
                background-color="text"
                class="featured"
                :style="
                  !dark
                    ? `color: ${$vuetify.theme.themes.light.text}`
                    : `color: ${$vuetify.theme.themes.dark.text}`
                "
              />
              <button v-ripple>
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </v-scale-transition>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      showAsideNav: false,
      showSearchBar: false
    }
  },
  computed: {
    dark() {
      return this.$store.state.theme.dark
    }
  },
  mounted() {
    this.checkDarkMode()
  },
  methods: {
    checkDarkMode() {
      const darkMode = localStorage.getItem('dark_mode')
      if (![null, undefined, ''].includes(darkMode)) {
        return darkMode
      }
      return false
    },
    darkThemeSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_mode', this.$vuetify.theme.dark)
      this.$store.commit('theme/setDarkMode', this.$vuetify.theme.dark)
    },
    ctcMobileNav(e) {
      if ($(e.target).closest('aside').length === 0) {
        this.closeMobileNav()
      }
    },
    closeMobileNav() {
      this.showAsideNav = false
    },
    showMobileNav() {
      this.showAsideNav = true
    },
    closeSearch() {
      this.showSearchBar = false
    },
    showSearch() {
      this.showSearchBar = true
    }
  }
}
</script>

<style scoped>
.bi::before {
  font-size: 1rem;
}
.close-search-div {
  position: absolute;
  right: 0;
}

.close-search-div button {
  margin-right: 2rem;
  font-size: 2rem;
  border: none;
}
.search-container-content {
  position: relative;
}
.search-container {
  padding-top: 5%;
  transition: all ease-in-out 300ms;
}
.search-container form {
  display: flex;
  width: 100%;
  padding: 2rem;
}
.search-container input {
  border: none;
  width: 100%;
  padding: 1rem;
  font: inherit;
  flex: 11;
  border-radius: 0.25rem 0 0 0.25rem;
}

.search-container button {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
}
.header {
  padding: 25px 0 0;
}
.nav-container {
  position: relative;
}

.nav-container a {
  text-transform: uppercase;
}

.app-title {
  z-index: 1;
  width: auto;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  top: -205%;
}
.sm-app-title {
  margin: 0 auto;
  right: 0;
}
.lg-app-title {
  left: -5%;
  top: -226%;
}
.nav-container button {
  background: none;
  border: none;
  padding: 0.5rem;
}

.sm-nav-container button:nth-child(1) {
  justify-self: flex-start;
}

.sm-nav-container button:last-child {
  justify-self: flex-end;
}

.toggle-btn span {
  display: block;
  content: '';
  width: 25px;
  height: 2px;
  margin-bottom: 3px;
}

.lg-nav-div {
  display: none;
}

.sm-nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.aside-container {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
aside {
  transition: all linear 300ms;
  height: 100%;
  width: 320px;
}
.aside-nav-content {
  display: grid;
}
.aside-nav-content a,
.aside-nav-content button {
  padding: 0.75rem;
  display: block;
  margin-left: 2rem;
  text-decoration: none;
}
.close-mobile-nav {
  display: flex;
  justify-content: flex-end;
}
.close-mobile-nav button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50px;
  height: 50px;
  margin-right: 2rem;
  font-size: 2rem;
  border: none;
  background: none;
}
@media screen and (min-width: 1024px) {
  .sm-nav-container {
    display: none;
  }
  .lg-nav-div {
    display: block;
  }
  .lg-nav-container {
    display: flex;
    width: 100%;
    font-size: 14px;
    align-items: center;
    justify-content: flex-end;
  }
  .lg-nav-container .navbar-links {
    display: flex;
    justify-content: center;
    flex: 7;
  }
  .lg-nav-container .navbar-tools {
    color: inherit;
    display: flex;
    justify-content: flex-end;
    flex: 4;
  }
  .lg-nav-container .navbar-tools a,
  .lg-nav-container .navbar-links a {
    margin: 0.5rem;
    padding: 0 0.5rem;
  }
}
</style>
