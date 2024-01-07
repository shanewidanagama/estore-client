import { Box, Button, Chip, Container, Grid } from "@mui/material";
import "./ProductPage.css";
import React from "react";
import { Link } from "react-router-dom";

interface ChipData {
  key: number;
  label: string;
}

export default function ProductPage() {
  const [chipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "US 3.5" },
    { key: 1, label: "US 4" },
    { key: 2, label: "US 4.5" },
    { key: 3, label: "US 5" },
    { key: 4, label: "US 5.5" },
    { key: 4, label: "US 6" },
    { key: 5, label: "US 6.5" },
    { key: 6, label: "US 7" },
    { key: 7, label: "US 7.5" },
    { key: 8, label: "US 8" },
    { key: 9, label: "US 8.5" },
    { key: 10, label: "US 9" },
    { key: 11, label: "US 9.5" },
    { key: 12, label: "US 10" },
    { key: 13, label: "US 10.5" },
    { key: 14, label: "US 11" },
    { key: 15, label: "US 11.5" },
    { key: 16, label: "US 12" },
    { key: 17, label: "US 12.5" },
    { key: 18, label: "US 13" },
  ]);

  const handleClick = () => () => {
    console.info("A shoe size was selected.");
  };
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
                  marginBottom: "3rem",
                }}
              >
                <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58928cb8-74c0-4ad3-882a-4bfa65bab908/luka-2-trick-shot-basketball-shoes-W1GZ1g.png"
                  className="productImage"
                ></img>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="h1" sx={{ p: "0.5rem" }}>
                Luka 2 'Trick Shot'
              </Box>
              <Box component="h2" sx={{ p: "0.5rem" }}>
                $170
              </Box>
              <Box component="h6" sx={{ p: "0.5rem" }}>
                Select Size
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  listStyle: "none",
                  p: "0.5rem",
                  m: 0,
                }}
                component="ul"
              >
                {chipData.map((data) => {
                  let icon;

                  return (
                    <li key={data.key}>
                      <Chip
                        sx={{ margin: "0.1rem" }}
                        icon={icon}
                        label={data.label}
                        onClick={handleClick()}
                      />
                    </li>
                  );
                })}
              </Box>
              <Box component="p" sx={{ p: "0.5rem" }}>
                Trick or treat? Luka's shots are often a bit of both, and this
                special edition Luka 2 celebrates those otherworldly buckets.
                Whether you're playing HORSE or working on your lay-up package,
                this performance-ready pair is designed to support your skills,
                with an emphasis on step-backs, side-steps and quick-stop
                action.
              </Box>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                sx={{ m: "0.5rem" }}
              >
                <Link to={"/checkout"}>Buy Now</Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
