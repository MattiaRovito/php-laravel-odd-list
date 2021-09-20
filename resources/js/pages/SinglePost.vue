<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.content}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>

</template>




<script>
export default {
    name: 'SinglePost',
    data(){
        return  {
            post: [],
        }
    },
    mounted(){
        axios.get('/api/post/' + this.$route.params.slug)
             .then(response=>{
                 this.post=response.data.results;
                // console.log(this.post)
             })
             .catch();
    }
}
</script>





<style lang="scss" scoped>

</style>