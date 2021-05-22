class Documentation {
  /**
   * @param {Object} options
   * @param {String} options.name
   * @param {String} options.description
   * @param {String} options.link
   * @param {String} [options.searchLink]
   * @param {String} [options.icon]
   */
  constructor({ name, description, link, searchLink, icon }) {
    if (!name) throw new Error('"name" field is required')
    if (!description) throw new Error('"description" field is required')
    if (!link) throw new Error('"link" field is required')
    this.name = name
    this.description = description
    this.link = link
    this.searchLink = searchLink
    this.icon = icon
  }

  /**
   *
   * @param {string} query
   *
   * @returns {string}
   */
  search(query) {
    if (!this.searchLink) return this.link

    return `${this.searchLink}${encodeURIComponent(query)}`
  }

  toString() {
    return `${this.name} ${this.description} ${this.link}`
  }
}

module.exports = Documentation
