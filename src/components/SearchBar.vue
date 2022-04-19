<template>
  <div class="input-group mb-3 pt-2">
    <input
      type="text"
      class="form-control"
      placeholder="Type an artist or song name"
      aria-label="Type an artist or song name"
      aria-describedby="basic-addon2"
      v-model="searchInput"
      v-on:keyup.enter="search"
    />
    <div class="input-group-append">
      <button class="btn btn-primary" type="button" @click="search">
        Search
      </button>
    </div>
    <div v-if="isAlertOpen" class="alert alert-danger">
      Please type an artist or music name!
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      searchInput: "",
      isAlertOpen: false,
    };
  },

  methods: {
    search() {
      if (!this.searchInput) {
        this.isAlertOpen = true;
        return;
      }

      if (this.isAlertOpen) {
        this.isAlertOpen = false;
      }

      this.$emit("search", this.searchInput);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  width: 100%;
  text-align: center;
}
</style>
