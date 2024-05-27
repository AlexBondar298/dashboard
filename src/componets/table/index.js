import React from "react";

const Table = ({ customerName, company, phoneNumber, email, country, status }) => {
  return (
    <tr>
      <td>{customerName}</td>
      <td>{company}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>
        <button className={status === "Active" ? "table__btn active" : "table__btn inactive"}> {status === "Active" ? `Active` : `Inactive`}</button>
      </td>
    </tr>
  );
};

export default Table;
