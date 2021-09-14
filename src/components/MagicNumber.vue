<template>
  <h2>小游戏 - 魔法数字</h2>
  <div class="container">
    <p v-show="data.level===-1">游戏开始时，请在【0~127】中随意挑选一个数字！</p>
    <p>如果以下排列中有你想象的数字，就点击【是】，反之点击【否】</p>
  </div>
  <div class="container">
    <span v-for="v in data.showList" v-bind:key="v.id" class="magic-node"> {{v}} </span>
  </div>
  <br>
  <div class="container">
    <p v-show="false">{{data.ansList}}</p>
    <p v-show="data.level>=7">盲猜你选择的数字是 - <span id="bigger">{{bitToNum(data.ansList)}}</span></p>
    <button v-show="data.level===-1" @click="init">开始游戏！</button>
    <button v-show="data.level>=0 && data.level<7" @click="choose(true)">是</button>
    <button v-show="data.level>=0 && data.level<7" @click="choose(false)">否</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "MagicNumber.vue",
  setup() {
    let data = reactive({
      level: -1,
      map: [],
      showList: [],
      ansList: [],
    });

    function makeShow() {
      data.showList.length = 0;
      for (let i=0; i<128; ++i) {
        if (numToBit(i)[data.level] === 1) {
          data.showList.push(i);
        }
      }
    }

    function choose(flag) {
      data.level += 1;
      data.ansList.push(flag);
      makeShow();
    }

    function numToBit(num) {
      let arr = [];
      while (num > 0) {
        arr.push(num % 2 === 1 ? 1 : 0);
        num = Math.floor(num / 2);
      }
      while (arr.length < 7) { arr.push(0); }
      return arr.reverse();
    }

    function bitToNum(bit) {
      let val = 0;
      for (let i in bit) {
        val = val * 2 + bit[i];
      }
      return val;
    }

    function init() {
      data.level = 0;
      /*
      for (let i=0; i<128; ++i) {
        console.log(i);
        console.log(numToBit(i));
      }
      */
      makeShow();
    }

    return {
      data,

      choose,
      numToBit,
      bitToNum,
      init
    };
  }
}
</script>

<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h2 {
  text-align: center;
  font-size: 50px;
}
p {
  font-size: 24px;
}
button {
  font-family: Consolas, sans-serif;
  font-size: 30px;
  margin: 0px 50px;
  padding: 0px 20px;
}
.container {
  display: block;
  overflow: hidden;
  text-align: center;
  zoom: 1;
}
.magic-node {
  font-size: 30px;
  width: 100px;
  height: 40px;
  margin: 10px 20px;
  float: left;
  text-align: center;
  box-sizing: border-box;
  border: 4px solid #ccc;
}

#bigger {
  font-size: 50px;
  font-weight: bold;
}
</style>