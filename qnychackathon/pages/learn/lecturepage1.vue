<template>
    <div>
        <LecturePage title="Classical and Quantum Bits" :elements="elements">
        </LecturePage>
        <div class="video">
            <p style="font-size:30px">Here's a little video to sum things up!</p>
      <iframe width="70%" height="450px" src="https://www.youtube.com/embed/CskYZrkkWMs?color=white&autoplay=0&fs=0&modestbranding=1&rel=0&cc_load_policy=1" title="Classical vs Quantum" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <WorksCited :citations="citations"></WorksCited>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                elements: [{
                        type: "img",
                        content: {
                            src: "../images/Classical_Computer_.png"
                        }
                    },
                    {
                        type: "text",
                        content: "Qubits are the fundamental building blocks of quantum computers.  To understand qubits and how superconductivity allows us to develop qubits that are useful for computation, we first need to understand the classical bit, which is what makes up the normal computers we use every day.  A bit is the smallest unit of information stored in a computer, and it takes on the value of either 0 or 1.   Usually, 1 is represented by flowing current through a junction, while a 0 is represented by no current flowing through a junction.  A computer uses millions of these bits, each storing a value of either 0 or 1, to encode extremely complex information.  It also performs operations on these bits, thus changing their values and the output provided by the computer."
                    },
                    {
                        type: "question",
                        content: {
                            question: "What is the basic unit of information of a quantum computer?",
                            answers: {
                                answers: ["Byte", "Classical Bit", "Quantum Units", "Qubit"],
                                correct: 3,
                                explanation: "Qubits (or Quantum Bits) are the fundamental building blocks of quantum computers."
                            }
                        }
                    },
                    {
                        type: "img",
                        content: {
                            src: "../images/SUPA.png",
                            alt: "a cute supercomputer drawing"
                        }
                    },
                    {
                        type: "text",
                        content: "Qubits are similar to classical bits in that, when they are measured, they return a value of either 0 or 1.  However, unlike classical bits, they harness the power of quantum mechanics.  Quantum mechanics says that, on very small scales, objects can exist in a superposition of multiple states, rather than in one explicit state.  For example, if your computer is sitting on your desk, there is no uncertainty regarding its location.  It is on your desk, and nowhere else.  An electron, on the other hand, is small enough that quantum effects dominate.  An electron can actually exist in multiple locations at once, and rather than describing its position as a single location, you use a probability distribution which governs where that electron is most likely to be located."
                    },
                    {
                        type: "question",
                        content: {
                            question: "Quantum Mechanics says that an object can exist in...",
                            answers: {
                                answers: ["One singular state", "Dual States (Only two states)", "Superposition (Multiple states)", "Quarternary States (Only four states)"],
                                correct: 2,
                                explanation: "According to Quantum Mechanics, an object can exist on a superposition of multiple states, this happens in a very small scale."
                            }
                        }
                    },
                    {
                        type: "text",
                        content: "Similarly, before measurement, qubits can exist in a superposition of the states |0> and |1>, unlike classical bits, which can only exist in the state  |0> or  |1>, but never both.  For example, the state of a qubit might be written as <br> α |0> + β |1> <br> Here α and β are related to the probability that, when the qubit is measured, it will be found in the state |0>  or  |1>, respectively.  This unique property of qubits gives a single bit more flexibility, so theoretically a quantum computer could perform more computations than a regular computer with the same number of bits.  The first step in developing a qubit is understanding how the binary nature of a classical bit can be replicated in a quantum system."
                    },
                    {
                        type: "question",
                        content: {
                            question: "In the following statement:   α |0> + β |1>\nthe variables α and β represent...",
                            answers: {
                                answers: ["The probability of each state", "The classical bits", "the qubit", "The number of qubits measured by each state."],
                                correct: 0,
                                explanation: "In ket notation, the prefix of each state, i.e. |0> or |1> represents its probability."
                            }
                        }
                    }
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