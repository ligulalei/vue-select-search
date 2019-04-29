import { escapedRegExp } from '../utils'
export default {
  props: {
    value: {
      type: [String, Number, Object, Boolean]
    },
    options: {
      type: [Array]
    },
    filterPredicate: {
      type: Function,
      default: (text, inputText) => {
        return text.match(escapedRegExp(inputText))
      }
    }
  }
}
