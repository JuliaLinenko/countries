class Http {
  get(url, options) {
    return fetch(url, {
      ...options,
      method: 'GET'
    })
  }
}

export default new Http()
