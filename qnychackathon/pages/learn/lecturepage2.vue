<template>
    <div>
        <LecturePage title="Energy Quantization" :elements="elements">
        </LecturePage>
        <div class="video">
            <p style="font-size:30px">Here's a video to explain some quantum mechanics basics to understand this better!</p>
            <iframe width="70%" height="450px" src="https://www.youtube.com/embed/xMteuXSs3Ko?color=white&autoplay=0&fs=0&modestbranding=1&rel=0&cc_load_policy=1" title="Quantum Mechanics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <WorksCited :citations="citations"></WorksCited>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                elements: [{
                        type: "text",
                        content: "When a classical bit is measured, it returns a value of either 0 or 1, and nothing in between.  A similar phenomenon occurs in quantum systems.  When measuring the energy of a ball rolling down a hill, one could expect to get any number of values for the energy of that ball, ranging from 0, if the ball is still, to increasingly large numbers if the ball is moving faster.  However, the same is not true in quantum systems.  The measurement of the energy of an electron can only yield discrete values, rather than a continuous range of values."
                    },
                    {
                        type: "img",
                        content: {
                            src: "../images/Energy_Quantization.png",
                            alt: "energy levels"
                        }
                    },
                    {
                        type: "question",
                        content: {
                            question: "The measurement of an electron's energy can only yield...",
                            answers: {
                                answers: ["Continuous range of values", "Discrete values"],
                                correct: 1,
                                explanation: "Energy levels are based on the Schrodinger equation which only allows discrete energy levels in the electric potential of the nucleus."
                            }
                        }
                    },
                    {
                        type: "text",
                        content: "Moreover, electrons can be promoted from a given energy level to a higher energy level if it can absorb the amount of energy corresponding to the gap between the two levels.  For example, if an electron is in the ground state and it absorbs a photon of sufficient energy, it can be elevated to the first excited state.  It is clear that this property is incredibly useful for the development of qubits.  If we can isolate the first two energy levels of a system, they can represent the |0> and  |1> states found in classical bits.  And, we can use photons of specific energies to change the state of an electron from one state to the other."
                    },
                    {
                        type: "text",
                        content: "However, many challenges come with manipulating quantum systems.  First of all, natural atoms come preprogrammed with specific energy levels and energy spacing which cannot be dictated by the engineer.  They are also difficult, and nearly impossible, to manipulate and integrate into the framework of a computer.  For this reason, scientists often look towards creating synthetic atoms, which exhibit the quantum mechanical properties of normal atoms, but are customizable because they are manufactured from the ground up.  Larger systems with observable quantum mechanical properties are hard to come by, but are made possible by the existence of superconductors."
                    },
                    {
                        type: "question",
                        content: {
                            question: "Why do synethetic atoms exist?",
                            answers: {
                                answers: ["Natural atoms are hard to manipulate", "Natural atoms are hard to integrate in a computer", "Natural atoms do not exhibit customizable quantum mechanical properties", "All are correct"],
                                correct: 3
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
