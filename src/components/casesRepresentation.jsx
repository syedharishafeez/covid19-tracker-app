import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default function CasesRepresentation(props) {
  let { covidDetails, loading, selectEmptyStyle, titleStyle } = props;
  return (
    <Grid container spacing={5} className={selectEmptyStyle}>
      <Grid item xs={11}>
        <Paper
          style={{
            paddingTop: "20px",
            height: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography align="center" variant="h4" className={titleStyle}>
            Active
          </Typography>
          <Typography
            style={{ color: "blue" }}
            align="center"
            variant="h2"
            className={titleStyle}
          >
            {loading
              ? "Loading ..."
              : Object.keys(covidDetails).length > 0
              ? covidDetails?.total_cases -
                (covidDetails?.total_deaths + covidDetails?.total_recovered)
              : "No Data Found"}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={11}>
        <Paper
          style={{
            paddingTop: "20px",
            height: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            align="center"
            style={{ flex: 1 }}
            variant="h4"
            className={titleStyle}
          >
            Recovered
          </Typography>
          <Typography
            style={{ color: "green" }}
            align="center"
            variant="h2"
            className={titleStyle}
          >
            {loading
              ? "Loading ..."
              : Object.keys(covidDetails).length > 0
              ? covidDetails?.total_recovered
              : "No Data Found"}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={11}>
        <Paper
          style={{
            paddingTop: "20px",
            height: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            align="center"
            style={{ flex: 1 }}
            variant="h4"
            className={titleStyle}
          >
            Deaths
          </Typography>
          <Typography
            style={{ color: "red" }}
            align="center"
            variant="h2"
            className={titleStyle}
          >
            {loading
              ? "Loading ..."
              : Object.keys(covidDetails).length > 0
              ? covidDetails?.total_deaths
              : "No Data Found"}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
