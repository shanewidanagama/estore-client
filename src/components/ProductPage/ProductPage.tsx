import { Box, Button, Chip, Container, Grid } from "@mui/material";
import "./ProductPage.css";
import React from "react";
import { Link } from "react-router-dom";
import RadioChip from "../utils/RadioChip/RadioChip";

export default function ProductPage() {
  // container root
  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={{ xs: 3 }} sx={{ display: "flex" }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58928cb8-74c0-4ad3-882a-4bfa65bab908/luka-2-trick-shot-basketball-shoes-W1GZ1g.png"
                  className="productImage"
                ></img>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="h1"
                sx={{ p: "0.5rem", fontSize: "3rem", fontWeight: "bold" }}
              >
                Luka 2 'Trick Shot'
              </Box>
              <Box component="h2" sx={{ p: "0.5rem", fontWeight: "bold" }}>
                $170
              </Box>
              <Box component="h6" sx={{ p: "0.5rem", fontWeight: "bold" }}>
                Select Size
              </Box>
              <RadioChip />
              <Box component="p" sx={{ p: "0.5rem" }}>
                Trick or treat? Luka's shots are often a bit of both, and this
                special edition Luka 2 celebrates those otherworldly buckets.
                Whether you're playing HORSE or working on your lay-up package,
                this performance-ready pair is designed to support your skills,
                with an emphasis on step-backs, side-steps and quick-stop
                action.
              </Box>
              <Link to={"/checkout"}>
                <Button
                  variant="contained"
                  size="large"
                  color="inherit"
                  sx={{ m: "0.5rem" }}
                >
                  Buy Now
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
