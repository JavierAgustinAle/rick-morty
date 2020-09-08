import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './Components/Header/Header'
import Characters from '../src/Components/Characters/Characters';
import Locations from '../src/Components/Locations/Locations';
import Episodes from '../src/Components/Episodes/Episodes';
import Footer from '../src/Components/Footer/Footer';

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/rick-morty" exact component={Characters} />

                <Route path="/locations" exact component={Locations} />

                <Route path="/episodes" exact component={Episodes} />

                <Route>
                    <div className="alert alert-danger pt-2" role="alert">
                        <h4 className="alert-heading text-center">Page not found</h4>
                    </div>
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRoutes;