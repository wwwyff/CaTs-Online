<template>
<div class = "timeline">
<div class="msg">
    <button class='backbutton' @click='back()'>Back</button>
    <h2>Please tick the time points that suits you.</h2>
</div>
<TimeLine @setdata="sendValue" :timegroup = "timegroup">
</TimeLine>
</div>
<div class="btn">
  <button class='button' @click='ok()'>OK</button>
</div>
</template>

<script src = "@/script/TimelineSelect.js"></script>
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
  top: 30px;
}
.msg{
    display:block;
}
.backbutton{
  float:left;
  font-size: 20px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 6px;
  margin: 2px 2px;
}
</style>
