<template>
  <div>
    <h1>当前的和为：{{$store.state.sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value=" 2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increament">+</button>
      <button @click="decreament">-</button>
      <button @click="increamentOdd">为奇数再加</button>
      <button @click="increamentWait">等等再加</button>
  </div>
</template>

<script>
export default {
  name:'count',
  data(){
    return {
      sum:0,
      n:1
    }
  },
  methods:{
    increament(){
      // 通过this.dispatch的方式将动作jia传到actions中
      this.$store.dispatch('jia',this.n)
    },
    decreament(){
      this.$store.dispatch('jian',this.n)
    },
    increamentOdd(){
      // 取模二不等于0，就是奇数
      if(this.sum % 2){
        this.sum+=this.n
      }
    },
    increamentWait(){
      setTimeout(()=>{
        this.sum += this.n
      },500)
    }

  }
}
</script>

<style lang="less" scoped>
  button{
    margin-left:30px
  }
</style>
