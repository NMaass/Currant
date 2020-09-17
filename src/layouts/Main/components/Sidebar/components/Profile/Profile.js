import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    minHeight: 'fit-content',
    minWidth: '100%',
    margin: theme.spacing(2),
  },
  avatar: {
    width: 150,
    height: 150
  },
  icon:{
    display: 'inline-block',
    verticalAlign: 'middle',
  }

}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    avatar: '/images/avatars/avatar_11.png',
    bio: '"I\'m Cici, your account manager and I\'m here to help!"'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
        <Typography
          align="left"
          variant="h6"
        >
          <Avatar
            alt="Person"
            className={classes.avatar}
            component={RouterLink}
            src={user.avatar}
            to="/settings"
            variant="circle"
          >

          </Avatar>
          {user.bio} <br/>
          <EmailRoundedIcon className={classes.icon}/> Cici@ordercurrant.com
          <br/>
          <PhoneRoundedIcon className={classes.icon}/> (800) 123-456-789
        </Typography>
      </div>
    </div>

  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
