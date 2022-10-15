<template>
    <layout> 
        <section class="section-dark section-fullheight">
            <div class="container-fluid container-no-padding">
                <div class="row calc-row">
                    <div class="calc-col col-res">
                        <div class="result result-main">
                            <div class="layout-dark">
                                <h2 class="big-title"><span>Bitte scannen <br> Sie KundenKarte</span></h2>
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


                    <disabled-keyboard></disabled-keyboard>
                    <!-- <div class="calc-col col-calc keyboard disabled">
                        <div class="calc-row-in">
                            <div class="col-4 calc-col-in">
                                <button class="calc-number" data-value="1">1</button>
                            </div>
                            <div class="col-4 calc-col-in">
                                <button class="calc-number active" data-value="2">2</button>
                            </div>
                            <div class="col-4 calc-col-in">
                                <button class="calc-number" data-value="3">3</button>
                            </div>
                            <div class="col-4 calc-col-in">
                                <button class="calc-number" data-value="4">4</button>
                            </div>
                            <div class="col-4 calc-col-in">
                                <button class="calc-number active" data-value="5">5</button>
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
                                <button class="calc-number active" data-value="0">0</button>
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