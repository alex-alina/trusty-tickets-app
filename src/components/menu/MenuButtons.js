import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class MenuButtons extends PureComponent {
  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <button>
            <Link to={`/logout`}>
              Logout
            </Link>
          </button>
          <button>
            <Link to={`/events/add`}>
              Add Event
            </Link>
          </button>
        </div>
      )
    }
    
    // if (this.props.currentUser && this.props.currentEvent) {
    //   return (
    //     <div>
    //       <button>
    //         <Link to={`/logout`}>
    //           Logout
    //     </Link>
    //       </button>
    //       <button>
    //         <Link to={`/events/:id/tickets`}>
    //           Add Ticket
    //         </Link>
    //       </button>
    //     </div>
    //   )
    // }

    return (
      <div>
        <button>
          <Link to={`/signup`}>
            Signup
          </Link>
        </button>

        <button>
          <Link to={`/login`}>
            Login
          </Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
  // currentEvent: state.currentEvent
})

export default withRouter(
  connect(mapStateToProps)(MenuButtons)
)
