import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import CasesRepresentation from "./casesRepresentation";

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    margin: theme.spacing(2),
  },
  globalTitle: {
    margin: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function WorldWideCases() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [covidWorldDetail, setCovidWorldDetail] = useState({});

  useEffect(() => {
    (async () => {
      setLoading(true);
      let countryDetails = await fetch(
        `https://api.thevirustracker.com/free-api?global=stats`
      );
      let countryDetailsJSON = await countryDetails.json();
      console.log(countryDetailsJSON);
      setCovidWorldDetail(
        countryDetailsJSON.results ? countryDetailsJSON.results[0] : {}
      );
      setLoading(false);
    })();
  }, []);

  return (
    <Grid item xs={7}>
      <Paper style={{ backgroundColor: "black" }}>
        <Typography
          style={{ color: "white" }}
          align="center"
          variant="h2"
          className={classes.globalTitle}
        >
          Global Statistics
        </Typography>
        <CasesRepresentation
          covidDetails={covidWorldDetail}
          loading={loading}
          titleStyle={classes.title}
          selectEmptyStyle={classes.selectEmpty}
        />
      </Paper>
    </Grid>
  );
}
