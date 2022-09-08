<template>
<div>
 <h2>Well Done!</h2>
</div>
 <p>You have finished the card sort task.</p>
  <div class = "btn">
    <button class='button' @click='showresults()'>RESULT</button>
  </div>
</template>
<script src = "@/script/ExportData.js">
</script>
<style>
.button {
  background-color: black;
  font-size: 20px;
  color: white;
  border-radius: 6px;
  transition-duration: 0.4s;
  padding: 15px 32px;
  text-align: center;
  }

.button:hover {
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 6px;
  }
.btn{
  position: relative;
  top: 20px;
}
</style>
