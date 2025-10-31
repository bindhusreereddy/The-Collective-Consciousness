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
import Container from "@material-ui/core/Container";
import Card from "./Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardHyg from "./Cards_Student/Card_Hyginedef";
import CardPuzz from "./Cards_Student/Card_Puzzledef";
import CardSnake from "./Cards_Student/Card _Snakedef";
import CardHygac from "./Cards_Student/Card_Hygine_Allcorrect";
import CardHygcs from "./Cards_Student/Card_Hygine_CurrentStars";
import CardHygrest from "./Cards_Student/Card_Hygine_Rest";
import CardPuzzac from "./Cards_Student/Card_Puzz_Allcorrect";
import CardPuzzcs from "./Cards_Student/Card_Puzz_CurrentStars";
import CardPuzzrest from "./Cards_Student/Card_Puzz_Rest";
import CardSnakeac from "./Cards_Student/Card_Snake_Allcorrect";
import CardSnakecs from "./Cards_Student/Card_Snake_CurrentStars";
import CardSnakerest from "./Cards_Student/Card_Snake_Rest";
import Navbars from "./Navbar";
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

const useStyles = makeStyles((theme) => ({
  paper1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e4646e",
    padding: "15px",
  },
  paper11: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f25c54",
    padding: "15px",
  },
  paper21: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e3c598",
    padding: "15px",
  },
  paper22: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#8c0000",
    padding: "15px",
    height: "262.4px",
  },
  paper2: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F6DFA2",
    padding: "15px",
    height: "262.4px",
  },
  root: {
    minWidth: 275,
    background: "#eef3f2", //#eef3f2  #f4f7fa
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
}));
function Userdata() {
  //fetching userdata
  const classes = useStyles();
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      fetch("/api/hygeinrun/singleUserData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("yaha hua");
          console.log(json);
          setUserdata(json);
        });
      console.log(userdata);
    }

    fetchData();
  }, []);
  var user_hye_data = [
    [
        {
            "sno": 1,
            "star": 25
        },
        {
            "sno": 2,
            "star": 32
        },
        {
            "sno": 3,
            "star": 28
        },
        {
            "sno": 4,
            "star": 25
        },
        {
            "sno": 5,
            "star": 22
        }
    ],
    [
        {
            "sno": 1,
            "correct": 2
        },
        {
            "sno": 2,
            "correct": 3
        },
        {
            "sno": 3,
            "correct": 5
        },
        {
            "sno": 4,
            "correct": 3
        },
        {
            "sno": 5,
            "correct": 6
        }
    ],
    18.4
  ];
  var starData = user_hye_data[0];
  var correct_attempts_data = user_hye_data[1];
  var avg_time = user_hye_data[2];

  var x1 = [];
  var y1 = [];
  var x2 = [];
  var y2 = [];

  starData.forEach(function(item) {
    x1.push(item.sno);
    y1.push(item.star);
  })

  correct_attempts_data.forEach(function(item) {
    x2.push(item.sno);
    y2.push(item.correct);
  })

  console.log(x1,y1,x2,y2);
  const data = {
    labels: x1,
    datasets: [
      {
        label: "Marks",
        data: y1,
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

  //data for chart
  const data_line_hey = {
    labels: x1,
    datasets: [
      {
        label: "Stars",
        data: y1,
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
          "rgba(219, 246, 106, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const data_bar_hey = {
    labels: x2,
    datasets: [
      {
        label: "Correct Attempts",
        data: y2,
        fill: false,
        backgroundColor: "#1ddfc4",
        borderColor: "#1dc9e2",
      },
    ],
  };


  var user_puzzle_data = [
    [
        {
            "sno": 1,
            "star": 45
        },
        {
            "sno": 2,
            "star": 48
        },
        {
            "sno": 3,
            "star": 37
        },
        {
            "sno": 4,
            "star": 50
        },
        {
            "sno": 5,
            "star": 42
        }
    ],
    [
        {
            "sno": 1,
            "correct": 6
        },
        {
            "sno": 2,
            "correct": 3
        },
        {
            "sno": 3,
            "correct": 2
        },
        {
            "sno": 4,
            "correct": 4
        },
        {
            "sno": 5,
            "correct": 5
        }
    ],
    17.2
];
  var starData_puzzle = user_puzzle_data[0];
  var corr_data_puzzle = user_puzzle_data[1];
  var avg_time_puzzle = user_puzzle_data[2];
  x1 = [];
  y1 = [];
  x2 = [];
  y2 = [];

  starData_puzzle.forEach(function(item) {
    x1.push(item.sno);
    y1.push(item.star);
  })

  corr_data_puzzle.forEach(function(item) {
    x2.push(item.sno);
    y2.push(item.correct);
  })

  //data for chart
  const data_line_puzzle = {
    labels: x1,
    datasets: [
      {
        label: "Stars",
        data: y1,
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
          "rgba(219, 246, 106, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const data_bar_puzzle = {
    labels: x2,
    datasets: [
      {
        label: "Correct Attempts",
        data: y2,
        fill: false,
        backgroundColor: "#1ddfc4",
        borderColor: "#1dc9e2",
      },
    ],
  };

  var usr_snake_data = [
    [
        {
            "sno": 1,
            "star": 25
        },
        {
            "sno": 2,
            "star": 32
        },
        {
            "sno": 3,
            "star": 28
        },
        {
            "sno": 4,
            "star": 25
        },
        {
            "sno": 5,
            "star": 22
        }
    ],
    [
        {
            "sno": 1,
            "correct": 2
        },
        {
            "sno": 2,
            "correct": 3
        },
        {
            "sno": 3,
            "correct": 5
        },
        {
            "sno": 4,
            "correct": 3
        },
        {
            "sno": 5,
            "correct": 6
        }
    ],
    18.4
];

  var starData_snake = usr_snake_data[0];
  var corrData_snake = usr_snake_data[1];
  var avg_time_snake = usr_snake_data[2];
  x1 = [];
  y1 = [];
  x2 = [];
  y2 = [];

  starData_snake.forEach(function(item) {
    x1.push(item.sno);
    y1.push(item.star);
  })

  corrData_snake.forEach(function(item) {
    x2.push(item.sno);
    y2.push(item.correct);
  })

  //data for chart
  const data_line_snake = {
    labels: x1,
    datasets: [
      {
        label: "Stars",
        data: y1,
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
          "rgba(219, 246, 106, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const data_bar_snake = {
    labels: x2,
    datasets: [
      {
        label: "Correct Attempts",
        data: y2,
        fill: false,
        backgroundColor: "#1ddfc4",
        borderColor: "#1dc9e2",
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


  // <Line data={data} options={options} />

  return (
    <div className={classes.root}>
      <Reveal makeStyles={{ marginTop: "1rem" }}>
        <Navbars />
      </Reveal>
      <Grid container justify="space-evenly">
        <Paper
          className={classes.paper1}
          style={{ backgroundColor: "#FDD2BF" }}
        >
          <Grid
            contaner
            className={classes.topcard}
            style={{ display: "flex", justifycontent: "center" }}
          >
            <Grid item xs={12}>
              <Fade top>
                <Paper className={classes.paper}>
                  <CardHyg />
                </Paper>
              </Fade>
            </Grid>
          </Grid>
          <Grid container justify="space-evenly" className={classes.topcard}>
            <Grid item xs={12} md={3}>
              <Slide left>
                <Paper elevation="8" className={classes.paper}>
                  <CardHygac 
                    data={correct_attempts_data}
                  />
                </Paper>
              </Slide>
            </Grid>
            <Grid item xs={12} md={3}>
              <Fade bottom>
                <Paper elevation="8" className={classes.paper}>
                  <CardHygcs
                    data={starData}
                  />
                </Paper>
              </Fade>
            </Grid>
            <Grid item xs={12} md={3}>
              <Slide right>
                <Paper elevation="8" className={classes.paper}>
                  <CardHygrest 
                    data={avg_time}
                  />
                </Paper>
              </Slide>
            </Grid>
            <Grid
              container
              style={{
                marginTop: "60px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
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
                        Star Growth Rate
                      </h1>
                    </div>
                    <Line data={data_line_hey} options={opt} />
                  </Paper>
                </Fade>
              </Grid>
              {/* <Grid item xs={3}></Grid> */}
              <Grid item xs={12} md={6}>
                <Fade bottom>
                  <Paper elevation="8" className={classes.chart2}>
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
                        Improvement
                      </h1>
                    </div>
                    <Bar data={data_bar_hey} options={opt} />
                  </Paper>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper} style={{ backgroundColor: "#f79d65" }}>
          <Grid
            contaner
            className={classes.topcard}
            style={{ display: "flex" }}
          >
            <Grid item xs={12}>
              <Paper className={classes.paper11}>
                <CardSnake />
              </Paper>
            </Grid>
          </Grid>
          <Grid container justify="space-evenly" className={classes.topcard}>
            <Grid item xs={12} md={3}>
              <Slide left>
                <Paper elevation="8" className={classes.paper11}>
                  <CardSnakeac 
                    data={starData_snake}
                  />
                </Paper>
              </Slide>
            </Grid>
            <Grid item xs={12} md={3}>
              <Fade bottom>
                <Paper elevation="8" className={classes.paper11}>
                  <CardSnakecs 
                    data={corrData_snake}
                  />
                </Paper>
              </Fade>
            </Grid>
            <Grid item xs={12} md={3}>
              <Slide right>
                <Paper elevation="8" className={classes.paper11}>
                  <CardSnakerest 
                    data={avg_time_snake}
                  />
                </Paper>
              </Slide>
            </Grid>
            <Grid
              container
              style={{
                marginTop: "60px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
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
                        Star Growth Rate
                      </h1>
                    </div>
                    <Line data={data_line_snake} options={opt} />
                  </Paper>
                </Fade>
              </Grid>
              {/* <Grid item xs={3}></Grid> */}
              <Grid item xs={12} md={6}>
                <Fade bottom>
                  <Paper elevation="8" className={classes.chart2}>
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
                        Improvement
                      </h1>
                    </div>
                    <Bar data={data_bar_snake} options={opt} />
                  </Paper>
                </Fade>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                marginTop: "60px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
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
                        {/* Avg Stars Gain */}
                      </h1>
                    </div>
                    {/* <Line data={data} options={opt} /> */}
                  </Paper>
                </Fade>
              </Grid>
              {/* <Grid item xs={3}></Grid> */}
              <Grid item xs={12} md={6}>
                <Fade bottom>
                  <Paper elevation="8" className={classes.chart2}>
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
                        {/* Improvement */}
                      </h1>
                    </div>
                    {/* <Bar data={data} options={opt} /> */}
                  </Paper>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper} style={{ backgroundColor: "#e97171" }}>
          <Grid
            contaner
            className={classes.topcard}
            style={{ display: "flex" }}
          >
            <Grid item xs={12}>
              <Paper elevation="8" className={classes.paper22}>
                <CardPuzz />
              </Paper>
            </Grid>
          </Grid>
          <Grid container justify="space-evenly" className={classes.topcard}>
            <Grid item xs={12} md={3}>
              <Slide left>
                <Paper elevation="8" className={classes.paper22}>
                  <CardPuzzac 
                    data={starData_puzzle}
                  />
                </Paper>
              </Slide>
            </Grid>
            <Grid item xs={12} md={3}>
              <Fade bottom>
                <Paper elevation="8" className={classes.paper22}>
                  <CardPuzzcs 
                    data={corr_data_puzzle}
                  />
                </Paper>
              </Fade>
            </Grid>
            <Grid item xs={12} md={3}>
              <Slide right>
                <Paper elevation="8" className={classes.paper22}>
                  <CardPuzzrest 
                    data={avg_time_puzzle}
                  />
                </Paper>
              </Slide>
            </Grid>
            <Grid
              container
              style={{
                marginTop: "60px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
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
                        Star Growth Rate
                      </h1>
                    </div>
                    <Line data={data_line_puzzle} options={opt} />
                  </Paper>
                </Fade>
              </Grid>
              {/* <Grid item xs={3}></Grid> */}
              <Grid item xs={12} md={6}>
                <Fade bottom>
                  <Paper elevation="8" className={classes.chart2}>
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
                        Improvement
                      </h1>
                    </div>
                    <Bar data={data_bar_puzzle} options={opt} />
                  </Paper>
                </Fade>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                marginTop: "60px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
              spacing={3}
              justify="space-evenly"
            >
              <Grid item xs={12}>
                <Fade bottom>
                  <Paper elevation="8" className={classes.chart2}>
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
                        {/* Impro3vement */}
                      </h1>
                    </div>
                    {/* <Bar data={data} options={opt} /> */}
                  </Paper>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Userdata;
