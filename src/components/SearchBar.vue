<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Type an artist or song name"
      aria-label="Type an artist or song name"
      aria-describedby="basic-addon2"
      v-model="searchInput"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="search">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",

  //   props: ["searchCallback"],

  data() {
    return {
      searchInput: "kiss the rain",
    };
  },

  methods: {
    search() {
      this.$emit("search", this.searchInput);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
