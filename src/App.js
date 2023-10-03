import logo from "./logo.svg";
import "./App.css";

import FormComponent from "./SearchCriteriaComponent";
import ScheduleSupplier from "./supplier/ScheduleSupplier";
import {useState} from "react";

function App() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [tableData, setTableData] = useState([]);
    const handleSubmit = (start, end) => {

        setFormSubmitted(true);
        // Format the start and end dates to YYYY-MM-DD
        const formattedStartDate = start ? start.toISOString().split('T')[0] : null;
        const formattedEndDate = end ? end.toISOString().split('T')[0] : null;


        console.log('Form submitted:', {formattedStartDate, formattedEndDate});

        const newRow = {formattedStartDate, formattedEndDate};
        // Update the tableData state with the new row
        setTableData([...tableData, newRow]);
        // TODO: Additional logic or actions based on the form data

        const url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${formattedStartDate}&endDate=${formattedEndDate}&expand=schedule.broadcasts&expand=schedule.linescore&expand=schedule.ticket`;
        fetch(url)
            .then(response => response.json())
            .then(nhlData => {
                const supplier = new ScheduleSupplier(nhlData);
                const s = supplier.get();
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <FormComponent handleSubmit={handleSubmit}/>


                {/* Display the table */}
                {formSubmitted && (
                    <table>
                        <thead>
                        <tr>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.formattedStartDate}</td>
                                <td>{row.formattedEndDate}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}


            </header>
        </div>
    );
}

export default App;
