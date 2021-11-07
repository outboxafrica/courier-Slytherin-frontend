import React, { useEffect, useState } from "react";
import "../Styles/pages/AdminPage.css";
const AdminPage = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div className="admin-page">
      <div className="ordersSect">
        <div className="singleOrder">
          <div className="userId">1</div>
          <div className="orderDate">2020-03-02T00:00:02.000Z</div>
          <div className="orderDate"></div>
        </div>
      </div>
      <div className="usersSect">
        <div className="single-user">
          <div className="userId">1</div>
          <div className="userName">kolynz</div>
          <div className="userEmail">kolynz@gmail.com</div>
          <div className="userPhone">0784330349</div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
