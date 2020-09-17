import React from 'react';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import { Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root:{
    height:'100px',
    alignSelf: 'flex-start',
  },
  message:{
    marginTop: '-75px',
  }
})

export default function CustomerChatBubble(props) {
  const {messages} = props
  const classes = useStyle();

  return(
    <div>
      {messages.map((message) => (
        <div>
          <Typography variant='h5'>
            {message}
          </Typography>
          <ChatBubbleOutlineIcon className={classes.root}>
          </ChatBubbleOutlineIcon>
          <br/>
        </div>

      ))}
    </div>
  )


}
