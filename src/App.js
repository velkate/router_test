import './App.css';
import { Redirect, Switch } from 'react-router';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import AnalyticsPage from './components/AnalyticsPage';
import Home from './components/Home';
import AuthContextWrapper from './lib/AuthContextWrapper';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <AuthContextWrapper>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>

                        <PrivateRoute path='/analytics'>
                            <AnalyticsPage />
                        </PrivateRoute>

                        <Route path='/login'>
                            <LoginPage />
                        </Route>

                        <Route path='*'>
                            <Redirect to='/' />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </AuthContextWrapper>
    );
}

export default App;
