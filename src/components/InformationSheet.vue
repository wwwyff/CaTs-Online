<template>
<div class="msg">
    <h2>{{ msg }}</h2>
</div>

<label class="container" v-for= "content in answer" v-bind:key= "content.id">{{ content }}
  <input type="radio" name="radio" @change = "getdata(content)">
  <span class="checkmark"></span>
</label>
</template>

<script>
export default {
  name: 'InformationSheet',
  props: {
    msg: String,
    answer: Array,
    content: String
  },
  methods: {
    getdata (c) {
      this.$emit('setdata', c)
      console.log(c)
    }
  }
}
</script>

<style scoped>
.msg{
  margin-left: 20px;
  margin-right: 20px;
}

.container {
  display: block;
  position: relative;
  top: 10px;
  height: 30px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #dcdbda;
  padding-top: 2px;
  border-radius: 6px;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 5px;
  left: 5px;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 5px;
  left: 5px;
  width: 10px;
  height:10px;
  border-radius: 50%;
  background: white;
}
</style>
