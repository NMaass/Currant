import React from 'react';
import {TextMessageDisplay } from './TextMessageDisplay';
import {MessageDisplay} from './GenericMessageDisplay';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import { BoxyMessageDisplay } from './BoxyMessageDisplay';
import CustomerChatBubble from './CustomerChatBubble';


const useStyle = makeStyles(({ spacing }) =>({
  root:{
    padding: spacing(3),
  },
  button:{
    borderRadius: spacing(2),
    padding: spacing(6),
  },
  card:{
    backgroundColor: '#ffffff',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    margin: '10px',
  },
}))


export default function CompletedOrders(props) {
  const {row} = props;
  const classes = useStyle();


  return(
    <div
      className={classes.root}
    >
      <Grid
        alignItems="flex-start"
        container
        spacing={3}
      >
        <Grid item>
          <TextMessageDisplay message="Order Ready"/>
        </Grid>
        <Grid item>
          <TextMessageDisplay message="Order Received"/>
        </Grid>
        <Grid item>
          <TextMessageDisplay message="Order Accepted"/>
        </Grid>
        <Grid
          item>
          <CustomerChatBubble messages={row.messages} />
        </Grid>
        <Grid
          item
          justify="flex-end"
        >
          <Typography variant="h5">
          Customer Order
            <BoxyMessageDisplay
              classes={classes.card}
              message={row.items.map((item) => (
                <Typography variant="body1">
                  {item.name}
                </Typography>
              ))}
            >
            </BoxyMessageDisplay>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container

      >
        <Grid item>
          <Typography variant={'h5'}>
            Customer Arrived
          </Typography>
          <MessageDisplay className={classes.card}  message={row.customerStatus ? row.customerStatus : 'N/A'}/>
        </Grid>
      </Grid>
      <Grid
        alignItems="flex-start"
        container
        justify="flex-end"
        spacing={3}
      >
        <Grid item
          alignContent="flex-start"
        >
          <Typography variant={'h5'}>
            Curbside Vehicle Info
          </Typography>
          <MessageDisplay className={classes.card}
            message={row.vehicle ? row.vehicle : 'N/A'}
          >
          </MessageDisplay>
        </Grid>
        <Grid item
          spacing={3}>
          <Button
            className={classes.button}
            color={'primary'}
            size={'small'}
            style={{
              alignSelf:'flex-end',
            }}
            variant={'outlined'}
          >
            Reprint receipt
          </Button>
          <br/>
          <br/>
          <Button
            color={'primary'}
            size={'large'}
            variant={'contained'}
          >
            Confirm Pick-up
          </Button>
        </Grid>
      </Grid>
    </div>
  )

}
