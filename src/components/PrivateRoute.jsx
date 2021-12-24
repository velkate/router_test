import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children, ...rest }) {
    let { auth } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}
