<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <span class="navbar-brand mb-0 h1">Olery Test</span>
      </div>
    </nav>
    <div class="container">
      <search-bar @search="handleSearch" />
      <div v-if="!isLoading">
        <artists-table :hits="artists" />
        <music-table :hits="music" />
      </div>
      <div v-if="isLoading" class="spinner-container">
        <div class="spinner-border" role="status"></div>
        <p>Searching...</p>
      </div>
    </div>
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
        this.isLoading = false;
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
body {
  background-color: #913737;
}

th {
  vertical-align: middle;
}

td {
  vertical-align: middle;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 400px) {
  body {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 50px;
  }
}

@media (min-width: 401px) {
  img {
    max-width: 120px;
  }
}
</style>
