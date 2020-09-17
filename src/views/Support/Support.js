import React from 'react';
import Profile from '../../layouts/Main/components/Sidebar/components/Profile';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  faqs: {
    width: 350,
    height: 75,
    margin: theme.spacing(2),
  },
  container:{
    margin: theme.spacing(2),
  }
}))

export default function Support() {

  const classes = useStyles();

  return(
    <div>
      <Card
        className={classes.container}
      >
        <Profile/>
      </Card>
      <Button
        className={classes.faqs}
        variant="contained"
        color="primary"
        size="large"
      >
        Go to FAQs
      </Button>
    </div>
  )
}
