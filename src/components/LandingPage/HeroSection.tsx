import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

export default function HeroSection() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "38rem",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3f7d68f9-59fa-4e8d-b0f1-dc87ebb683e4/luka-2-trick-shot-basketball-shoes-W1GZ1g.png)`,
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            alignItems: "center",
            padding: "3rem",
          }}
        >
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                paddingBottom: "1rem",
              }}
            >
              Luka 2 Trick Shot
            </Typography>
            <Typography
              variant="h6"
              sx={{
                paddingBottom: "2rem",
              }}
            >
              Trick or Treat?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "13rem", fontSize: "1rem" }}
            >
              BUY
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
