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
        </div>
      )
    }

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
})

export default withRouter(
  connect(mapStateToProps)(MenuButtons)
)
