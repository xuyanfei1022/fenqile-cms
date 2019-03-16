<template>
  <aside>
    <fqlOrderformHead></fqlOrderformHead>
    <fqlOrderformContent></fqlOrderformContent>
  </aside>
</template>

<script>
    import fqlOrderformHead from "./fqlOrderformHead";
    import fqlOrderformContent from "./fqlOrderformContent";
    export default {
      name: "fqlAside",
      components: {
        fqlOrderformHead,
        fqlOrderformContent
        }
    }
</script>

<style scoped>
  aside{
    flex:1;
    background: #edf0ef;
  }
</style>
