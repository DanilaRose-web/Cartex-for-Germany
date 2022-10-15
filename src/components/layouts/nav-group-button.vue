<template>
    <div class="nav-group">
        <div class="nav-group-col">
            <a href="#" class="nav-item-sm berichte">
                <div class="img"><img src="assets/img/bonus/copy.svg" alt="Back"></div>
                <span>Berichte</span>
                
            </a>
            <a href="#" class="nav-item-sm services">
                <div class="img"><img src="assets/img/bonus/services.svg" alt="Back"></div>
                <span>Services</span>
            </a>
        </div>

        <div class="nav-group-col">
            <a href="#" class="nav-item scan">
                <div class="img"><img src="assets/img/bonus/scan.svg" alt="Back"></div>
                <span>Scan</span>
            </a>
        </div>
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