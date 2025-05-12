<template>

  <div class="sb-nav-fixed">

    <headerPage />

    <div id="layoutSidenav">

      <sidebarPage />

      <div id="layoutSidenav_content">

        <main>
          <router-view></router-view>
        </main>

      </div>
    </div>

    <footerPage />



  </div>



</template>


<script setup>

import "@/assets/css/styles.css"
import "@/assets/css/demo.css"

import headerPage from '@/components/layout/admin/header.vue'
import sidebarPage from '@/components/layout/admin/sidebar.vue'
import footerPage from '@/components/layout/admin/footer.vue'
import { onMounted } from "vue"
// // onMounted(() => {
// //   window.addEventListener('DOMContentLoaded', event => {

// //     // Toggle the side navigation
// //     const sidebarToggle = document.body.querySelector('#sidebarToggle');
// //     console.log("ăn sự kiện toggle");

// //     if (sidebarToggle) {
// //         // Uncomment Below to persist sidebar toggle between refreshes
// //         // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
// //         //     document.body.classList.toggle('sb-sidenav-toggled');
// //         // }
// //         sidebarToggle.addEventListener('click', event => {
// //             event.preventDefault();
// //             document.body.classList.toggle('sb-sidenav-toggled');
// //             localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
// //         });
// //     }

// // });
// // });

onMounted(() => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  console.log("ăn sự kiện toggle");

  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
  }
}
)

</script>
