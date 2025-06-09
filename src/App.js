import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import MesotheliomaCard from "./components/MesotheliomaCard";
import ClaimForm from "./components/ClaimForm";
import FreeCaseReviewCard from "./components/FreeCaseReviewCard";

function App() {
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://t4.ftcdn.net/jpg/01/42/24/05/360_F_142240507_ym9QcB560bySzJiTEJ1IJy3auBMFETn2.jpg")',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        margin: 0,
        overflow: 'scroll',
        position: 'fixed',
        top: 0,
        left: 0,
        display:"flex",
        justifyContent:"center"
      }}
    >
      <Grid container py={2} spacing={2} sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Grid size={{ xs: 11, md: 4 }}>
          <Box mb={3}>
            {isSmallScreen ? <MesotheliomaCard /> : <FreeCaseReviewCard />}
          </Box>
          {isSmallScreen ? <FreeCaseReviewCard /> : <MesotheliomaCard />}
        </Grid>
        <Grid size={{ xs: 11, md: 4 }}>
          <ClaimForm />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
