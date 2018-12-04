import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
import MenuButtons from '../menu/MenuButtons';
// import { Redirect } from 'react-router-dom'

export default class EventsListContainer extends PureComponent {


  render() {
   

    return (
      <div>
        <h1>Events</h1>

        <MenuButtons />
      </div>
    )
  }
}

// const mapStateToProps = function (state) {
//   return {
//     signup: state.signup
//   }
// }

// export default connect(mapStateToProps)(EventsListContainer)
