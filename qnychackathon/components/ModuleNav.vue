<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <img @click="toggle()" :src="navimg" id="navimg"/>
    <div id="modulenav">
        <ul id="modulenavlist">
            <li v-for="(item, index) in navitems">
                <span><a :href="navlinks[index]">{{item}}</a></span>
            </li>
        </ul>
    </div>
    </aside>
</template>

<script>
    import {ref} from 'vue'
    export default{
        
        data(){
            return {
                navitems: ["Classical and Quantum Bits"],
                navlinks: ["/learn/lecturepage1"],
                is_expanded: false,
                navimg: "../images/plus.png"
            }
        },
        methods: {
            toggle() {
                this.is_expanded = !this.is_expanded
                if(!this.is_expanded){
                    document.getElementById("modulenavlist").style.visibility = "hidden";
                    this.navimg= "../images/plus.png"
                }
                else{
                    document.getElementById("modulenavlist").style.visibility = "visible";
                    this.navimg= "../images/minus.png"
                }
                
            }
        }
    }
</script>

<style>
    aside{
        transition: 0.2s ease-in-out;
        width: 2em; 
        background-color: #6f5947;
        border-radius: 0px 10px 10px;
        position: absolute;
        top: 120px;
    }

    .is-expanded{
        width:200px;
    }
    #modulenav li{

        text-decoration: none;
        list-style:circle;
        color: white;
        font-size: 15px;
    }
    #modulenav li span{
        font-size: 15px;
    }
    #modulenav a, #modulenav a:visited{
        color: white;
        font-family: "Goldleaf";
        font-size: 20px;
    }

    #modulenav{
        overflow-x: hidden;
        height: 100%;
        background-color: #6f5947;
        border-radius: 0px 15px 15px 0px;
        display: flex;
    }

    #modulenav ul{
        margin:auto;
        padding:15px;
    }

    #navimg{
        transition: 0.1s;
        height: 20px;
        margin:auto;
        padding-left: 5px;
        padding-top: 10px;
    }
</style>