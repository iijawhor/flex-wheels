import React from "react";
import "./CustomDatePickerComponent.css";
import Container from "../Container/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function CustomDatePickerComponent({
  date,
  setDate,
  placeholder,
  label = "select date",
  className
}) {
  return (
    <Container className={`${className} customDatePickerComponent`}>
      {label && <span className="label">{label}</span>}
      <DatePicker
        selected={date}
        value={date}
        onChange={(date) => setDate(date)}
        placeholderText={placeholder}
        className="datePicker"
        showTimeSelect
        timeIntervals={60}
        dateFormat="MMM d, yyyy h:mm aa"
        popperClassName="custom-popper"
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: "viewport"
          }
        }}
      />
    </Container>
  );
}

export default CustomDatePickerComponent;
