import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class App extends Component {
    render() {
        return (
            <h1>Hello world app container</h1>
        );
    }
}

App.propTypes = {
    /**
     * App
     */
    app: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        app: state.app
    };
};

export default connect(mapStateToProps, null)(App);
