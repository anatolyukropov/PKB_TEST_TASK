<template>
  <div>
    <v-btn class="nav-btn" v-for="component of components" @click="setComponent(component)" :key="component">{{component}}</v-btn>
    <component class="component" :is="currentComponent"></component>
  </div>
</template>

<script>
import Person from '../components/Person';
import Portfolio from '../components/Portfolio'
import Debt from '../components/Debt'
import Payment from '../components/Payment'
import Calendar from '../components/Calendar'

export default {
  components: {
    Person,
    Portfolio,
    Debt,
    Payment,
    Calendar
  },
  data : function () {
    return {
      currentComponent : '',
      components : ['Person', 'Portfolio', 'Debt', 'Payment', 'Calendar']
    }
  },
  methods : {
    setComponent :  function(component)  {
        this.currentComponent = component;
    }
  }
};
</script>

<style scoped>
    .component {
      width: 1000px;
      padding-top: 1%;
    }
  div {
    margin : auto;
    text-align: center;
    padding-top: 1%;
  }
  .nav-btn {
    margin-left: 20px;
  }
</style>