import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comment from "./pages/Comment";
import ComputerComponents from "./pages/ComputerComponents";
import ComparePage from "./pages/ComparePage";
import CompatibilityState from "./context/CompatibilityState.jsx";
import AlertState from "./context/AlertState";

function App() {
  return (
    <div>
      <CompatibilityState>
        <AlertState>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/compatibility" exact>
                <ComputerComponents />
              </Route>
              <Route path="/compatibility/compare" exact>
                <ComparePage />
              </Route>
              <Route path="/comment" exact>
                <Comment />
              </Route>
            </Switch>
          </BrowserRouter>
        </AlertState>
      </CompatibilityState>
    </div>
  );
}

export default App;
