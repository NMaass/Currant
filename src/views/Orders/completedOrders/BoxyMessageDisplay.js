import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: '2px',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    minWidth: 150,
    minHeight: 100,
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
  }
}));


export function BoxyMessageDisplay(props) {
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
    </Card>
  )
}
