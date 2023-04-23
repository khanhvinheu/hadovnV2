<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a class="brand-link">
      <img :src="$appSetting.LOGO_META" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">HADOVN</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="/assets/img/avatar5.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{$store.getters.user.name}}</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
<!--      <div class="form-inline">-->
<!--        <div class="input-group" data-widget="sidebar-search">-->
<!--          <input class="form-control form-control-sidebar" type="search" placeholder="Tìm kiếm" aria-label="Search">-->
<!--          <div class="input-group-append">-->
<!--            <button class="btn btn-sidebar">-->
<!--              <i class="fas fa-search fa-fw"></i>-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
           <li class="nav-header">DASHBOARD</li>
            <li class="nav-item nav-item-custorm">
                <router-link class="nav-link" :to="({name:'Dashboard'})" v-bind:class="{ 'active': $route.name=='Dashboard' }">
                    <i class="el-icon-menu"></i>
                    <p>Thống kê</p>
                </router-link>
            </li>
            <li class="nav-item menu-open">
                <a href="#" class="nav-link">
                    <!-- <i class="nav-icon fas fa-tachometer-alt"></i> -->
                    <p>
                        Blog
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>

                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link :to="({name:'BlogList'})" v-bind:class="{ 'active': $route.name=='BlogList' }" class="nav-link">
                            <i class="el-icon-menu"></i>
                            <p>Quản lý Blog</p>
                        </router-link>
                    </li>
                </ul>
            </li>
          <li class="nav-item menu-open">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fas fa-tachometer-alt"></i> -->
              <p>
                Danh mục
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>

            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a @click="$router.push({name:'form'})" v-bind:class="{ 'active': $route.name=='form' }" class="nav-link">
                  <i class="el-icon-menu"></i>
                  <p>Quản lý danh mục</p>
                </a>
              </li>
            </ul>
          </li>
          <!-- <el-divider class="mt-1 mb-2"></el-divider> -->
          <li class="nav-item menu-open">
            <a class="nav-link">
              <!-- <i class="nav-icon fas fa-tachometer-alt"></i> -->
              <p>
                Sản phẩm
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>

            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a  @click="$router.push({name:'ProductList'})"  v-bind:class="{ 'active': $route.name=='ProductList' }" class="nav-link">
                  <i class="el-icon-suitcase"></i>
                  <p>Danh sách sản phẩm</p>
                </a>
              </li>

              <li class="nav-item">
                <a  @click="$router.push({name:'ProductCreate'})" v-bind:class="{ 'active': $route.name=='ProductCreate' }" class="nav-link">
                  <i class="el-icon-plus"></i>
                  <p>Thêm mới sản phẩm</p>
                </a>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" :to="({name:'ProductColorList'})" v-bind:class="{ 'active': $route.name=='ProductColorList' }">
                      <i class="el-icon-set-up"></i>
                      <p>Quản lý màu sản phẩm</p>
                  </router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" :to="({name:'ProductSizeList'})" v-bind:class="{ 'active': $route.name=='ProductSizeList' }">
                      <i class="el-icon-set-up"></i>
                      <p>Quản lý size sản phẩm</p>
                  </router-link>
              </li>
            </ul>
          </li>
          <!-- <el-divider class="mt-1 mb-2"></el-divider> -->
          <li class="nav-item menu-open">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon far fa-envelope"></i> -->
              <p>
                Banner
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item ">
                <a @click="$router.push({name:'BannerList'})" :class="{ 'active': $route.name=='BannerList' }" class="nav-link">
                  <i class="el-icon-film"></i>
                  <p>Quản lý banner</p>
                </a>
              </li>
            </ul>
          </li>
            <li class="nav-item menu-open">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon far fa-envelope"></i> -->
              <p>
                Đơn hàng
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item ">
                <a @click="$router.push({name:'Order'})" :class="{ 'active': $route.name=='Order' }" class="nav-link">
                  <i class="el-icon-film"></i>
<!--                    <el-badge :value="100" class="item">-->
                        <p>Quản lý đơn hàng</p>
<!--                    </el-badge>-->

                </a>
              </li>
            </ul>
          </li>
            <li class="nav-item menu-open">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon far fa-envelope"></i> -->
              <p>
                Setting
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item ">
                <a @click="$router.push({name:'Setting'})" :class="{ 'active': $route.name=='Setting' }" class="nav-link">
                  <i class="el-icon-setting"></i>
                        <p>Setting App</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
    mounted() {

    }

}
</script>

<style>
[class*=sidebar-dark] .user-panel {
    border-bottom: 1px solid #4f5962;
    width: 200px !important;
}
.nav-treeview>.nav-item>.active{
  background-color: rgb(0,0,0,0) !important;
  color: #fff !important;
  border-left: 4px solid #13ce66 !important;
  border-radius:0px !important;
  padding-left:10px !important;
  margin-left:10px !important;
  width:98%;
  /* border-top-right-radius: 20px !important;
  border-bottom-right-radius: 20px !important; */
}
.sidebar-dark-primary .nav-sidebar>.nav-item>.nav-link.active, .sidebar-light-primary .nav-sidebar>.nav-item>.nav-link.active {
    background-color: rgb(0,0,0,0.3) !important;
    color: #fff;
}
.nav-item-custorm .active{
    background-color: transparent;
    color: #fff !important;
    border-left: 4px solid #13ce66 !important;
    border-radius:0px !important;
    padding-left:10px !important;
    margin-left:10px !important;
    width:98%;
}
</style>
