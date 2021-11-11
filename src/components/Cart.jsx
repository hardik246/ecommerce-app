import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../actions/Index";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Homepage() {
  const cart = useSelector((state) => state.getReducer.cartList);
  console.log("cart");
  const dispatch = useDispatch();

  const quantityUp = (id, price) => {
    console.log("quantityUp");
    dispatch(actions.quantityUp({ id: id, price: price }));
  };

  const quantityDown = (id, price) => {
    console.log("quantityDown");
    dispatch(actions.quantityDown({ id: id, price: price }));
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container sx={{ py: 12 }} maxWidth="md">
          <Grid container spacing={4}>
            {cart.map((item, i) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "60%",
                      height: "60%",
                      marginLeft: "50px",
                    }}
                    image={item.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      ${item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => quantityDown(item.id, item.price)}
                    >
                      -
                    </Button>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item?.quantity}
                    </Typography>
                    <Button
                      size="small"
                      onClick={() => quantityUp(item.id, item.price)}
                    >
                      +
                    </Button>
                    <Button size="large">Remove Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
