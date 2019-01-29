import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './AddEventBtn.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function AddEventBtn(props) {
  const { classes } = props;

  return (
    <div className="add-btn-container">
      <Button variant="contained" color="primary" href="/events-add" className={classes.button} fullWidth={true}>
        Add Event
    </Button>
    </div>
  )
}

AddEventBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddEventBtn);