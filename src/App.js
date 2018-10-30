import React from "react";
import App1 from "./1-random";
import AddQuote from "./3-add";
import LocalQuote from "./2-all";
import ListAll from "./4-list"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const AppRouter = () => (
  <Router>
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Random Quote(Api)</Link></li>
            <li className="breadcrumb-item"><Link to="/random">Random Quote(local)</Link></li>
            <li className="breadcrumb-item"><Link to="/add/">Add Quote</Link></li>
            <li className="breadcrumb-item" aria-current="page"><Link to="/list">List all quotes</Link></li>
        </ol>
      </nav>

      <Route path="/" exact component={App1} />
      <Route path="/random/" component={LocalQuote} />
      <Route path="/add/" component={AddQuote} />
      <Route path="/list/" component={ListAll} />
    </div>
  </Router>
);

export default AppRouter;



