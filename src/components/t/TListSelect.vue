<template>
<div>
    <input 
    :value='searchValue'
    @input="searchValue = $event.target.value"
    />
    <template v-for="(option,index) in showOptions">
        <div :key="index">
            {{option.value}}-{{option.text}}
        </div>
    </template>
 </div>
</template>
<script>
import { commonMixin } from '../lib/mixins'
export default {
  mixins: [commonMixin],
  data () {
    return {
      searchValue: ''
    }
  },
  watch: {

  },
  computed: {
    showOptions () {
      if (this.searchValue) {
        return this.options.filter((option) => {
          console.log('*')
          console.log(option.text)
          return this.filterPredicate(option.value, this.searchValue)
        })
      } else {
        console.log(this.searchValue)
        return this.options
      }
    }
  },
  methods: {

  },
  created () {
    console.log('--------t------------')
    console.log(this.options)
    console.log(this.hi)
  }
}
</script>
<style>
</style>