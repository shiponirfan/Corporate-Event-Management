import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    // Check Loading
    if(loading){
        return <div className='absolute w-full bg-corporate-lightColor z-20 h-full flex justify-center items-center'>
            <span className="loading loading-ring w-20 text-corporate-color"></span>
        </div>
    }

    // Check User
    if(user){
        return children;
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoutes;