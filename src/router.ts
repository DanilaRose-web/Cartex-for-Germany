import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import BaseLayout from "@layouts/base-layout.vue";
import PageHome from "@pages/home/home.vue";
import PageOther from "@pages/other/other.vue";
import PageLogo from "@pages/logo/logo.vue";
import PageLogoTwo from "@pages/logo-two/logo-two.vue";
import PageBonus from "@pages/bonus/bonus.vue";
import PageEnterPurchaseAmount from "@pages/enter-purchase-amount/enter-purchase-amount.vue";
import PageListOfServices from "@pages/list-of-services/list-of-services.vue";
import PagePay from "@pages/pay/pay.vue";
import PageMainScreen from "@pages/main-screen/main-screen.vue";




const router = new VueRouter({
    mode: "history",
    routes: [
        {
        name: "layout",
        path: "/",
        component: BaseLayout,
        children: [
            {
            name:"home",
            path: "",
            component: PageHome
            },
            {
            name:"other",
            path: "other/:id?",
            component: PageOther
            },
        {
            name: "logo",
            path: "logo",
            component: PageLogo,
        },
        {
            name: "logo-two",
            path: "logo-two",
            component: PageLogoTwo,
        },
        {
            name: "bonus",
            path: "bonus",
            component: PageBonus,
        },
        {
            name: "enter-purchase-amount",
            path: "enter-purchase-amount",
            component: PageEnterPurchaseAmount,
        },
        {
            name: "list-of-services",
            path: "list-of-services",
            component: PageListOfServices,
        },
        {
            name: "main-screen",
            path: "main-screen",
            component: PageMainScreen,
        },
        {
            name: "pay",
            path: "pay",
            component: PagePay,
        },
      
        // {
        //   path: "Новости",
        //   component: EmptyLayout,
        //   children:[
        //     {
        //       name: "news",
        //       path: "",
        //       component: PageNews,
        //       meta: {
        //         title: "Новости"
        //       }
        //     },
        //     {
        //       name: "news-detail",
        //       path: ":code",
        //       component: PageNewsDetail
        //     }
        //   ]
        // },
        
      ]
    }
    // {
    //     name: loginRoute.name,
    //     path: "/" + routeLangPrefix + "/login",
    //     component: LoginComponent,
    //     meta: {
    //         allowAnonymous: true,
    //         title: "Авторизация"
    //     }
    // },
    // {
    //     name: '404',
    //     path: "*",
    //     component: LoginComponent,
    //     meta: {
    //         allowAnonymous: true,
    //         title: "Авторизация"
    //     }
    // },
  ]
});

router.beforeEach((to, from, next) => {
 // console.log(to, from, next);
  //var title = Vue.$mainStore.PageTitle;
  // if (to.meta.title) {
  //   if (title) title = `${to.meta.title} | ${title}`;
  //   else title = to.meta.title;
  // }
  // document.title = title;
  // console.log("document.head.title", document.head.title);


  // if(!Vue.$mainStore.SchoolInfo){
  //   Vue.$api.SchoolService.GetSchoolInfoEvent.once(()=>{
  //     next();
  //   });
  //   Vue.$api.SchoolService.GetSchoolInfo();
  // }
  // else
    next();
  
});

export default router;
