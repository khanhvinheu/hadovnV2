<template>
    <div class="dashboard-contain" v-loading="loading" style="height: 100%">
        <div class="row" style="min-height: 200px">
            <div class="col-md-3 col-sm-6 col-12">
                <div class="info-box bg-gradient-info">
                    <span class="info-box-icon"><i class="el-icon-notebook-1"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Bookmarks</span>
                        <span class="info-box-number">0</span>
                        <div class="progress">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                        <span class="progress-description">
                        70% Increase in 30 Days
                        </span>
                    </div>

                </div>

            </div>

            <div class="col-md-3 col-sm-6 col-12">
                <div class="info-box bg-gradient-success">
                    <span class="info-box-icon"><i class="far fa-thumbs-up"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Likes</span>
                        <span class="info-box-number">0</span>
                        <div class="progress">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                        <span class="progress-description">
                        70% Increase in 30 Days
                        </span>
                    </div>

                </div>

            </div>

            <div class="col-md-3 col-sm-6 col-12">
                <div class="info-box bg-gradient-warning">
                    <span class="info-box-icon"><i class="far fa-calendar-alt"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Events</span>
                        <span class="info-box-number">0</span>
                        <div class="progress">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                        <span class="progress-description">
                        70% Increase in 30 Days
                        </span>
                    </div>

                </div>

            </div>

            <div class="col-md-3 col-sm-6 col-12">
                <div class="info-box bg-gradient-danger">
                    <span class="info-box-icon"><i class="fas fa-comments"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Comments</span>
                        <span class="info-box-number">0</span>
                        <div class="progress">
                            <div class="progress-bar" style="width:0%"></div>
                        </div>
                        <span class="progress-description">
                        70% Increase in 30 Days
                        </span>
                    </div>

                </div>

            </div>

        </div>
        <div class="card-body2">
            <div class="row">
                <div class="col-md-12 col-lg-6 col-xl-4">
                    <div class="card mb-2 bg-gradient-dark">
                        <img loading="lazy" class="card-img-top" src="/assets/img/photo1.png" alt="Dist Photo 1">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title text-primary text-white">Card Title</h5>
                            <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                            <a href="#" class="text-white">Last update 2 mins ago</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-4">
                    <div class="card mb-2">
                        <img loading="lazy" class="card-img-top" src="/assets/img/photo2.png" alt="Dist Photo 2">
                        <div class="card-img-overlay d-flex flex-column justify-content-center">
                            <h5 class="card-title text-white mt-5 pt-2">Card Title</h5>
                            <p class="card-text pb-2 pt-1 text-white">
                                Lorem ipsum dolor sit amet, <br>
                                consectetur adipisicing elit <br>
                                sed do eiusmod tempor.
                            </p>
                            <a href="#" class="text-white">Last update 15 hours ago</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-4">
                    <div class="card mb-2">
                        <img loading="lazy" class="card-img-top" src="/assets/img/photo3.jpg" alt="Dist Photo 3">
                        <div class="card-img-overlay">
                            <h5 class="card-title text-primary">Card Title</h5>
                            <p class="card-text pb-1 pt-1 text-white">
                                Lorem ipsum dolor <br>
                                sit amet, consectetur <br>
                                adipisicing elit sed <br>
                                do eiusmod tempor. </p>
                            <a href="#" class="text-primary">Last update 3 days ago</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "index",
    data(){
        return{
            loading:true
        }
    },
    created(){
        setTimeout(()=>{
            this.loading=false
        },500)
    }
}
</script>

<style scoped>

</style>
