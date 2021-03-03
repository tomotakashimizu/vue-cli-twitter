<template>
  <div id="app">
    <div id="nav">
      <!-- router-link の仕事は URL を書きかえることだけ -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/my-page">MyPage</router-link>
    </div>
    <!-- ページの内容を表示するのは次の <router-view /> というタグ（＝コンポーネント） -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
