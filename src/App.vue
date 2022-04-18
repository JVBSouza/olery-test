<template>
  <div>
    <search-bar @search="handleSearch" />
    <div v-if="!isLoading">
      <artists-table :hits="artists" />
      <music-table :hits="music" />
    </div>
    <p v-if="isLoading">Searching...</p>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import ArtistsTable from "./components/ArtistsTable.vue";
import MusicTable from "./components/MusicTable.vue";
import { searchService } from "./services/SearchService";

export default {
  name: "App",
  components: {
    SearchBar,
    ArtistsTable,
    MusicTable,
  },

  data() {
    return {
      music: [],
      artists: [],
      isLoading: false,
    };
  },

  methods: {
    async handleSearch(input) {
      this.isLoading = true;

      if (!input) {
        return;
      }

      const result = await searchService(input);
      this.artists = result.artists.hits;
      this.music = result.tracks.hits;

      this.isLoading = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
