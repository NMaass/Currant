import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: '10px',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    minWidth: 200,
    maxHeight: 50,
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    marginLeft: spacing(21),
    marginTop: spacing(-8),
    height: 0,
    color: 'green',
    borderRadius: spacing(2),
    position: 'absolute',
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
}));

export function TextMessageDisplay(props) {
  const styles = useStyles();
  const {message} = props;
  return(
    <Card className={styles.root}>
      <CardContent>
        <Typography
          style={{minWidth: '100%'}}
          variant={'body1'}
        >
          {message}
        </Typography>
      </CardContent>
      <CardContent className={styles.media}>
        <CheckCircleIcon  />
      </CardContent>

    </Card>
  )
}
