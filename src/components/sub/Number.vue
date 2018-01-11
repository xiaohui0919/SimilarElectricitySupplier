<template>
    <div class="number">
        <div class="left" @click="sub">
            -
        </div>
        <div class="middle">{{count}}</div>
        <div class="right" @click="add">
            +
        </div>
    </div>
</template>

<style scoped>
    .number{
        display: flex;
    }
    .left,.right{
        width: 35px;
        height: 25px;
        border: 1px solid rgba(1,1,1,.6);
        text-align: center;
    }
    .middle{
        width: 45px;
        height: 25px;
        border: 1px solid rgba(1,1,1,.6);
        text-align: center;
    }
</style>

<script>
    export default{
        data(){
            return {
                count:1
            }
        },
        methods:{
            // 减法
            sub(){
               if(this.count<=1){
                   this.count=1
                   return
               }
                this.count--
                this.submit()
            },
            // 加法
            add(){
                this.count++
                this.submit()
            },

            submit(){
                // 向父组件传值的方法
                this.$emit('send',this.count)
            }
        }
    }
</script>