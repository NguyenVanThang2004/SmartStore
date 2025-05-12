<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Features</div>



                    <router-link to="/admin/">
                        <div class="nav-link">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </div>
                    </router-link>

                    <router-link to="/admin/users" class="nav-link">
                        <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
                        User
                    </router-link>

                    <router-link to="/admin/products" class="nav-link">
                        <div class="sb-nav-link-icon"><i class="fas fa-box"></i></div>
                        Product
                    </router-link>

                    <router-link to="/admin/orders" class="nav-link">
                        <div class="sb-nav-link-icon"><i class="fas fa-shopping-cart"></i></div>
                        Order
                    </router-link>
                </div>
            </div>

            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Hỏi Dân IT
            </div>
        </nav>
    </div>

</template>
