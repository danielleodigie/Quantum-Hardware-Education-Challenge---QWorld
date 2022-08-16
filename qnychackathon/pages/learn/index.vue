<template>
    <div id="biglearn">
        <h1 id="topics">Topics</h1>
        <p id="watching">Start from the beginning or jump around! It's up to you, we're not watching you!</p>
        <div id="learn">
            <NuxtLink to="#"><InfoCard imgsrc="images/qubit.png" style="background-color: #6f5947; color: white;" title="What's a Qubit?" subtitle="the ultimate multitasker"></InfoCard></NuxtLink>

            <NuxtLink to="#"><InfoCard imgsrc="images/qubit.png" style="background-color: #6f5947; color: white;" title="What's a Qubit?" subtitle="the ultimate multitasker"></InfoCard></NuxtLink>

            <NuxtLink to="#"><InfoCard imgsrc="images/qubit.png" style="background-color: #6f5947; color: white;" title="What's a Qubit?" subtitle="the ultimate multitasker"></InfoCard></NuxtLink>

            <NuxtLink to="#"><InfoCard imgsrc="images/qubit.png" style="background-color: #6f5947; color: white;" title="What's a Qubit?" subtitle="the ultimate multitasker"></InfoCard></NuxtLink>

            <NuxtLink to="#"><InfoCard imgsrc="images/qubit.png" style="background-color: #6f5947; color: white;" title="What's a Qubit?" subtitle="the ultimate multitasker"></InfoCard></NuxtLink>
        </div>
    </div>
</template>

<style>
    #learn{
        display: grid;
        grid-gap: 1em;
        grid-auto-rows: auto;
        grid-template-columns: repeat(2, 1fr);
        margin: auto;
        padding-left: 1em;
    }

    #biglearn{
        margin: auto;
        text-align: center;
    }

    #topics{
        font-size: 50px;
        padding: 0px;
        margin: 0;
    }

    #watching{
        font-size: 20px;
    }

    @media only screen and (max-width: 800px){
        #learn{
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>