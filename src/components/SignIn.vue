<template>
  <div class="sign-in">
    <button v-on:click="signIn">
      <div v-if="isSignIn">ログアウトする</div>
      <div v-else>ログインする</div>
    </button>
    <h2 v-if="isSignIn">ログインしているユーザー情報</h2>
    <img v-if="isSignIn" :src="user.photoURL" class="rounded" />
    <div v-if="isSignIn">Googleアカウント：{{ user.email }}</div>
    <div v-if="isSignIn">ユーザー名：{{ user.displayName }}</div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      isSignIn: false,
      user: {}, // ユーザー情報
    }
  },
  methods: {
    signIn() {
      if (this.isSignIn == false) {
        var provider = new firebase.auth.GoogleAuthProvider()
        // firebase.auth().signInWithRedirect(provider)

        firebase
          .auth()
          .signInWithPopup(provider)
          .then(() => {
            /** @type {firebase.auth.OAuthCredential} */
          })
          .catch((error) => {
            // Handle Errors here.
            console.log(error)
          })
      } else {
        firebase
          .auth()
          .signOut()
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
            console.log(error)
          })
      }
    },
  },
  created() {
    // ログイン状態を識別
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user ? user : {}

      if (user) {
        this.isSignIn = true
      } else {
        this.isSignIn = false
      }
    })
  },
}
</script>

<style scoped>
.rounded {
  border-radius: 50px;
}
</style>
