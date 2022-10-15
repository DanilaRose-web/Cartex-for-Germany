<template>
    <router-view/>
</template>
<script lang="ts">
import Vue from "vue";
 import { Component } from "vue-property-decorator";

@Component
export default class AppComponent extends Vue {  
  constructor() {
    super();
    //console.log("AppComponent created");

  }  
  created(){       
  }

}
</script>