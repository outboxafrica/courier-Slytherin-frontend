import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../Styles/pages/adminTable.css";
import { Grid, Typography, Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "phone",
    headerName: "phone",
    width: 200,
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "options",
    headerName: "Options",
    width: 250,
    renderCell: (params) => {
      return (
        <>
          <Button
            variant="outlined"
            color="success"
            size="small"
            style={{ margin: "5px" }}
          >
            View
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{ margin: "5px" }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            style={{ margin: "5px" }}
          >
            Delete
          </Button>
        </>
      );
    },
  },
];

export default function UserOrdersTable() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [userOrders, setUserOrders] = React.useState();

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setUserOrders(json))
      .finally((json) => setIsLoaded(true));
  }, [userOrders]);

  return (
    <div className="adminPg" style={{ marginTop: "100px" }}>
      <h1 className="adminHd">Admin Page</h1>
      <div className="adminTable">
        <Grid container>
          <div style={{ height: 400, width: "100%" }}>
            <Typography variant="h5">User Orders</Typography>
            {isLoaded ? (
              <DataGrid
                rows={userOrders.map(function (row) {
                  return {
                    id: row.id,
                    firstName: row.name.firstname,
                    lastName: row.name.lastname,
                    phone: row.phone,
                    email: row.email,
                    options: (
                      <Button variant="outlined" color="success" size="small">
                        View
                      </Button>
                    ),
                  };
                })}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </Grid>
        {/* <div className="right">
          <div style={{ height: 400, width: 500 }}>
                <userOrdersGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
          </div> */}
      </div>
    </div>
  );
}
