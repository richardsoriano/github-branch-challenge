import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../pages/";
import "./globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
