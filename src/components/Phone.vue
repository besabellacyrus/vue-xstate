<template>
  <div class="phone-wrapper">
    <img :src="imgUrl" alt="">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.phone-wrapper {
  width: 12rem;
  margin: 0 auto;
  padding-top: 1rem;
  img {
    height: 10rem;
  }
  h1 {
    font-size: 0.8rem;
    height: 3rem;
    line-height: 3;
  }
}
</style>
