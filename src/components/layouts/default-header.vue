<template>
  <div>
    <header class="services">
        <nav class="menu">
            <ul class="menu-list">
                <li class="menu-item"><a href="#"><img src="assets/img/services/header-img-1.svg" alt="Search"></a></li>
                <li class="menu-item"><a href="#"><img src="assets/img/services/header-img-2.svg" alt="Home"></a></li>
                <li class="menu-item"><a href="#"><img src="assets/img/services/header-img-3.svg" alt="Menu"></a></li>
                <li class="menu-item"><a href="#"><img src="assets/img/services/header-img-4.svg" alt="Seetings"></a></li>
                <li class="menu-item exit"><a href="#"><img src="assets/img/services/header-img-5.svg" alt="Exit"></a></li>
            </ul>
        </nav>

        <div class="connection">
            <div class="logo"><img src="assets/img/services/logo-sm.svg" alt="Logo"></div>
            <span>875</span>
            <div class="wifi"><img src="assets/img/services/wifi.svg" alt="wifi"></div>
        </div>
    </header>
  </div>
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