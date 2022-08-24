<template>
    <div id="about">
        <div id="aboutsec">
            <h1>Making Quantum Hardware EASY!</h1>
            <p>Our goal for this module is to delve into the world of superconducting qubits, an implementation of quantum computation. In this module, there are submodules that take you from the basic theory to the high level physics. You can find videos that break down the topics, lectures to read up on the material, flashcards to practice it, and quizzes to test yourself! The materials can be found in the learn section of the website, however, make sure to watch the video on our home page to get introduced to the topic. As undergraduate students, we see the lack of accessibility to quantum information. We understand that quantum computing is marketed only for those who are at a high academic level. This decreases the diversity within the field and gatekeeps it from reaching the general public. We hope that through the funny, nonchalant videos, digestible lecture information, and quizzes/slides that quantum computing will appeal to a broader audience. Quantum computing is for everyone who is willing to take on the challenge to learn and our module is a great place to begin!</p> 
            <div class="video">
                <p style="font-size:30px">Here's a video to explain some of quantum computing's applications in the real world!</p>
                <iframe width="90%" height="600px" src="https://www.youtube.com/embed/klynYSaWjs4?color=white&autoplay=0&fs=0&modestbranding=1&rel=0&cc_load_policy=1" title="Quantum Computing Applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <p>If you're ready, let's travel to the quantum realm and get started <NuxtLink to="/learn">here</NuxtLink>!</p>
            <p>Here's a breakdown of how we all contributed to create this vision! In no particular order:</p>
            <ul>
                <li><p>Yelissa Lopez: Videos, Planning, Research</p></li>
                <li><p>Keily Luna: Images, Quizzes</p></li>
                <li><p>Raynel Sanchez: Web Development</p></li>
                <li><p>Sophia Guizzo: Lecture Content, Reserach</p></li>
                <li><p>Danielle Odigie: Web Development</p></li>
            </ul>
        </div>
    </div>
</template>

<style>
    #aboutsec{
        width: 75%;
        margin: auto;
        text-align: center;
    }

    #aboutsec h1{
        font-family: "Goldleaf";
        font-size: 50px;
    }

    #aboutsec p{
        font-size: 25px;
        font-family: "DosisLight";
        color: rgb(96, 96, 96);
    }

    #aboutsec a{
        color:#5a4230; 
        font-weight: bold;
    }

    #aboutsec ul{
        list-style-type: none;
    }
</style>