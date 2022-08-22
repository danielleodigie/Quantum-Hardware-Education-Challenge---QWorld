<template>
    <LecturePage 
        title="Josephson Junctions"
        :text="ptext"
        imgsrc ="../images/qubit.png"
        imgalt="qubit">
    </LecturePage>
</template>

<script>
    export default{
        data() {
            return {
                ptext: ["A Josephson junction is composed of a thin layer of insulating material sandwiched between two layers of superconductor.  Normally, no current can pass through an insulator because electrons in insulators are not free to move through the conductance band.  However, the quantum mechanical nature of the Cooper pairs in a superconducting material allows them to occasionally “tunnel” through the insulating material to the other side.", "Josephson junctions can replace normal inductors in a superconducting circuit.  Like normal inductors, Josephson junctions slow the transmission of current, counteracting the discharge of the capacitor.  However, unlike normal inductors, Josephson junctions have nonlinear inductance.  This translates to a slightly different potential function and energy levels that are unevenly spaced.  The uneven spacing allows us to access only the first two energy levels, satisfying the demand that a bit have only two possible values."]
            }
        }
    }
</script>