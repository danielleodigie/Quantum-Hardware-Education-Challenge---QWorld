<template>
    <LecturePage 
        title="RC Circuits"
        :text="ptext"
        imgsrc ="../images/qubit.png"
        imgalt="qubit">
    </LecturePage>
</template>

<script>
    export default{
        data() {
            return {
                ptext: ["In order to effectively use a superconductor in order to create a qubit, the flow of electrons must be subject to a certain combination of forces that “confines” it, and thus forces it to occupy discrete energy levels.  One such combination of forces is the simple harmonic oscillator.  One example of a simple harmonic oscillator is a block attached to a spring.  When the block is far from its equilibrium position, the spring is stretched so it applies a large retarding force to the block, slowing it down.  When the block is close to its equilibrium position, the spring becomes relaxed and applies a smaller force to the block, allowing it to move more quickly.  The energy in the system oscillates between being stored in the movement of the block, when it is near its equilibrium position, to being stored in the stretch of the spring, when it is far from its equilibrium position.", "A similar phenomenon occurs in an LC circuit.  An LC circuit contains two major components.  The first is a capacitor, which is a device that stores charge using an electric field.  When connected to a circuit, thea charged capacitor will begin to discharge and electrons from the capacitor will begin to flow through the circuit, creating a current.  The second component is an inductor.  An inductor is a device that opposes the change of the flow of current through a circuit.  So, as the capacitor discharges and the current through the circuit increases, the inductor opposes this change by creating a voltage in the opposite direction and recharging the capacitor.  This back-and-forth motion is similar to that of a block attached to the spring.", "Additionally, if the LC circuit is constructed using a superconducting material rather than a regular conductor, the circuit will exhibit quantum mechanical behavior for the reasons explained in the previous section.  As a result, the circuit has discrete energy levels, rather than a continuous range of observable energies.  This means that an LC circuit of superconducting material has the potential to serve as a qubit!  However, one challenge with this approach is that the energy levels in a simple harmonic oscillator are equally spaced.  In the first section we discussed how a qubit must have only two possible states, |0> and |1>, while an LC circuit has an infinite number of possible states.  In order to use only the first two states, and interact with none of the others, we need a circuit with an anharmonic potential.", "In an anharmonic potential, the spacing between energy levels is uneven.  This means, if we use photons of energy that correspond to the energy difference between the first two levels, it will not interfere with any of the other energy levels.  This means we can pretend that the system only has two states, just like our theoretical qubit!  The easiest way to introduce anharmonic effects into the circuit is by replacing the normal inductor with a Josephson junction."]
            }
        }
    }
</script>