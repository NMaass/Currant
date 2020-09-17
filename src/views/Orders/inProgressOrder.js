import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles(({spacing}) => ({
  root: {
    margin: '5px',
    borderRadius: spacing(4), // 16px
    border: '3px',
    transition: '0.3s',
    position: 'relative',
    minWidth: 400,
    minHeight: 200,
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
  },
  media: {
    marginLeft: spacing(20),
    marginTop: spacing(-2),
  },
}))

export default function InProgressOrder(props) {
  const [state, setState] = React.useState(false)
  const { row } = props;
  const classes = useStyles();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const handleOrderReady = () => {
    row.status = 'Completed';
    forceUpdate();
  }

  const handleChange = (event) => {
    setState({...state,[event.target.name]: event.target.checked});
  }
  return(
    <div>
      <Grid
        container
        spacing={3}
      >
        <React.Fragment>
          {row.items.map((itemRow, i) => (
            <Grid item>
              <div
                className={classes.media}
                align={'right'}
              >
                <Checkbox
                  checkedIcon={<CheckCircleIcon/>}
                  icon={<CheckCircleOutlineIcon/>}
                  name={i}
                  onChange={handleChange}
                />
              </div>
              <Card
                className={classes.root}
                key={itemRow.name}

              >
                <Typography
                  align={'left'}
                  variant={'h3'}
                >
                  {itemRow.name}
                </Typography>

                <br/>
                <Typography
                  variant={'body1'}
                >
                  {itemRow.options}
                </Typography>
                <br/>
                {itemRow.subtractions.map((subs,i) => (
                  <Typography
                    key={i}
                    variant="body2"
                  >
                    <strong>No:</strong>{subs}
                  </Typography>
                ))}
                {itemRow.additions.map((adds,i) => {
                  if(i % 2) { return(
                    <Typography
                      color="primary"
                      variant="caption"
                    >
                +${adds}
                    </Typography>
                  )}
                  else {
                    return (
                      <Typography
                        key={i}
                        variant="body2"
                      >
                        <strong>Add:</strong>{adds}
                      </Typography>
                    )
                  }
                })}
                <br/>
                <Typography
                  variant={'body1'}
                >
                  <i>{itemRow.notes}</i>
                </Typography>
              </Card>
            </Grid>
          ))}
        </React.Fragment>
      </Grid>
      <Grid
        container
        justify="flex-end"
        spacing={2}
      >
        <Grid item>
          <Button
            color="primary"
            variant="outlined"
          >Print Receipt</Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={handleOrderReady}
          >Order Ready</Button>
        </Grid>
      </Grid>
    </div>
  )
}
