<template>
  <div>
    <div class="alert alert-primary" :class="mode" role="alert">
      <slot></slot>
    </div>
    
  </div>

</template>

<script>
export default {
  name: "Alert",
  props:[
    'mode'
  ]

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}

.success{
  color: #004085;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}

.secondary {
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
}


.alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
}
</style>
