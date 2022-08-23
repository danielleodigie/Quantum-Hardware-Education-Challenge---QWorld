<template>
    <div id="citations">
        <h1>Works cited:</h1>
        <ol>
            <li class="citation" v-for="citation in citations">
                <a :href="citation.link">{{citation.name}}</a>
            </li>
        </ol>
    </div>
</template>

<style>
    #citations {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Futura";
        padding-bottom: 40px;
    }
    #citations h1 {
        font-size: 25px;
        color: black;
    }
    #citations.citation {
        font-size: 20px;
        text-decoration: none;
    }
</style>

<script>
    export default {
        name: "Citations",
        props: {
            citations: {
                required: true,
                type: Array
            }
        }
    }
</script>