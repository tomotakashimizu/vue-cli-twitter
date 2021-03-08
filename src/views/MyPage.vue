<template>
  <div class="my-page">
    <h1>This is my page</h1>
    <button v-on:click="signIn">
      <div v-if="isSignIn">ログアウトする</div>
      <div v-else>ログインする</div>
    </button>
    <!-- <button v-if="isSignIn" v-on:click="signOut">ログアウトする</button>
    <button v-else v-on:click="signIn">ログインする</button> -->
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      isSignIn: false,
    }
  },
  methods: {
    signIn() {
      if (this.isSignIn == false) {
        var provider = new firebase.auth.GoogleAuthProvider()
        // firebase.auth().signInWithRedirect(provider)
        // this.isSignIn = true
        // localStorage.isSignIn = JSON.stringify(this.isSignIn)

        firebase
          .auth()
          .signInWithPopup(provider)
          .then(() => {
            /** @type {firebase.auth.OAuthCredential} */

            this.isSignIn = true
            localStorage.isSignIn = JSON.stringify(this.isSignIn)
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
            this.isSignIn = false
            localStorage.isSignIn = JSON.stringify(this.isSignIn)
          })
          .catch((error) => {
            // An error happened.
            console.log(error)
          })
      }
    },
  },
  created() {
    // 画面起動時ログインしているか判断
    // this.isSignIn = 値 ? 値が空じゃなければこの値を採用 : 値が空の場合この値を採用
    this.isSignIn = localStorage.isSignIn
      ? JSON.parse(localStorage.isSignIn)
      : false
  },
}
</script>
