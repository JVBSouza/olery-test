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
        <th scope="row">{{ hit.artist.avatar }}</th>
        <td>{{ hit.artist.name }}</td>
        <td>{{ hit.artist.weburl }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ArtistsTable",
  props: ["hits"],
  // data() {
  //   return {
  //     hits: [
  //       {
  //         artist: {
  //           avatar:
  //             "https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/4e/0d/1f/4e0d1ff5-9f2e-0170-0ec9-3dbe25f3a471/pr_source.png/800x800cc.jpg",
  //           id: "33128",
  //           name: "Billie Myers",
  //           verified: false,
  //           weburl: "https://www.shazam.com/artist/33128/billie-myers",
  //           adamid: "99951",
  //         },
  //       },
  //     ],
  //   };
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
