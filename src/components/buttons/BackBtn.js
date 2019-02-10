import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import './BackBtn.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    
  },
});

function BackBtn(props) {
  const { linkTo, classes } = props;

  return (
    <div>
      <Button variant="contained" color="primary" href={linkTo}  size="small" className={classes.button} >
        Back
      </Button>
    </div>
  )
}

BackBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackBtn);
