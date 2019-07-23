import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingComponent from '@/components/loading/loading.jsx';
import Header from './header';
import Home from './home';

const About = Loadable({
    loader: () => import('./about'),
    loading: LoadingComponent
});
const Detail = Loadable({
    loader: () => import('./detail'),
    loading: LoadingComponent
});

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