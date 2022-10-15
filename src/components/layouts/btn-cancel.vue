<template>
    <a href="#" class="nav-item abrechen">
        <span>Abrechen</span>
        <div class="img"><img src="assets/img/pay/back.svg" alt="Back"></div>
    </a>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class HeaderComponent extends Vue {
  constructor() {
    super();
  }


  created() {
  }
  
}
</script>

<style lang="scss" scoped>
</style>