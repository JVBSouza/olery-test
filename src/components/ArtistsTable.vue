<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Avatar</th>
        <th scope="col">Name</th>
        <th scope="col">URL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hit in hits" :key="hit.artist.id">
        <th scope="row"><img :src="hit.artist.avatar" /></th>
        <td>{{ hit.artist.name }}</td>
        <td><a :href="hit.artist.weburl" target="_blank"> Artist Page </a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ArtistsTable",
  props: ["hits"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
