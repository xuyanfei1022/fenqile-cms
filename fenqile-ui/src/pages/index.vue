<template>
    <div class="bigBox">
        <headIndex></headIndex>
        <div class="content">
            <navIndex></navIndex>
            <aside>
              <!--<customer-con></customer-con>-->
              <!--<edit-customer></edit-customer>-->
              <router-view/>
            </aside>
        </div>
    </div>
</template>

<script>
    import headIndex from "../components/index/headIndex";
    import navIndex from "../components/index/navIndex";
    // import customerCon from "../components/customer/customer-con"
    // import editCustomer from "./editCustomer"
    export default {
        name: "index",
        components: {
            headIndex,
            navIndex
        }
        // data () {
        //     return {
        //         listJson :{}
        //     };
        // },
        // created(){
        //     this.listJson=listJson;
        // },

    }
</script>

<style scoped>
    .bigBox{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .content{
        flex:1;
        display: flex;
        background: #efefef;
    }

    aside{
        flex:1;
        background:#efefef;
        overflow-y: auto;
    }
</style>
