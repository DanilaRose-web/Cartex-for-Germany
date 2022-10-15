<template>
    <div class="calc-col col-calc keyboard disabled">
        <div class="calc-row-in">
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="1">1</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="2">2</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="3">3</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="4">4</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="5">5</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="6">6</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="7">7</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="8">8</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="9">9</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value=".">.</button>
            </div>
            <div class="col-4 calc-col-in">
                <button class="calc-number" data-value="0">0</button>
            </div>
            <div class="col-4 calc-col-in">
                <button type="text" class="calc-number"><img src="assets/img/enter-purchase-amounr/delete.svg" alt="Delete"></button>
            </div>
            <div class="col-12 calc-col-in enter">
                <button class="calc-number enter">Enter</button>
            </div>
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