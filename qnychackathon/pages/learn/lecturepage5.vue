<template>
    <div>
        <LecturePage title="Josephson Junctions" :elements="elements" imgsrc="../images/qubit.png" imgalt="qubit">
        </LecturePage>
        <WorksCited :citations="citations"></WorksCited>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                elements: [{
                        type: "text",
                        content: "A Josephson junction is composed of a thin layer of insulating material sandwiched between two layers of superconductor.  Normally, no current can pass through an insulator because electrons in insulators are not free to move through the conductance band.  However, the quantum mechanical nature of the Cooper pairs in a superconducting material allows them to occasionally “tunnel” through the insulating material to the other side."
                    },
                    {
                        type: "img",
                        content: {
                            src: "../images/Josephson_Junctions.png",
                            alt: "Josephson Junction diagram",
                        }
                    },
                    {
                        type: "question",
                        content: {
                            question: "What is the insulating material layout of a Josephson junction?",
                            answers: {
                                answers: ["It is between two atoms ", "It is between a proton and electron", "It is between two layers of superconductor", "It is on top of the system"],
                                correct: 2,
                                explanation: "It is composed of a thin layer of insulating material sandwiched between two layers of superconductor due to the quantum mechanical nature of the Cooper pairs in a superconducting material allowing them to occasionally “tunnel” through the insulating material to the other side."
                            }
                        }
                    },
                    {
                        type: "text",
                        content: "Josephson junctions can replace normal inductors in a superconducting circuit.  Like normal inductors, Josephson junctions slow the transmission of current, counteracting the discharge of the capacitor.  However, unlike normal inductors, Josephson junctions have nonlinear inductance.  This translates to a slightly different potential function and energy levels that are unevenly spaced.  The uneven spacing allows us to access only the first two energy levels, satisfying the demand that a bit have only two possible values."
                    },
                    {
                        type: "question",
                        content: {
                            question: "What can Josephson junctions do?",
                            answers: {
                                answers: ["Create linear inductance", "Evenly spaced energy levels", "Keep the same potential function", "Slow the transmission of current"],
                                correct: 3,
                                explanation: "Unlike normal inductors, Josephson junctions have nonlinear inductance.  This translates to a slightly different potential function and energy levels that are unevenly spaced.  The uneven spacing allows us to access only the first two energy levels, satisfying the demand that a bit have only two possible values."
                            }
                        }
                    },
                ],
                citations: [
                    {
                        name: "Superconducting quantum bits – Physics World",
                        link: "https://physicsworld.com/a/superconducting-quantum-bits/"
                    },
                    {
                        name: "Building a quantum computer with superconducting qubits (QuantumCasts)",
                        link: "https://youtu.be/uPw9nkJAwDY"
                    },
                    {
                        name: "Quantum computing with superconducting qubits — PennyLane",
                        link: "https://pennylane.ai/qml/demos/tutorial_sc_qubits.html"
                    },
                    {
                        name: "Superconducting quantum bits | Nature",
                        link: "https://www.nature.com/articles/nature07128"
                    },
                    {
                        name: "A Brief History of Superconducting Quantum Computing | Steven Girvin",
                        link: "https://www.youtube.com/watch?v=xjlGL4Mvq7A&t=288s"
                    },
                    {
                        name: "Qiskit: 16. Superconducting Qubits I: Quantizing a Harmonic Oscillator, Josephson Junctions - Part 1",
                        link: "https://www.youtube.com/watch?v=eZJjQGu85Ps"
                    },

                ]
            }
        }
    }
</script>