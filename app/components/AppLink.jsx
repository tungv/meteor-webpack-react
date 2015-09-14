/* global FlowRouter */
import BaseComponent from './BaseComponent'

export default class AppLink extends BaseComponent {
  constructor(props) {
    super(props)
  }
  render() {
    //const { path, params, queryParams } = this.props
    //const href = FlowRouter.path(path, params, queryParams)
    const href = '#'
    return <a href={href} className="applink--internal">{ this.props.children }</a>
  }
}
