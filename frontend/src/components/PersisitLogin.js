import { Outlet } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`authToken: ${JSON.stringify(auth?.accessToken)}`);
    }, [isLoading]);

    return (
        <Fragment>
            {!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}
        </Fragment>
    );
};

export default PersistLogin;
