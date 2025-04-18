import Grid from "@mui/material/Grid";
import { Header } from "../../components/Header";
import { Filters } from "../../components/Filters";
import { View } from "../../components/View";

export const Home = () => {
  return (
    <Grid container direction="column">
      <Header />
      <Grid container direction="row">
        <Filters />

        <View />
      </Grid>
    </Grid>
  );
};
