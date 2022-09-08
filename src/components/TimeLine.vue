<template>
<label class="container" v-for= "timeline in timegroup" v-bind:key= "timeline">
  <div class="text1"> {{timeline}} </div>
  <input type="checkbox" :value = "timeline" v-model="checkedtime" @change="getdata()">{{timeline}}
  <span class="checkmark"></span>
</label>
</template>

<script>
export default {
  name: 'TimeLine',
  props: {
    msg: String,
    timeline: String,
    timegroup: Array
  },
  data () {
    return {
      checkedtime: []
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    getdata () {
      this.$emit('setdata', this.checkedtime)
      console.log(this.checkedtime)
    }
  }
}
</script>

<style scoped>
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  height: 40px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: white;
  text-align:center;
  padding-top: 2px;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0.5;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 8px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: white;
  border-style:solid;
  border-width:2px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
  top: 1px;
  width: 7px;
  height: 14px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.text1{
  position:absolute;
  top:50%;
  left:20%;
  width: 80%;
  height: 80%;
  transform:translateY(-50%);
  background:#F5F5F5;
  border-width:2px;
  border-radius:10px;
}
</style>
