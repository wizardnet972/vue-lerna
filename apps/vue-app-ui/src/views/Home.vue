<template>
  <div class="home">
    <Shell/>

    <Bar/>

    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Shell } from "package1";
import { Bar } from "package2";

@Component({
  components: {
    Shell,
    Bar
  }
})
export default class Home extends Vue {}
</script>
