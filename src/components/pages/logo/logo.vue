<template>
    <layout> 
        <section class="fullheight">
            <div class="main-logo"><img src="assets/img/logo/logo.svg" alt="Logo"></div>
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