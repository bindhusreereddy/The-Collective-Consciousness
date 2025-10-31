import React, { useState, useEffect } from "react";
import {
  Line,
  Bar,
  Scatter,
  Doughnut,
  Radar,
  Pie,
  PolarArea,
} from "react-chartjs-2";
import "./Dashboard.css";
import Card from "./Card";
import Navbars from "./Navbar";
import CardPuzz from "./Cards_Dashboard/Card_DashBoard_Puzz";
import CardAcc from "./Card_Snakes/Card_Acc_Rate";
import CardHints from "./Card_Snakes/Card_Hints";
import CardStars from "./Card_Snakes/Card_Stars_growth";
import CardEngagement from "./Card_Snakes/Card_Engagement";
import { spacing } from "@material-ui/system";
import { height } from "@material-ui/system";
import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
  makeStyles,
  Grid,
} from "@material-ui/core";
import Reveal from "react-reveal/Reveal";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#dfddc7", //#eef3f2  #f4f7fa
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chart: {
    // height: "100%",
    // width: 700,
    // marginTop: 20,
    // marginLeft: 20,
    marginBottom: 50,
  },
  chart2: {
    // height: "100%",
    // width: 600,
    // marginTop: 20,
    // marginLeft: 80,
  },
  topcard: {
    marginTop: 80,
  },
});
function Userdata() {
  //fetching userdata
  const classes = useStyles();
  const [acc_data, set_acc_data] = useState([]);
  const [hints_data, set_hints_data] = useState([]);
  const [growth_data, set_growth_growth] = useState([]);
  const [curr_stars_data, set_curr_stars] = useState([]);
  const [rolls_data, set_rolls] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("/api/stairGame/getAccuracyRate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => {
          set_acc_data(json);
        });
    }
    fetchData();
  }, []);

  //data for acc_rate_chart
  let x = [];
  let y = [];

  acc_data.forEach((item) => {
    x.push(item.id);
    y.push(item.acc_rate);
  });

  const data_acc_rate = {
    labels: x,
    datasets: [
      {
        label: "ACCURACY RATE",
        data: y,
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 5,
      },
    ],
  };

  //StarGrowthRate
  useEffect(() => {
    async function fetchData() {
      fetch("/api/stairGame/getStarGrowthRate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => {
          set_growth_growth(json);
        });
    }
    fetchData();
  }, []);

  //data for state_growth_chart
  x = [];
  y = [];

  growth_data.forEach((item) => {
    x.push(item.id);
    y.push(item.star_growth);
  });

  const data_star_growth = {
    labels: x,
    datasets: [
      {
        label: "STAR GROWTH RATE",
        data: y,
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const options_star_growth = {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
      },
    },
  };
  //HintsData
  useEffect(() => {
    async function fetchData() {
      fetch("/api/stairGame/getHints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => {
          set_hints_data(json);
        });
    }
    fetchData();
  }, []);

  //data for state_hints_data
  x = [];
  y = [];

  hints_data.forEach((item) => {
    x.push(item.id);
    y.push(item.hints);
  });

  const data_hints = {
    labels: x,
    datasets: [
      {
        label: "HINTS TAKEN",
        data: y,
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  //Rolls Data
  useEffect(() => {
    async function fetchData() {
      fetch("/api/stairGame/getRolls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => {
          set_rolls(json);
        });
    }
    fetchData();
  }, []);

  //data for state_rolls_made
  // ];
  x = [];
  y = [];

  rolls_data.forEach((item) => {
    x.push(item.id);
    y.push(item.rolls);
  });

  const data_rolls_made = {
    labels: x,
    datasets: [
      {
        label: "No. of rolls made",
        data: y,
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          //  "rgba(255, 206, 86, 1)",
          //  "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
           "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(219, 246, 106, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  //CurrentStars
  useEffect(() => {
    async function fetchData() {
      fetch("/api/stairGame/getCurrStars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => {
          set_curr_stars(json);
        });
    }
    fetchData();
  }, []);

  //data for current_stars_data
  x = [];
  y = [];

  curr_stars_data.forEach((item) => {
    x.push(item.id);
    y.push(item.currentStars);
  });

  //apex chart
  var data_curr_stars = {
    options: {
      chart: {
        id: "Curr-Start-Data",
      },
      xaxis: {
        categories: x,
      },
    },
    series: [
      {
        name: "series-1",
        data: y,
      },
    ],
  };

  var opt = {
    elements: {
      line: {
        tension: 0, // disables bezier curves
      },
    },
    scales: {
      xAxes: {
        grid: {
          color: "white",
        },
        maintainAspectRatio: true,
      },

      yAxes: {
        grid: {
          display: false,
        },
        maintainAspectRatio: true,
      },
    },
    animations: {
      borderWidth: {
        duration: 500,
    //    easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    borderWidth: 5,
  };

  return (
    <div className={classes.root}>
      <Reveal makeStyles={{ marginTop: "1rem" }}>
        <Navbars />
      </Reveal>
      <Grid container justify="space-evenly" className={classes.topcard}>
        <Paper elevation="8">
          <Grid
            container
            style={{ marginTop: "60px", marginRight: "5px", marginLeft: "5px" }}
            spacing={3}
            justify="space-evenly"
          >
            <Grid item style={{ marginTop: "60" }} xs={12} md={6}>
              <Fade bottom>
                <Paper elevation="8" className={classes.chart} mr={10}>
                  <div className="header">
                    <h1
                      className="title"
                      style={{
                        display: "flex",
                        fontSize: "1.5rem",
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        lineHeight: "1.334",
                        letterSpacing: "0em",
                      }}
                    ></h1>
                  </div>
                  Average Accuracy Rate
                  <Scatter data={data_acc_rate} options={opt} />
                </Paper>
              </Fade>
            </Grid>
            {/* <Grid item xs={3}></Grid> */}
            <Grid item xs={12} md={6}>
              <Fade bottom>
                <Paper elevation="8" className={classes.chart2}>
                  {/* <div className="header">
                <h1 className="title">Line Chart</h1>
                <div className="links">
                  <a
                    className="btn btn-gh"
                    href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js"
                  >
                    Github Source
                  </a>
                </div>
              </div> */}
                  Engagement Level
                  <Line data={data_rolls_made} options={opt} />
                </Paper>
              </Fade>
            </Grid>
            <Grid container justify="space-around">
              <Grid item md={4}>
                <CardAcc />
              </Grid>
              <Grid item md={4}>
                <CardEngagement />
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "60" }} xs={12} md={6}>
              <Fade bottom>
                <Paper elevation="8" className={classes.chart} mr={10}>
                  <div className="header">
                    <h1
                      className="title"
                      style={{
                        display: "flex",
                        fontSize: "1.5rem",
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        lineHeight: "1.334",
                        letterSpacing: "0em",
                      }}
                    ></h1>
                  </div>
                  Star Growth Rate
                  <Line data={data_star_growth} options={opt} />
                </Paper>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade bottom>
                <Paper elevation="8" className={classes.chart2}>
                  Average Hints Used
                  <Line data={data_hints} options={opt} />
                </Paper>
              </Fade>
            </Grid>
          </Grid>
          <Grid container justify="space-around">
            <Grid item md={4}>
              <CardStars />
            </Grid>
            <Grid item md={4}>
              <CardHints />
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            className={classes.topcard}
            spacing={2}
          >
            <Grid item xs={12} md={4}>
              <Fade bottom>
                <Paper elevation="8">
                  <CardPuzz />
                </Paper>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade bottom>
                <Paper elevation="8" className={classes.chart} mr={10}>
                  <div className="header">
                    <h1
                      className="title"
                      style={{
                        display: "flex",
                        fontSize: "1.5rem",
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        lineHeight: "1.334",
                        letterSpacing: "0em",
                      }}
                    ></h1>
                  </div>
                  Stars Leaderboard
                  <Bar data={data_star_growth} options={options_star_growth} />
                </Paper>
              </Fade>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Userdata;
