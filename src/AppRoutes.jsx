import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './Components/Header/Header'
import Characters from '../src/Components/Characters/Characters';
import Locations from '../src/Components/Locations/Locations';
import Episodes from '../src/Components/Episodes/Episodes';

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Characters} />

                {/* <Route path="/houses/:id" exact component={Houses} /> */}
                <Route path="/locations" exact component={Locations} />

                <Route path="/episodes" exact component={Episodes} />

                {/* <Route component={NotFound} /> */}

                <Route>
                    <div>
                        <h1>Error 404</h1>
                        <span className="text-danger">Pagina no encontrada.</span>
                    </div>
                </Route>

            </Switch>
        </Router>
    )
}

export default AppRoutes;