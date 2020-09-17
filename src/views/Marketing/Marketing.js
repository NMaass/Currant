import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles({
  root:{
    width: '100%',
  },
})

export default function Marketing() {
  const classes = useStyles();
  return(
    <div className={classes.root}>

    </div>
  )
}
