import React from "react";

const FormData = ({ fname, surname, email, age, favoriteColor }) => {
  const dataList = JSON.parse(localStorage.getItem("dataList") || "[]");

  return (
    <div
      style={{
        margin: "50px",
        backgroundColor: "#85929E",
        width: "500px",
        textAlign: "center",
        borderRadius: "10px",
        padding: "10px",
        color: "#eee",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>{fname}</th>
            <th>{surname}</th>
            <th>{email}</th>
            <th>{age}</th>
            <th>{favoriteColor}</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => (
            <tr key={index}>
              <td>{item.fnd}</td>
              <td>{item.lastName}</td>
              <td>{item.message}</td>
              <td>{item.ageValue}</td>
              <td>{item.favColor}</td>
              <td>{item.radioValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormData;
