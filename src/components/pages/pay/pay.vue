<template>
    <layout> 
        <section class="section-dark section-fullheight">
            <div class="container-fluid container-no-padding">
                <header class="pay-header">
                    <div class="pay-item">
                        <div class="pay-header-item pay-header-sm">
                            <h3 class="light-title">Gesamtsumme:</h3>
                            <p class="pay-price"><span>250.00</span><strong>&euro;</strong></p>
                        </div>
                    
                        <div class="pay-header-item pay-header-sm">
                            <h3 class="light-title">Kontostand:</h3>
                            <p class="pay-price"><span>10</span><strong>&euro;</strong></p>
                        </div>
                    </div>

                    <div class="pay-item">
                        <div class="pay-header-col">
                            <div class="pay-header-item">
                                <h2>Zur Zahlung:</h2>
                                <p class="sum"><span>80.00</span><strong>&euro;</strong></p>
                            </div>
                        </div>
                    </div>
                </header>

            

                <footer class="pay-footer fixed-footer">
                    
                    <div class="pay-footer-col abrechen btn-cancel">
                        <!-- <a href="#" class="pay-footer-item abrechen">
                            <h4>Abrechen</h4>
                            <div class="img"><img src="assets/img/pay/back.svg" alt="Back"></div>
                        </a> -->
                        <btn-cancel></btn-cancel>
                    </div>
                    <div class="pay-footer-col enter">
                        <a href="#" class="pay-footer-item enter">
                            <span>enter</span>
                        </a>
                    </div>
                </footer>
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