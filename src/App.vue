/* eslint-disable */
<template>
  <div id="header">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  </div>
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  width:100%;
  height:10%;
  background:black;
}

nav {
  padding: 30px;
}

nav a {
  color: white;
}

nav a.router-link-exact-active {
  color: #4682B4;
  font-weight: bold;
}
</style>
