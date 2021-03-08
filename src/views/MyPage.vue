<template>
  <div class="my-page">
    <h1>This is my page</h1>
    <button v-on:click="signIn">サインインする</button>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  methods: {
    signIn() {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
  },
}
</script>
