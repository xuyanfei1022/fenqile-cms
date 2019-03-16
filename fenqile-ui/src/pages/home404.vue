<template>
    <div class="home4">
        <h1>404</h1>
        <h3>Page not found</h3>
        <p>An error occurred and your request couldn't be completed.</p>
        <p>Please try again or go back home</p>
        <router-link to="/">
            <span>Home</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "home404"
    }
</script>

<style>
    @import "../../static/css/public.css";
    #app{
        height:100%;
        background:#f0f0f0;
    }
    .home4{
        width:560px;
        height:400px;
        position:absolute;
        left:0;
        top:0;
        bottom:0;
        right:0;
        margin:auto;
        text-align:center;
    }
    .home4 h1{
        color: #373a3c;
        font-size: 200px;
        font-weight: 500;
        max-height: 220px;
    }
    .home4 h3{
        font-size: 75px;
        margin-top: 20px;
        color: #373a3c;
        font-weight:100;
    }
    .home4 p{
        color: #373a3c;

    }
    .home4 p:nth-child(4){
        margin-bottom:30px;
    }
    .home4 a{
        display:block;
        border: 1px solid #663ab8;
        padding: 14px 16px;
        width: 130px;
        border-radius: 4px;
        background-color: #663ab8;
        margin:0 auto;
    }
    .home4 a span{
        color: #ffffff;
        text-transform: uppercase;
        font-size: 18px;
    }
</style>
