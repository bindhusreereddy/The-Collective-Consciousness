import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
  makeStyles,
  Grid,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import StudentC from "./Cards_Homepage/Card_Kid";
import ClassC from "./Cards_Homepage/Card_students";
import GameC from "./Cards_Homepage/Card_game";
import Reveal from "react-reveal/Reveal";
import Navbar from "./Navbar";
import { Container } from "@material-ui/core";
const Homepage2 = () => {
  return (
    <div style={{ backgroundColor: "#eef3f2" }}>
      <Container
        style={{ display: "flex", marginTop: "160px", marginLeft: "250px" }}
      >
        <Grid container>
          <Grid item xs={3}>
            <Fade left>
              <Paper>
                <StudentC />
              </Paper>
            </Fade>
          </Grid>
          <Grid item xs={3}>
            <Fade bottom>
              <Paper>
                <ClassC />
              </Paper>
            </Fade>
          </Grid>
          <Grid item xs={3}>
            <Fade right>
              <Paper>
                <GameC />
              </Paper>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage2;
