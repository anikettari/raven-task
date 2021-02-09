import React from 'react';
import DatePicker from 'react-date-picker';

const DateComp=({value,onChange})=> {

    return (
        <div>
      <DatePicker
        onChange={onChange}
        value={value}
      />
    </div>
    )
}

export default DateComp
