<template>
    <LecturePage 
        title="Superconductors"
        :text="ptext"
        imgsrc ="../images/qubit.png"
        imgalt="qubit">
    </LecturePage>
</template>

<script>
    export default{
        data() {
            return {
                ptext: ["Different materials are often classified by their conductivity, a measure of how easily electrons can pass through a material when subjected to an electric field. Conductors are materials that require only a small amount of energy for an electron to be stripped from its atom, in what is known as the valence band, and flow freely through the material, in what is known as the conductance band.", "In most conductors, electrons in the conductance bands experience a certain amount of “friction”, which provides some resistance to the flow of current and keeps the material from being infinitely conductive.  However, at sufficiently low temperatures, some materials become infinitely conductive superconductors, where the electrons exhibit no resistance to their flow.  This occurs because electrons exhibit a weak attraction to one another that bind them together in Cooper Pairs, which do not experience resistance when flowing through a material, unlike unpaired electrons.", "The behavior of all the Cooper Pairs in a superconductor effectively combines into a single wave function spanning the entire material.  This wavefunction is quantum mechanical in nature, and thus has discrete energy levels like an electron in the shell of an atom.  However, instead of describing just a single electron, it describes the flow of many electrons, making it a quantum mechanical system that is possible to construct and manipulate on a larger scale."]
            }
        }
    }
</script>