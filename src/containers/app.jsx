import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Detail from './detail.jsx'

class APP extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/article/:id" component={Detail} />
                <Route path="/about" component={About} />
            </Router>
        )
    }
}

export default APP;