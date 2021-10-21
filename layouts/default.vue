<template>
  <v-app>
    <Header></Header>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header,
  },
  mounted() {},
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss"></style>
