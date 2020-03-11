<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
}
[v-cloak] > * { display:none }
[v-cloak]::before { content: "loading…" }
body {
  overflow-x: hidden;
  display: grid;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
