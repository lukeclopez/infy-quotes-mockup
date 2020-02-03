import React, {useState} from "react";
import API from "../utils/API";
import CustomerDetail from "./CustomerDetail"
import VehicleDetails from "./VehicleDetail";
import RecentTransactions from "./RecentTransactions";
import {Button} from "react-bootstrap";

const AutoQuote = () => {
    const [zip, setZip] = useState("");
    const [dlId, setDlId] = useState("");
    const [age, setAge] = useState("");
    const [model, setModel] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [year, setYear] = useState("");
    const [pdate, setPdate] = useState("");

    const idCounter = Math.floor(Math.random() * 10);
    const handleFormSubmit = e => {
      e.preventDefault();
      if(zip && dlId && age && model && manufacturer && year && pdate){
          API.postTransactions({
              id: idCounter,
              zip: zip,
              dlId: dlId,
              age: age,
              model: model,
              manufacturer: manufacturer,
              year: year,
              pdate: pdate
          })
              .then(res => console.log(res.data))
              .catch(err => console.log(err))
      }
    };

return (

    <div className="container" style={{marginTop: "60px"}}>
        <CustomerDetail zip={zip}
                        setZip={setZip}
                        dlId={dlId}
                        setDlId={setDlId}
                        age={age}
                        setAge={setAge}
        />
        <VehicleDetails
            model={model}
            setModel={setModel}
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            year={year}
            setYear={setYear}
            pdate={pdate}
            setPdate={setPdate}
        /><br/>
        <Button className="btn" onClick={handleFormSubmit}>Submit</Button>
        <RecentTransactions/>
    </div>
)
};

export default AutoQuote
