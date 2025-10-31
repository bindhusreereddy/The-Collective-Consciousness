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
  const [userdata, setUserdata] = useState({});
  useEffect(() => {
    async function fetchData() {
      fetch("/userdata", {
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

  const {
    sevenmarks,
    eightmarks,
    ninemarks,
    tenmarks,
    elevenmarks,
    twelvemarks,
    collegepercent,
  } = userdata;

  const dataarr = [
    sevenmarks,
    eightmarks,
    ninemarks,
    tenmarks,
    elevenmarks,
    twelvemarks,
    collegepercent,
  ];

  var acc = [
    {
        "id": 6,
        "value": 0.28352921
    },
    {
        "id": 7,
        "value": 0.28352921
    },
    {
        "id": 8,
        "value": 0.3162881
    },
    {
        "id": 9,
        "value": 0.3289843
    },
    {
        "id": 10,
        "value": 0.50747183
    },
    {
        "id": 11,
        "value": 0.54961495
    },
    {
        "id": 12,
        "value": 0.56543448
    },
    {
        "id": 13,
        "value": 0.67789103
    },
    {
        "id": 14,
        "value": 0.67789103
    },
    {
        "id": 15,
        "value": 0.67789103
    },
    {
        "id": 16,
        "value": 0.71154304
    },
    {
        "id": 17,
        "value": 0.71154304
    },
    {
        "id": 18,
        "value": 0.79984084
    },
    {
        "id": 19,
        "value": 0.83689696
    },
    {
        "id": 20,
        "value": 0.84401255
    },
    {
        "id": 21,
        "value": 0.84401255
    },
    {
        "id": 22,
        "value": 0.87136611
    },
    {
        "id": 23,
        "value": 0.90279595
    },
    {
        "id": 24,
        "value": 0.91115744
    },
    {
        "id": 25,
        "value": 0.91115744
    },
    {
        "id": 26,
        "value": 0.9136093
    },
    {
        "id": 27,
        "value": 0.9548788
    },
    {
        "id": 28,
        "value": 0.96131084
    },
    {
        "id": 29,
        "value": 0.96307807
    },
    {
        "id": 30,
        "value": 0.97480549
    },
    {
        "id": 31,
        "value": 0.98753643
    },
    {
        "id": 32,
        "value": 1.00100944
    },
    {
        "id": 33,
        "value": 1.00329349
    },
    {
        "id": 34,
        "value": 1.0069054
    },
    {
        "id": 35,
        "value": 1.0069054
    },
    {
        "id": 36,
        "value": 1.0069054
    },
    {
        "id": 37,
        "value": 1.0069054
    },
    {
        "id": 38,
        "value": 1.00783866
    },
    {
        "id": 39,
        "value": 1.00783866
    },
    {
        "id": 40,
        "value": 1.00785817
    },
    {
        "id": 41,
        "value": 1.00785817
    },
    {
        "id": 42,
        "value": 1.00169266
    },
    {
        "id": 43,
        "value": 1.00169266
    },
    {
        "id": 44,
        "value": 0.99495104
    },
    {
        "id": 45,
        "value": 0.99495104
    },
    {
        "id": 46,
        "value": 0.99152426
    },
    {
        "id": 47,
        "value": 0.99042085
    },
    {
        "id": 48,
        "value": 0.98438755
    },
    {
        "id": 49,
        "value": 0.96304157
    },
    {
        "id": 50,
        "value": 0.94049629
    },
    {
        "id": 51,
        "value": 0.94049629
    },
    {
        "id": 52,
        "value": 0.9195728
    },
    {
        "id": 53,
        "value": 0.9082117
    },
    {
        "id": 54,
        "value": 0.88381623
    },
    {
        "id": 55,
        "value": 0.85046178
    },
    {
        "id": 56,
        "value": 0.85046178
    },
    {
        "id": 57,
        "value": 0.84040439
    },
    {
        "id": 58,
        "value": 0.83734476
    },
    {
        "id": 59,
        "value": 0.81434399
    },
    {
        "id": 60,
        "value": 0.77592768
    },
    {
        "id": 61,
        "value": 0.76402576
    },
    {
        "id": 62,
        "value": 0.76059692
    },
    {
        "id": 63,
        "value": 0.73569001
    },
    {
        "id": 64,
        "value": 0.68567566
    },
    {
        "id": 65,
        "value": 0.68567566
    },
    {
        "id": 66,
        "value": 0.60880365
    },
    {
        "id": 67,
        "value": 0.60880365
    },
    {
        "id": 68,
        "value": 0.59654421
    },
    {
        "id": 69,
        "value": 0.59286824
    },
    {
        "id": 70,
        "value": 0.52356042
    },
    {
        "id": 71,
        "value": 0.5109778
    },
    {
        "id": 72,
        "value": 0.48194999
    },
    {
        "id": 73,
        "value": 0.48194999
    },
    {
        "id": 74,
        "value": 0.4494584
    },
    {
        "id": 75,
        "value": 0.36497998
    },
    {
        "id": 76,
        "value": 0.36497998
    },
    {
        "id": 77,
        "value": 0.32941643
    },
    {
        "id": 78,
        "value": 0.18324418
    },
    {
        "id": 79,
        "value": 0.16493453
    },
    {
        "id": 80,
        "value": 0.15629272
    }
]
  var x = [];
  var y = [];
  acc.forEach((item) => {
    x.push(item.id);
    y.push(item.value);
  })  
//data for chart
  const data_line = {
    labels: x,
    datasets: [
      {
        label: "Normalized Data",
        data: y,
        fill: false,
        backgroundColor: "#1ddfc4",
        borderColor: "#1dc9e2",
      },
    ],
  };


  var month = [
    {
        "Month": 8,
        "value": 0.75
    },
    {
        "Month": 9,
        "value": 0.899
    },
    {
        "Month": 10,
        "value": 0.634
    },
    {
        "Month": 11,
        "value": 0.522
    },
    {
        "Month": 12,
        "value": 0.563
    },
    {
        "Month": 13,
        "value": 0.678
    },
    {
        "Month": 14,
        "value": 0.779
    },
    {
        "Month": 15,
        "value": 0.834
    },
    {
        "Month": 16,
        "value": 0.856
    },
    {
        "Month": 17,
        "value": 0.898
    },
    {
        "Month": 18,
        "value": 0.672
    },
    {
        "Month": 19,
        "value": 0.899
    },
    {
        "Month": 20,
        "value": 0.901
    },
    {
        "Month": 21,
        "value": 0.934
    },
    {
        "Month": 22,
        "value": 0.966
    },
    {
        "Month": 23,
        "value": 0.796
    },
    {
        "Month": 24,
        "value": 0.853
    },
    {
        "Month": 25,
        "value": 0.789
    },
    {
        "Month": 26,
        "value": 0.923
    },
    {
        "Month": 27,
        "value": 0.966
    },
    {
        "Month": 28,
        "value": 0.823
    },
    {
        "Month": 29,
        "value": 0.856
    },
    {
        "Month": 30,
        "value": 0.911
    },
    {
        "Month": 31,
        "value": 0.656
    },
    {
        "Month": 32,
        "value": 0.514
    },
    {
        "Month": 33,
        "value": 0.756
    },
    {
        "Month": 34,
        "value": 0.749
    },
    {
        "Month": 35,
        "value": 0.823
    },
    {
        "Month": 36,
        "value": 0.86
    },
    {
        "Month": 37,
        "value": 0.923
    },
    {
        "Month": 38,
        "value": 0.965
    },
    {
        "Month": 39,
        "value": 0.782
    },
    {
        "Month": 40,
        "value": 0.911
    }
]
 
  x = [];
  y = [];
  month.forEach((item) => {
    x.push(item.Month);
    y.push(item.value);
  })
  const data_bar = {
    labels: x,
    datasets: [
      {
        label: "Sessions",
        data: y,
        fill: false,
        backgroundColor: [
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255,99,71,0.8)",
          "rgba(255, 0, 0)",
          "rgba(255, 0, 0)",
          "rgba(255, 0, 0)",
          "rgba(255, 0, 0)",
          "rgba(255, 0, 0)",
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
            spacing={1}
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
                    </h1>
                  </div>
                    Normal Distribution of Accuracy Rate
                  <Scatter data={data_line} options={opt} />
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
                  Time Series Prediction
                  <Bar data={data_bar} options={opt} />
                </Paper>
              </Fade>
            </Grid>
            <Grid item style={{ marginTop: "60",marginRight:"25px" }} xs={12} md={6}>
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
                      {/* Avg Marks Scored By The Class */}
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
                  {/* <Bar data={data} options={opt} /> */}
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