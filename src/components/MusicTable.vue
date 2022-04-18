<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Artist</th>
        <th scope="col">Shazam URL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hit in hits" :key="hit.track.key">
        <th scope="row">{{ hit.track.title }}</th>
        <td>{{ hit.track.subtitle }}</td>
        <td>{{ hit.track.share.href }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MusicTable",
  props: ["hits"],
  //   data() {
  //     return {
  //       hits: [
  //         {
  //           track: {
  //             title: "Kiss The Rain",
  //             key: "20066955",
  //             subtitle: "Billie Myers",
  //             share: {
  //               href: "https://www.shazam.com/track/20066955/kiss-the-rain",
  //             },
  //           },
  //         },
  //       ],
  //     };
  //   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
