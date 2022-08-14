<template>
    <div id="modulenav">
        <ul>
            <li v-for="(item, index) in navitems">
                <span><a :href="navlinks[index]">{{item}}</a></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        props: {
            navitems: Array,
            navlinks: Array
        }
    }
</script>

<style>
    #modulenav li{

        text-decoration: none;
        list-style:circle;
        color: white;
        font-size: 30px;
    }
    #modulenav li span{
        font-size: 20px;
    }
    #modulenav a, #modulenav a:visited{
        color: white;
        font-family: "Goldleaf";
        font-size: 30px;
    }

    #modulenav{
        width: 210px;
        height: 100%;
        background-color: #6f5947;
        border-radius: 0px 15px 15px 0px;
        display: flex;
    }

    #modulenav ul{
        margin:auto;
        padding:15px;
    }
</style>