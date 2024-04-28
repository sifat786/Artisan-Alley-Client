import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';
import { Vortex } from "react-loader-spinner";


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return (
            <div className="mx-auto flex justify-center my-[100px] items-center">
                <h1 className="text-4xl font-bold">Loading</h1>
                <Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            </div>
        )
    }else if(user) {
        return children
    } else {
        return <Navigate to={'/signin'} state={location.pathname}/>
    }

};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}