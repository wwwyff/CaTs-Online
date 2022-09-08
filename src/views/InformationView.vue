<template>
<div id = 'info'>
<InformationSheet  @setdata="sendValue" :msg="msg" :answer="answer">
</InformationSheet>
</div>
<div class="btn">
  <button class='button' @click='submit()'>SUBMIT</button>
</div>
</template>

<script src = "@/script/InformationSheet.js"></script>
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
  top: 60px;
}
</style>
