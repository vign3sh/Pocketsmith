import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoutes = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated ? <Component {...props} /> : <Navigate to="/authentication" />}
    />
);

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(PrivateRoutes);
