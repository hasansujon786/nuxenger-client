export const formatTextMixin = {
  computed: {
    mixShortentText() {
      return (text = '.', length) => {
        return text.substr(0, length) + '...'
      }
    }
  }
}
