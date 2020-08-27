<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <alert mode="danger">
      First Alert
    </alert>
    <alert mode="primary">
      Second Alert
    </alert>
    <alert mode="secondary">
      Last Alert
    </alert>
    <alert mode="success">New Alert</alert>

    <div>
      <input type="text" v-model="lastName" placeholder="Your name">
      <p>
        welcome, {{lastName}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return{
      lastName: 'Berly'
    }
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
