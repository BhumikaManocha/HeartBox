import React, { lazy, Suspense } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from "./pages/loading";

// import Landing from "./pages/landing/landing";
// OR
const Landing = lazy(() => import("./pages/landing/landing"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={Landing} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
