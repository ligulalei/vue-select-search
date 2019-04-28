<template>
    <div>
        <list-select :options="options">
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
                { value: 'b', text: 'option text' }
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