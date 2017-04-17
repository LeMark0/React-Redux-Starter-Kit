import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { setTest, getLatestRates } from 'redux/actions/AppActions';
import ApiResponse from 'components/ApiResponse';

// Styles
import './styles.scss';

const mapStateToProps = function (store) {
    return {
        testState: store.appState.test,
        latestRatesState: store.appState.async.getLatestRates
    };
};

class App extends Component {

    render() {

        return (
            <div className="container-app">
                <h2>React-Redux-Starter-Kit</h2>

                <button onClick={() => this.handleClick(!this.props.testState)} >
                    Request API: {this.props.latestRatesState.status}
                </button>

                <ApiResponse asyncState={this.props.latestRatesState} />
            </div>
        )
    };

    handleClick(value){
        // set some state in the redux store
        this.props.dispatch(setTest(value));
        // make an API request
        this.loadLatestRates();
    };

    loadLatestRates(){
        this.props.dispatch(getLatestRates());
    };
};

export default connect(mapStateToProps)(App);