<template>
    <div class="temp">
        <Discuss :discussID="senID"></Discuss>
    </div>
</template>

<style>

</style>

<script>
    import Discuss from '../sub/Discuss.vue'
    export default{
        data(){
            return {
                senID:0
            }
        },
        created(){
           this.senID=this.$route.params.id
        },
        props:['id'],
        components:{
            Discuss
        }
    }
</script>