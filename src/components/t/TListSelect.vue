<template>
<div>

    <template v-for="(option,index) in showOptions">
        <div :key="index">
            {{option.text}}{{index}}
        </div>
    </template>
 </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number, Object, Boolean]
    },
    options: {
      type: [Array]
    }
  },
  watch: {

  },
  computed: {
    showOptions () {
      return this.options
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