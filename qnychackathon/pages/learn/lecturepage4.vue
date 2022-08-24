<template>
    <div>
        <LecturePage title="RC Circuits" :elements="elements" imgsrc="../images/qubit.png" imgalt="qubit">
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
                        content: "In order to effectively use a superconductor in order to create a qubit, the flow of electrons must be subject to a certain combination of forces that “confines” it, and thus forces it to occupy discrete energy levels.  One such combination of forces is the simple harmonic oscillator.  One example of a simple harmonic oscillator is a block attached to a spring.  When the block is far from its equilibrium position, the spring is stretched so it applies a large retarding force to the block, slowing it down.  When the block is close to its equilibrium position, the spring becomes relaxed and applies a smaller force to the block, allowing it to move more quickly.  The energy in the system oscillates between being stored in the movement of the block, when it is near its equilibrium position, to being stored in the stretch of the spring, when it is far from its equilibrium position."
                    },
                    {
                        type: "img",
                        content: {
                            src: "../images/Kinetic_.png",
                            alt: "kinetic energy model"
                        }
                    },
                    {
                        type: "question",
                        content: {
                            question: "What is an example of a simple harmonic oscillator?",
                            answers: {
                                answers: ["A slingshot", "Several levers on a machine", "A circular net", "A block attached to a string"],
                                correct: 3,
                                explanation: "In order to effectively use a superconductor in order to create a qubit, the flow of electrons must be subject to a certain combination of forces that “confines” it, and thus forces it to occupy discrete energy levels. This would be a harmonic oscillator, a block attached to a string."
                            }
                        }
                    },
                    {
                        type: "question",
                        content: {
                            question: "What happens when the block is close to its equilibrium position?",
                            answers: {
                                answers: ["The spring relaxes", "The spring breaks", "The spring collapses", "The spring tightens"],
                                correct: 0,
                                explanation: "When the block is far from its equilibrium position, the spring is stretched so it applies a large retarding force to the block, slowing it down.  Therefore, when the block is close to its equilibrium position, the spring becomes relaxed and applies a smaller force to the block, allowing it to move more quickly."
                            }
                        }
                    },
                    {
                        type: "text",
                        content: "A similar phenomenon occurs in an LC circuit.  An LC circuit contains two major components.  The first is a capacitor, which is a device that stores charge using an electric field.  When connected to a circuit, thea charged capacitor will begin to discharge and electrons from the capacitor will begin to flow through the circuit, creating a current.  The second component is an inductor.  An inductor is a device that opposes the change of the flow of current through a circuit.  So, as the capacitor discharges and the current through the circuit increases, the inductor opposes this change by creating a voltage in the opposite direction and recharging the capacitor.  This back-and-forth motion is similar to that of a block attached to the spring."
                    },
                    {
                        type: "img",
                        content: {
                            src: "../images/Circuit.png",
                            alt: "LC Circuit diagram",
                        }
                    },
                    {
                        type: "question",
                        content: {
                            question: "What are the two main components of an LC circuit?",
                            answers: {
                                answers: ["A capacitor and an inductor", "An electron and a proton", "Two atoms", "A generator and a wire"],
                                correct: 0,
                                explanation: "An LC circuit contains two major components.  The first is a capacitor, which is a device that stores charge using an electric field. The second component is an inductor.  An inductor is a device that opposes the change of the flow of current through a circuit."
                            }
                        }
                    },
                    {
                        type: "text",
                        content: "Additionally, if the LC circuit is constructed using a superconducting material rather than a regular conductor, the circuit will exhibit quantum mechanical behavior for the reasons explained in the previous section.  As a result, the circuit has discrete energy levels, rather than a continuous range of observable energies.  This means that an LC circuit of superconducting material has the potential to serve as a qubit!  However, one challenge with this approach is that the energy levels in a simple harmonic oscillator are equally spaced.  In the first section we discussed how a qubit must have only two possible states, |0> and |1>, while an LC circuit has an infinite number of possible states.  In order to use only the first two states, and interact with none of the others, we need a circuit with an anharmonic potential."
                    },
                    {
                        type: "img",
                        content: {
                            src: "../images/Untitled_Artwork.png",
                            alt: "anharmonic potential diagram",
                        }
                    },
                    {
                        type: "question",
                        content: {
                            question: "What happens when an LC circuit is constructed using a superconducting material?",
                            answers: {
                                answers: ["It will exhibit quantum mechanical behavior", "It will serve as a qubit", "It will have continous data", "#1 and #2", "#1 and #3"],
                                correct: 3,
                                explanation: "An LC circuit is constructed using a superconducting material is important so that it has the potential to serve as a qubit."
                            }
                        }
                    },
                    {
                        type: "text",
                        content: "In an anharmonic potential, the spacing between energy levels is uneven.  This means, if we use photons of energy that correspond to the energy difference between the first two levels, it will not interfere with any of the other energy levels.  This means we can pretend that the system only has two states, just like our theoretical qubit!  The easiest way to introduce anharmonic effects into the circuit is by replacing the normal inductor with a Josephson junction."
                    },
                    {
                        type: "question",
                        content: {
                            question: "What do we need to do if we use anharmonic potential?",
                            answers: {
                                answers: ["Use all its states", "Pretend that the system only has two states", "Rely on classical bits", "It's not ideal to use"],
                                correct: 1,
                                explanation: "In an anharmonic potential, the spacing between energy levels is uneven. This means, if we use photons of energy that correspond to the energy difference between the first two levels, it will not interfere with any of the other energy levels. This means we can pretend that the system only has two states, just like our theoretical qubit!"
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