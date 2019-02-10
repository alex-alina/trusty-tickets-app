import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    minHeight: 470,
    display: 'flex',
    width: 340,
    margin: 20,
    flexDirection: 'column',
  },
  media: {
    paddingTop: '56.25%', // 16:9
    height: 120,
  },
  cardContent: {
    flexGrow: 1,
  },
});

function EventsList(props) {
  const { classes } = props;
  const events = props.events;
  return (

    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={40}>
        {events.map(event => (
          <Card key={event.id} className={classes.card}>
            <CardActionArea>
              <Link to={`/events/${event.id}`}>
                <CardMedia
                  className={classes.media}
                  image={event.picture}
                  title="Contemplative Reptile"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {event.name}
                </Typography>
                <Typography variant="body1" component="p">
                  {event.description}
                </Typography>
                <br />
                <Typography variant="subtitle2" component="p">
                  Starts: {event.startDate}
                </Typography>
                <Typography variant="subtitle2" component="p">
                  Ends: {event.endDate}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" size="small" color="primary">
                <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
                  Event Details
              </Link>
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
EventsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventsList);



