import BaseComponent from 'app/components/BaseComponent'
import { Component } from 'react'
import AppLink from 'app/components/AppLink'

export default class Layout extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <header>
          <AppLink path={"home"}>
            <h1>Smart ETL</h1>
          </AppLink>
        </header>
        <aside>
          <nav>
            <ul>
              <li><AppLink path={"hello"} params={{name: 'Meteor'}}>hello Meteor</AppLink></li>
              <li><AppLink path={"hello"} params={{name: 'React'}}>hello React</AppLink></li>
            </ul>
          </nav>
        </aside>
        <section id="main">
          { this.props.content }
        </section>
        <footer>
          Footer
        </footer>
      </div>

    )
  }
}
