

import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function DatePicker({ label, handleInput, date }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          style={{ backgroundColor: "#fff", padding: "10px" }}
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          className="date-picker-inline"
          label={label}
          disabled={true}
          value={date}
          onChange={e => handleInput(e, label)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
