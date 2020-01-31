import React, { Fragment, useState } from "react";
import { TimePicker } from "@material-ui/pickers";

function BasicTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <TimePicker
        autoOk
        label="12 hours"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <TimePicker
        clearable
        ampm={false}
        label="24 hours"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <TimePicker
        showTodayButton
        todayLabel="now"
        label="Step = 15"
        value={selectedDate}
        minutesStep={15}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default BasicTimePicker;
