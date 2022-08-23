<template>
    <LecturePage title="Superconductors" :elements="elements" imgsrc="../images/qubit.png" imgalt="qubit">
    </LecturePage>
</template>

<script>
    export default {
        data() {
            return {
                elements: [{
                        type: "text",
                        content: "Different materials are often classified by their conductivity, a measure of how easily electrons can pass through a material when subjected to an electric field. Conductors are materials that require only a small amount of energy for an electron to be stripped from its atom, in what is known as the valence band, and flow freely through the material, in what is known as the conductance band."
                    },
                    {
                        type: "img",
                        content: {
                            src: "../images/Electrons.png",
                            alt: "electron model"
                        }
                    },
                    {
                        type: "text",
                        content: "In most conductors, electrons in the conductance bands experience a certain amount of “friction”, which provides some resistance to the flow of current and keeps the material from being infinitely conductive.  However, at sufficiently low temperatures, some materials become infinitely conductive superconductors, where the electrons exhibit no resistance to their flow.  This occurs because electrons exhibit a weak attraction to one another that bind them together in Cooper Pairs, which do not experience resistance when flowing through a material, unlike unpaired electrons."
                    },
                    {
                        type: "question",
                        content: {
                            question: "What do electrons exhibit with superconductors?",
                            answers: {
                                answers: ["Resistance", "Weak attraction to one another", "No Resistance", "#2 and #3"],
                                correct: 3,
                                explanation: "Some pairs of electrons show a very small attraction to each other at lower temperatures, this phenomenon is what we call Cooper Pairs. These pairs do not experience resistance when flowing through a material."
                            }
                        }
                    },
                    {
                        type: "img",
                        content: {
                            src: "../images/Cooper_Pair.png",
                            alt: "cooper pairs model",
                            imgstyle: "transform:rotate(90deg);"
                        }
                    },
                    {
                        type: "text",
                        content: "The behavior of all the Cooper Pairs in a superconductor effectively combines into a single wave function spanning the entire material.  This wavefunction is quantum mechanical in nature, and thus has discrete energy levels like an electron in the shell of an atom.  However, instead of describing just a single electron, it describes the flow of many electrons, making it a quantum mechanical system that is possible to construct and manipulate on a larger scale."
                    },
                    {
                        type: "question",
                        content: {
                            question: "Which is a false statement of Cooper pairs?",
                            answers: {
                                answers: ["Are like paired electrons", "Has continuous energy levels", "It describes the flow of many electron", "its a tweakable quantum mechanical system"],
                                correct: 1,
                                explanation: "Cooper pairs have discrete energy levels."
                            }
                        }
                    },
                ]
            }
        }
    }
</script>