<template>
  <div>
    <v-scale-transition>
      <div v-show="showSubscribe">
        <div
          class="vs-wrapper"
          :style="`background: ${$vuetify.theme.themes.light.aside}`"
        >
          <div class="vs-container">
            <h3>THINKTECH</h3>
            <form>
              <div class="input-div">
                <label for="name">Name</label>
                <input id="name" type="text" />
              </div>
              <div class="input-div">
                <label for="email">Email</label>
                <input id="email" type="email" />
              </div>
              <button type="button">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </v-scale-transition>

    <button class="subscribe-btn" @click="showSubscribe = true">
      <div class="btn-container"><i class="fas fa-user"></i> Subscribe</div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SubscribeComponent',
  data() {
    return {
      showSubscribe: false,
    }
  },
}
</script>

<style scoped>
.subscribe-btn {
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 2rem;
  z-index: 1;
  min-height: auto;
  background: #141526;
  box-shadow: 0 10px 10px rgba(20, 21, 38, 0.25);
}
.btn-container {
  line-height: 1;
  padding: 1rem;
  color: #fff;
}

.vs-wrapper {
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
}

.vs-container {
  max-width: 425px;
  width: 100%;
  padding: 1.5rem;
  padding-bottom: 0;
  /* border-radius: 0.25rem; */
  background: #fff;
  /* margin: 0 0.5rem; */
}

h3 {
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
.input-div {
  display: grid;
}
input {
  margin: 0.25rem 0;
  padding: 0.5rem 1rem;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 7%), 0px 1px 1.5px 0px rgb(0 0 0 / 5%);
}
</style>
