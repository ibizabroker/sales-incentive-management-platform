import React from 'react'
import AdminNavbar from './AdminNavbar'
import { parse } from 'papaparse'

export default function UploadsalesData() {
  const [highlighted, setHighlighted] = React.useState(false);
  const [contacts, setContacts] = React.useState([
    { email: "fake@gmail.com", name: "Fake" },
  ]);

  return (
    <div>
      <AdminNavbar />
      <h1 className="text-center">Import Sales Data</h1>
      <div
        className={`container text-center ${highlighted ? "border border-success" : "border border-info"}`}
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
              setContacts((existing) => [...existing, ...result.data]);
            });
        }}
      >
        Drop Your File Here
      </div>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <strong>{contact.name}</strong>: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}