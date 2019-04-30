<template>
<div class='selectdropdown'>
    <input 
    :value='searchValue'
    @input="searchValue = $event.target.value"
    @focus="openOptions"
    />
    <div class="showOptionList"
         :style='optionStyle'
    >
    <template v-for="(option,index) in showOptions">
        <div class="option" 
              @click.stop="selectOption(option)"
              :key="index">
            {{option.value}}-{{option.text}}
        </div>
    </template>
    </div>
 </div>
</template>
<script>
import { commonMixin } from '../lib/mixins'
export default {
  mixins: [commonMixin],
  data () {
    return {
      searchValue: '',
      showOption: false
    }
  },
  watch: {

  },
  computed: {
    showOptions () {
      if (this.searchValue) {
        return this.options.filter((option) => {
          return this.filterPredicate(option.value, this.searchValue)
        })
      } else {
        return this.options
      }
    },
    optionStyle () {
      return {
        display: this.showOption ? 'block' : 'none'
      }
    }
  },
  methods: {
    openOptions () {
      this.showOption = true
    },
    hideOptions () {
      this.showOption = false
    },
    selectOption (option) {
      console.log('-----------')
      this.searchValue = option.value
      this.hideOptions()
    }
  },
  created () {
    console.log('--------t------------')
  }
}
</script>

<style scoped>
.selectdropdown{
  position: relative;
  width:300px;
  margin:0 auto;
}
.selectdropdown input{
  width:100%;
  padding:0;
  outline: none;
  height:30px;
  border: 1px solid #ccc;
}
.showOptionList{
  max-height:200px;
  height:auto;
  width:300px;
  overflow-y: auto;
  text-align:left;
  border:1px solid #eee;
}
.showOptionList .option{
  cursor: pointer;
  padding:10px;
}
.showOptionList .option:hover{
  background: rgba(0,0,0,0.1);
}
</style>