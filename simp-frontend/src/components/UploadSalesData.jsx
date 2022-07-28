import React from 'react'
import AdminNavbar from './AdminNavbar'
import { parse } from 'papaparse'

export default function UploadsalesData() {
  const [highlighted, setHighlighted] = React.useState(false);
  const [salesDetails, setSalesDetails] = React.useState([]);
  const [showTable, setShowTable] = React.useState(false);

  return (
    <div>
      <AdminNavbar />
      <h1 className="text-center mt-4">Import Sales Data</h1>
      <div
        className={`container custom-container-upload-sales text-center ${highlighted ? "border border-success" : "border border-info"}`}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);

          Array.from(e.dataTransfer.files)
            .filter((file) => file.type === "text/csv")
            .forEach(async (file) => {
              const text = await file.text();
              const result = parse(text, { header: true });
              setSalesDetails((existing) => [...existing, ...result.data]);
              setShowTable(true);
            });
        }}
      >
        Drop Your CSV File Here
      </div>

      <div className='container mt-3 mb-2' >
        { showTable ?
          <div>  
          <h2 className="text-center mb-4"> Uploaded Sales Details </h2>
          <div className = "row">
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Month</th>
                        <th>Product Type</th>
                        <th>Product Id</th> 
                        <th>Product Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        salesDetails.map(
                            sales => 
                            <tr key = {sales.salesId}>
                            <td> {sales.userId} </td>   
                            <td> {sales.transactionMonth}</td>
                            <td> {sales.pType}</td>
                            <td> {sales.pId}</td>
                            <td> {sales.pName}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
          </div>
            <div className="d-grid gap-2 col-2 mx-auto">
              <button className = "btn btn-primary center" type ="submit">Upload Details To Backend</button>
            </div>
          </div>
        : null}
      </div>
    </div>
  );
}