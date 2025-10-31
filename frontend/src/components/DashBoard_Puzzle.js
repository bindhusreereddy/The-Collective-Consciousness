import React, { useState, useEffect } from "react";
import {
  Line,
  Bar,
  Scatter,
  Doughnut,
  Radar,
  PolarArea,
} from "react-chartjs-2";
import "./Dashboard.css";
import Card from "./Card";
import Navbars from "./Navbar";
import ApexChart from "react-apexcharts";
import CardAcc from "./Cards_Puzzle/Card_Acc_Rate";
import CardHints from "./Cards_Puzzle/Card_Hints";
import CardStars from "./Cards_Puzzle/Card_Stars_growth";
import CardWord from "./Cards_Puzzle/Card_Words";
import CardPuzz from "./Cards_Dashboard/Card_DashBoard_Puzz";
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
  const classes = useStyles();
  const [acc_data, set_acc_data] = useState([]);
  const [hints_data, set_hints_data] = useState([]);
  const [growth_data, set_growth_growth] = useState([]);
  const [curr_stars_data, set_curr_stars] = useState([]);
  const [most_used_words_data, set_msw] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("/api/puzzleGame/getAccuracyRate", {
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
      fetch("/api/puzzleGame/getStarGrowthRate", {
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

  //HintsData
  useEffect(() => {
    async function fetchData() {
      fetch("/api/puzzleGame/getHints", {
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

  //MostUsedWordsData
  useEffect(() => {
    async function fetchData() {
      fetch("/api/puzzleGame/getMostUsedWords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => {
          set_msw(json);
        });
    }
    fetchData();
  }, []);

  //data for state_most_used_words_data
  // ];
  x = [];
  y = [];

  for (const [key, value] of Object.entries(most_used_words_data)) {
    x.push(key);
    y.push(value);
  }
  console.log(y);

  const data_most_used_words = {
    labels: x,
    datasets: [
      {
        label: "Frequency Of Correctly Chosen Options",
        data: y,
        fill: false,
        backgroundColor: "#1ddfc4",
        borderColor: "#1dc9e2",
      },
    ],
  };

  //CurrentStars
  useEffect(() => {
    async function fetchData() {
      fetch("/api/puzzleGame/getCurrStars", {
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
    style: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
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
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
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
                    >
                      Average Accuracy Rate
                    </h1>
                  </div>
                  <Scatter data={data_acc_rate} options={opt} />
                </Paper>
              </Fade>
            </Grid>
            {/* <Grid item xs={3}></Grid> */}
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
                    >
                      Star Growth Rate
                    </h1>
                  </div>
                  <Line data={data_star_growth} options={opt} />
                </Paper>
              </Fade>
            </Grid>
            <Grid container justify="space-around">
              <Grid item md={4}>
                <CardAcc />
              </Grid>
              <Grid item md={4}>
                <CardStars />
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
                    >
                      Average Hints Used
                    </h1>
                  </div>
                  <Line data={data_hints} options={opt} />
                </Paper>
              </Fade>
            </Grid>
            {/* <Grid item xs={3}></Grid> */}
            <Grid item xs={12} md={6}>
              <Fade bottom>
                {/* <Paper elevation="8" className={classes.chart2}> */}
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
                    >
                      Most Used Words
                    </h1>
                  </div>
                  <Line data={data_most_used_words} options={opt} />
                </Paper>
              </Fade>
            </Grid>
          </Grid>
          <Grid container justify="space-around">
            <Grid item md={4}>
              <CardHints />
            </Grid>
            <Grid item md={4}>
              <CardWord />
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.topcard}>
            <Grid item xs={6}>
              <Fade bottom>
                <Paper elevation="8">
                  Stars Leaderboard
                  <ApexChart
                    options={data_curr_stars.options}
                    series={data_curr_stars.series}
                    type="bar"
                    width="500"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
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
