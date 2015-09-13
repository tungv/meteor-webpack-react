Template.react.rendered = function () {
  const render = this.data.renderReact
  if (typeof render !== 'function') {
    console.warn("Trying to render an undefined component");
    return
  }
  render(this)
}
