<template>
    <div>
        <list-select :list="options">
        </list-select>
    </div>
</template>
<script>
import { ListSelect } from '../lib'

export default {
  data () {
    return {
      options: [
                { value: 'a', text: 'option text' },
                { value: 'b', text: 'option text' },
                { value: 'c', text: 'option text' },
                { value: 'd', text: 'option text' },
                { value: 'e', text: 'option text' },
                { value: 'f', text: 'option text' },
                { value: 'g', text: 'option text' },
                { value: 'h', text: 'option text' },
                { value: 'i', text: 'option text' },
                { value: 'j', text: 'option text' },
                { value: 'k', text: 'option text' },
                { value: 'l', text: 'option text' },
                { value: 'm', text: 'option text' },
                { value: 'n', text: 'option text' },
                { value: 'o', text: 'option text' },
                { value: 'p', text: 'option text' },
                { value: 'q', text: 'option text' },
                { value: 'r', text: 'option text' },
                { value: 's', text: 'option text' },
                { value: 't', text: 'option text' },
                { value: 'u', text: 'option text' },
                { value: 'v', text: 'option text' },
                { value: 'w', text: 'option text' }
      ]
    }
  },
  components: {
    ListSelect
  }
}
</script>
<style>
</style>
