import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dessertList, soapList, mealList } from "./constants";
import Collapsible from "./Collapsible";

const ManagerMenuPage = () => {
  const styles = (theme) => ({
    card: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
    },
  });

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    }
  });

  const classes = useStyles();

  return (
    <div>
      <Card
        className={styles.card}
        style={{ backgroundColor: "#f4f4f4" }}
        raised
      >
        <CardMedia
          component="img"
          alt="Table 5"
          height="200"
          image="https://www.barazzi.com/img/c/10.jpg"
          title="Table 5"
        />
        <CardContent>
          <CardHeader
            title={"Menu"}
            subheader={"Edit the Menu"}
          ></CardHeader>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Collapsible
                list={soapList}
                isManager
                title={"Soaps"}
                subtitle={"Edit saops"}
              />
            </Grid>
            <Grid item>
              <Collapsible
                list={mealList}
                isManager
                title={"Meals"}
                subtitle={"Edit meals"}
              />
            </Grid>
            <Grid item>
              <Collapsible
                list={dessertList}
                isManager
                title={"Desserts"}
                subtitle={"Edit a desserts"}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerMenuPage;
