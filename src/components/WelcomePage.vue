<template>
    <div>
    <h2>{{ msg }}</h2>
    </div>
    <p>Please click START button to start task.</p>
    <div class = "tran">
    <button class='button' @click='start()'>START</button>
    </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  props: {
    msg: String
  },
  methods: {
    start () {
      this.$router.push('/info')
    }
  }
}

</script>

<style scoped>

.button {
 position: relative;
  background: #ecd300;
  background: radial-gradient(hsl(200, 60%, 50%), hsl(200, 60%, 40%));
  font-size: 1.4rem;
  text-shadow: 0 -1px 0 #c3af07;
  color: white;
  border: 1px solid hsl(200, 60%, 20%);
  border-radius: 100%;
  height: 120px;
  width: 120px;
  z-index: 4;
  outline: none;

  box-shadow: inset 0 1px 0 hsl(200, 60%, 50%),
              0 2px 0 hsl(200, 60%, 20%),
              0 3px 0 hsl(200, 60%, 18%),
              0 4px 0 hsl(200, 60%, 16%),
              0 5px 0 hsl(200, 60%, 14%),
              0 6px 0 hsl(200, 60%, 12%),
              0 7px 0 hsl(200, 60%, 10%),
              0 8px 0 hsl(200, 60%, 8%),
              0 9px 0 hsl(200, 60%, 6%);
}

.button:active{
  top: 2px;
  box-shadow: inset 0 1px 0 hsl(200, 60%, 50%),
              0 2px 0 hsl(200, 60%, 16%),
              0 3px 0 hsl(200, 60%, 14%),
              0 4px 0 hsl(200, 60%, 12%),
              0 5px 0 hsl(200, 60%, 10%),
              0 6px 0 hsl(200, 60%, 8%),
              0 7px 0 hsl(200, 60%, 6%);
}

</style>
