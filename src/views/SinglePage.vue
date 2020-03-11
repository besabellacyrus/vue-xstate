<template>
  <transition name="fade">
    <div class="single-page-wrapper mx-auto">
      <h1>{{ selectedPhone.phone_name }}</h1>
      <img :src="selectedPhone.phone_image" alt="">
      <table v-for="data of selectedPhone.data" :key="data.phone_id">
        <div>
          <tr v-for="(detail, index) of data.details" :key="index">
            <th rowspan="15" v-show="index === 0" scope="row">{{ data.label }} </th>
            <td class="ttl">{{ detail.title }}</td>
            <td class="nfo">{{ detail.info }}</td>
          </tr>
        </div>
      </table>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
  mounted() {
    if (!this.selectedPhone.phone_name) {
      this.$router.push('/');
    }
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState({
      selectedPhone: (state) => state.selectedPhone,
    }),
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  list-style: none;
}
th {
  width: 7rem;
  color: #d50000;
  font-weight: 16px;
}
table {
  width: 70%;
  margin: 0 auto;
  text-align: left;
  @media screen and (max-width: 768px){
    width: 100%;
    font-size: 14px;
  }
  td {
    border-bottom: 1px solid #f0f0f0;
  }
  td.ttl {
    width: 110px;
    color: #7d7464;
    font-weight: 700;
  }
}
.single-page-wrapper {
  width: 100%;
  img {
    margin-bottom: 2rem;
  }
}
.detail-wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
