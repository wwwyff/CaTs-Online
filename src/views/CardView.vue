<template>
<div class="card">
<CardSelect :color01='cl01' :msg="msg" :cards="dataShow" :currentPage="currentPage" :title="title">
</CardSelect>
</div>
<div class = "pages">
<input class ="pagebutton" type ="button" value="<<" @click="prePage()">
<span id = "pagenum" class ="page" v-for = " i in pageNum" v-bind:key="i.id" @click="page(i)" :style="{color:i === currentPage?'#4682B4':'#778087'}">{{ i }}</span>
<input class ="pagebutton" type ="button" value=">>" @click="nextPage()">
</div>
<div class="btn">
  <button class='button' :style="{display: currentPage === pageNum?'':'none'}" @click='next()'>NEXT</button>
  <button class='button' :style="{display: currentPage === pageNum && msg === 'Afterwards' ?'':'none'}" @click='finish()'>Finish</button>
</div>
</template>

<script src = "@/script/CardSelect.js">
</script>
<style>
.pagebutton{
  background-color: white;
  color: #778087;
  border: 2px solid #778087;
  border-radius: 2px;
  font-size: 16px;
  margin-left: 9px;
  margin-right: 9px;
}
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
.page{
cursor: pointer;
margin: 3px;
font-size: 20px;

}
.pages{
margin-top: 10px;
}
</style>
