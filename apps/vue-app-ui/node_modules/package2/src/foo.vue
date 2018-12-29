<template>
  <div>in foo from package2</div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component({})
export default class Foo extends Vue {}
</script>
