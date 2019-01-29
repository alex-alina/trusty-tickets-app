import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBarContainer(props) {
  const { classes } = props;
  const { currentUser } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} href="/events" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Trusty Tickets
          </Typography>
          {currentUser ? <Button href="/logout" color="inherit">Logout</Button> :
            <div>
              <Button href="/signup" color="inherit">Signup</Button>
              <Button href="/login" color="inherit">Login</Button>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBarContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(withStyles(styles)(NavBarContainer));


