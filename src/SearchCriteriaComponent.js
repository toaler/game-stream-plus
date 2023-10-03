import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const FormComponent = ({handleSubmit}) => {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    // Define state for form inputs

    const handleStartChange = (date) => {
        setStart(date);
    };

    const handleEndChange = (date) => {
        setEnd(date);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(start, end);
    };


    return (
        <form onSubmit={handleFormSubmit}>


            <DatePicker
                selected={start}
                onChange={handleStartChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
            />
            <DatePicker
                selected={end}
                onChange={handleEndChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;