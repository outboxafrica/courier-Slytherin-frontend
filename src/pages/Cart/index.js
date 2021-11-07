import React, { useContext, useState } from 'react'
import {
    Grid,
    Typography,
    Button,
    Box,
    MenuItem
} from '@mui/material';

// Custom components
import Cardsm from '../../components/Cardsm';

import { AppContext, cart } from '../../Contexts/AppContext'

let total = 0;
const Cart = () => {

    const { isLoaded, products, cart } = useContext(AppContext)
 
    return (
      <Grid container style={{ padding: "20px 10%" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          lx={12}
          style={{ padding: "30px 0px" }}
          align="center"
        >
          <Typography
            variant="h3"
            style={{
              color: "#8a8a8a",
              borderBottom: "1px #e5e5e5 solid",
              paddingBottom: "30px",
            }}
          >
            My Cart
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ padding: "10px 5%" }}
          align="center"
        >
          {isLoaded ? (
            <Grid item xs={12} sm={12} md={6} lg={6} lx={6} style={{}}>
              {cart.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  lx={12}
                  style={{ paddingTop: "20px" }}
                  align="center"
                >
                  <Cardsm
                    products={products}
                    productID={product.productId}
                    prodQty={product.quantity}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              lx={12}
              style={{}}
              align="center"
            >
              <Typography variant="h5" style={{ color: "#EE9F8B" }}>
                Loading My Cart Products....
              </Typography>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            lx={6}
            style={{ padding: "33px 5%" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              lx={12}
              style={{
                width: "100%",
                padding: "20px 10%",
                border: "1px #C4C4C4 solid",
                borderRadius: "20px",
              }}
            >
              <Box style={{ height: "350px" }}>
                <div className="total">
                  {cart.length !== 0
                    && cart.forEach((i) => (total += i.price))
                    }
                  <h3>Total:{total}USD</h3>
                  {console.log(cart)}
                </div>
              </Box>
              <Button
                style={{
                  width: "90%",
                  padding: "5px 0px",
                  backgroundColor: "#323232",
                  color: "white",
                }}
              >
                Check Out
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default Cart
