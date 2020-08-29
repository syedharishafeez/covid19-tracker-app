import React from "react";
import AppNavBar from "./components/appNavBar";
import CountryCases from "./components/countryCases";
import WorldWideCases from "./components/worldWideCases";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Grid container>
        <CountryCases />
        <Grid></Grid>
        <WorldWideCases />
      </Grid>
    </div>
  );
}

export default App;
