<script>
import { TListSelect } from '../lib'

export default {
  render: function (createElement) {
    return createElement(TListSelect, {
      props: {
        options: this.options,
        hi: '333333333333333333333'
      }
    })
  },
  props: {
    list: {
      type: Array
    }
  },
  computed: {
    options () {
      return this.list.map(e => {
        console.log('*', e)
        return { value: e.value, text: e.text }
      })
    }
  },
  created () {
  }
}
</script>
<style>
</style>