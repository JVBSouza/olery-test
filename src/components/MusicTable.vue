<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Cover</th>
        <th scope="col">
          <div>Title</div>
          <div>Artist</div>
        </th>
        <th scope="col">Shazam URL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hit in hits" :key="hit.track.key">
        <th scope="row"><img :src="hit.track.images.coverart" /></th>
        <td>
          <div>
            {{ hit.track.title }}
          </div>
          <div>
            {{ hit.track.subtitle }}
          </div>
        </td>
        <td>
          <a :href="hit.track.share.href" target="_blank"> Music Page </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MusicTable",
  props: ["hits"],
};
</script>

<style scoped></style>
