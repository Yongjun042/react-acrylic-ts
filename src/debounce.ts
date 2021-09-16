function debounce(callback: any, wait: any, context: any = this) {
  let timeout: any = null
  let callbackArgs: any = null

  const later = () => callback.apply(context, callbackArgs)

  return function () {
    callbackArgs = arguments
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export default debounce;