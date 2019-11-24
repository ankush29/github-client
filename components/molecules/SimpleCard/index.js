import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  Card, CardContent, Typography, CardActions, Button,
} from 'components';

const styles = {
  card: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const SimpleCard = (props) => {
  const {
    classes, title, description, url,
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h3">
          {title}
        </Typography>
        {description && (
          <Typography className={classes.pos} color="textSecondary">
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button target="_blank" href={url} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

SimpleCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
};

SimpleCard.defaultProps = {
  description: 'No description',
  url: null,
};

export default withStyles(styles)(SimpleCard);
