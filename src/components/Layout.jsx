import React from 'react';
import { Box, CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <Box mx={3} my={4}>
                <main>{children}</main>
            </Box>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
