<template>
  <div class="home">
    <h1>Huawei Phones</h1>
    <input type="text" v-model="searchQuery">
    <div class="container mx-auto">
      <ul class="phone-lists" v-if="phones">
        <li
          v-for="phone of filteredPhones"
          :key="phone.phone_id"
        >
        <a @click="choosePhone(phone)">
          <Phone :name="phone.phone_name" :imgUrl="phone.phone_image" />
        </a>
        </li>
      </ul>
      <div v-else>
        fetching...
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Phone from '@/components/Phone.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      searchQuery: '',
    };
  },
  components: {
    Phone,
  },
  computed: {
    ...mapState({
      phones: (state) => state.phones,
    }),
    filteredPhones() {
      return this.phones.filter((phone) => phone.phone_name.toLowerCase().match(this.searchQuery));
    },
  },
  methods: {
    choosePhone(obj) {
      console.log(obj);
      this.$store.commit('SET_SELECTED_PHONE', obj);
      this.$router.push('/phone');
    },
  },
};
</script>
<style lang="scss">
.home {
  h1 {
    text-align: center;
  }
  @media screen and (min-width: 1024px) {
    width: 59rem;
    margin: 0 auto;
  }
 & a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    h1 {
      background-color: #d50000;
      color: #fff;
    }
    img {
      opacity: 0.9;
    }
  }
 }
}
.home ul.phone-lists {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
   @media screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
  li {
    height: 16rem;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
