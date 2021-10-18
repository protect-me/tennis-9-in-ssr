<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-btn @click="login" :loading="isProcessing">login</v-btn>
        <v-btn @click="logout" :loading="isProcessing">logout</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isProcessing: false,
    }
  },
  methods: {
    async login() {
      console.log('login')
      if (this.isProcessing) return
      this.isProcessing = true
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      try {
        const snapshot = await this.$fire.auth.signInWithPopup(provider)
        console.log('로그인 성공')
      } catch (err) {
        alert('로그인 실패', err)
        console.log(err)
      } finally {
        this.isProcessing = false
      }
    },

    async logout() {
      console.log('logout')
      if (this.isProcessing) return
      this.isProcessing = true
      try {
        await this.$fire.auth.signOut()
        console.log('로그아웃 성공')
      } catch (err) {
        alert('로그아웃 실패.', err)
        console.log(err)
      } finally {
        this.isProcessing = false
      }
    },
  },
}
</script>

<style></style>
