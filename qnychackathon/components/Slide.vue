<template>
    <div id="card" class="card" :style="styles">
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
    </div>
</template>

<style>
.card{
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  height: 400px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  background-color: antiquewhite;
  transition: 400ms;
}
</style>

<script>
export default {
    props: {
        title: { required: true, type: String },
        subtitle: { required: false, type: String },
        styles: {required: false, type: Object}
    }
}
</script>