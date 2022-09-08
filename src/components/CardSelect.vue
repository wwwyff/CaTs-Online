<template>
  <div>
   <h2>{{ msg }}</h2>
  </div>
  <div class="boxshadow" :style="{background:color01}" v-for= "content in cards" v-bind:key= "content">
    <div class="textback">
    <label class="container" @click='selecttime(content)'>
    <div class="text1">{{content}}</div>
    </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSelect',
  props: {
    msg: String,
    content: String,
    cards: Array,
    color01: String,
    currentPage: Number,
    title: Number
  },
  methods: {
    selecttime (c) {
      this.$router.push({
        path: '/timeline',
        query: { content: c, title: this.msg, dataShow: this.cards, currentPage: this.currentPage, titleNum: this.title }
      })
      console.log('page')
      console.log(this.currentPage)
    }
  }
}
</script>

<style>
.boxshadow {
  margin-top: 5%;
  margin-left: 3%;
  margin-right:3%;
  position:relative;
  -moz-box-shadow:1px 2px 4px rgba(0,0,0,0.5);
  -webkit-box-shadow:1px 2px 4px rgba(0,0,0,.5);
  box-shadow:1px 2px 4px rgba(0,0,0,.5);
  padding:5%;
  background:#E14725;
  height:250px;

}

.textback{
  position: absolute;
  top: 10%;
  left: 5%;
  height: 80%;
  width: 90%;
  background-color: white;
}
.container {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: white;
  text-align:center;
  padding-top: 2px;
}

.container input {
  position: absolute;
  opacity: 0.5;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark{
  position: absolute;
  top: 80%;
  left: 45%;
  height: 40px;
  width: 40px;
  background-color: #eee;
}
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
.container input:checked ~ .checkmark {
  background-color: black;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.textback input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  left: 25%;
  bottom: 20%;
  width: 35%;
  height: 70%;
  border: solid white;
  border-width: 0 5px 5px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.text1{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
}

</style>
