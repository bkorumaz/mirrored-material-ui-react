import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import CustomerOrderPage from "./CustomerOrderPage";
import ManagerMenuPage from './ManagerMenuPage';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { Route, Switch } from 'react-router-dom'

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: {
        main: "#f44336",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
              <Route exact path="/" component={CustomerOrderPage} />
              <Route path="/orders" component={CustomerOrderPage} />
              <Route exact path="/menu" component={ManagerMenuPage} />
            </Switch>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
