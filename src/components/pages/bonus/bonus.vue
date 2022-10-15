<template>
    <layout> 
        <section class="section-dark section-fullheight">
            <div class="container-fluid container-no-padding">
                <div class="row calc-row">
                    <div class="calc-col col-res">
                        <div class="result result-bonus">
                            <div class="number-card">2780 **** **** 9805</div>
                            <div class="score">
                                <h4 class="light-title light-title-sm">Kontostand:</h4>
                                <div class="bank-balance">
                                    <span class="first-sum">470</span>
                                    <strong class="last-sum">/300</strong>
                                </div>
                            </div>
                            <div class="layout-dark-res">
                                <h2 class="big-title big-title-left">Введите сумму покупки</h2>
                            </div>
                        </div>

                        <nav-group-button></nav-group-button>
                        <!-- <div class="nav-group">
                            <div class="nav-group-col">
                                <a href="#" class="nav-item-sm berichte">
                                    <div class="img"><img src="assets/img/bonus/copy.svg" alt="Back"></div>
                                    <h4>Berichte</h4>
                                    
                                </a>
                                <a href="#" class="nav-item-sm services">
                                    <div class="img"><img src="assets/img/bonus/services.svg" alt="Back"></div>
                                    <h4>Services</h4>
                                </a>
                            </div>

                            <div class="nav-group-col">
                                <a href="#" class="nav-item scan">
                                    <div class="img"><img src="assets/img/bonus/scan.svg" alt="Back"></div>
                                    <h4>Scan</h4>
                                </a>
                            </div>
                        </div> -->
                    </div>

                    <default-keyboard></default-keyboard>

                    <!-- <div class="calc-col col-calc keyboard">
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
                    </div> -->
                </div>
            </div>
        </section>
    </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PageHomeComponent extends Vue {
  
  
  constructor() {
    super();    
  }
  created() { 
    console.log('home');   
  }
  mounted() {
  

    
  }
  
}
</script>