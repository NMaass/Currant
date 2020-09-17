import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AppleTabs from './appleTabs';
import NewOrder from './newOrder';
import InProgressOrder from './inProgressOrder';
import CompletedOrder from './completedOrders/CompeltedOrders';
import NotFound from '../NotFound';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Grid from '@material-ui/core/Grid';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(customerContact, amount, orderID, date, name, items, vehicle) {
  return {
    status: 'Received',
    customerContact,
    messages: [
      'Inside',
      'Perfect! When you come inside, please click this link',
    ],
    name,
    vehicle: 'White VW CC',
    date: date,
    orderID: orderID,
    customerStatus: 'Not Arrived',
    items: [
      {  name: 'Crack Fries',
        price: 6.99,
        options:[

        ],
        additions: [
          'Extra Sauce', '1.99'
        ],
        subtractions: [

        ]
        ,
        notes: 'Can you cut the burger in half?',

      },
      {  name: 'Crazy Cheeseburger',
        price: 12.99,
        options:[
          'Pepper jack Cheese',
        ],
        additions: [
          'Jalapenos', '1.00',
          'Avocado', '1.99',
        ],
        subtractions: [
          'Red Onion',
        ]
        ,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  let currentFill = 'Green';
  switch (row.status) {
    case 'Received':
      currentFill = 'Red';
      break
    case 'In Progress':
      currentFill = 'Orange';
      break
    case 'Completed':
      currentFill = 'Green';
      break
    default:
      return 'Not found';
  }
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            onClick={() => setOpen(!open)}
            size="small"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">
          <FiberManualRecordIcon style={{fill:`${currentFill}`}}/>
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.orderID}</TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.customerContact}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          colSpan={6}
          style={{ paddingBottom: 0, paddingTop: 0 }}
        >
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <Box margin={1}>
              <Table
                aria-label="purchases"
                size="small"
              >
                <TableBody>
                  {(() => {
                    switch (row.status) {
                      case 'Received': return (<NewOrder
                        key={row.name}
                        row={row}
                        style={{ minWidth:'100%' }}
                      />);
                      case 'In Progress': return (<InProgressOrder
                        key={row.name}
                        row={row}
                        style={{ minWidth:'100%' }}
                      />);
                      case 'Completed':  return (<CompletedOrder
                        key={row.name}
                        row={row}
                        style={{ minWidth:'100%' }}
                      />);
                      default:      return (<NotFound/>);
                    }
                  })()}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    status: PropTypes.string.isRequired,
    customerStatus: PropTypes.string.isRequired,
    customerContact: PropTypes.number.isRequired,
    messages: PropTypes.array.isRequired,
    orderID: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    vehicle: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        options:  PropTypes.array.isRequired,
        additions:  PropTypes.array.isRequired,
        subtractions:  PropTypes.array.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('(800) 123-4567', 1, 1, '01/01/2021', 'John Doe', ),
  createData('(800) 123-4567', 2, 2, '01/01/2021', 'John Doe', 4.99),
  createData('(800) 123-4567', 6, 3, '01/01/2021', 'Jane Doe', 3.79),
  createData('(800) 123-4567', 3, 4, '01/01/2021', 'Jon Dough', 2.5),
  createData('(800) 123-4567', 6, 5, '01/01/2021', 'Ton to', 1.5),
];

export default function CollapsibleTable() {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('category');

  const orderStatus = ['Received', 'In Progress', 'Completed'] //this is to compare tabIndex to status for visibility

  let currentTab = 0;
  const eventHandler = data => currentTab = data;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  return (
    <div>
      <Grid
        alignContent={'flex-end'}
        container
        style={{
          minWidth: '100%',
        }}
      >
        <Grid item>
          <AppleTabs
            onChange={eventHandler}
          />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right" >Status</TableCell>
              <TableCell align="right">Order Placed Time</TableCell>
              <TableCell align="right">Order Number</TableCell>
              <TableCell align="right">Customer Name</TableCell>
              <TableCell align="right">Customer Contact</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              row.status === orderStatus[currentTab] || currentTab === 3 ? <Row
                key={row.name}
                row={row}
                visibility="visible"
              />: <Row
                key={row.name}
                row={row}
                visibility="hidden"
              />

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
