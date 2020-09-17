import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';

export default function NewOrder(props) {
  const { row } = props;

  const handleAccept = () => {
    row.status = 'In Progress'
  };

  return(
    row.items.map((itemRow) => (
      <TableBody >
        <TableRow key={itemRow.date}>
          <TableCell>
            {itemRow.name}
            <Typography
              variant="body2"
            >
              {itemRow.options}
            </Typography>
            {itemRow.subtractions.map((subs,i) => (
              <Typography
                key={i}
                variant="body2"
              >
                <strong>No:</strong>{subs}
              </Typography>
            ))}
            {itemRow.additions.map((adds,i) => {
              if(i % 2) {
                return(
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
            <Typography
              variant="body2"
            />
          </TableCell>
          <TableCell />
          <TableCell />
          <TableCell align="right">
            <Typography
              variant="h6"
            >
                Can't Fulfill<Checkbox />
            </Typography>
            {itemRow.price}</TableCell>
        </TableRow>
        <TableRow>
          <Button
            align="right"
            color="secondary"
            onClick={handleAccept}
          >
              Accept
          </Button>
          <Button
            align="right"
            color="primary"
          >
              Decline
          </Button>
        </TableRow>
      </TableBody>
    ))
  )
}

NewOrder.propTypes = {
  row: PropTypes.shape({
    status: PropTypes.string.isRequired,
    customerContact: PropTypes.number.isRequired,
    orderID: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
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
