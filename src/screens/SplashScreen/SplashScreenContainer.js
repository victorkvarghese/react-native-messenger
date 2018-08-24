import React, { Component } from 'react';
import SplashScreen from './SplashScreen';
import { connect } from 'react-redux';

class SplashScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SplashScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashScreenContainer);
