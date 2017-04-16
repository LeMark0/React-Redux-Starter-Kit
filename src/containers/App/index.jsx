import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { setTest, getLatestRates } from 'redux/actions/AppActions';

// Styles
import './styles.scss';

const mapStateToProps = function (store) {
    return {
        // REPLACE
        testState: store.appState.test,
    };
};

class App extends Component {
    componentWillReceiveProps(props){
        console.log("componentWillReceiveProps(): ", props);
    };

    componentWillMount() {

        console.log("componentWillMount()");
        //this.props.dispatch(setTest(true));
    };

    render() {
        console.log("this.props: ", this.props);

        return (
            <div className="container-app">
                <h2>App!</h2>
                <button onClick={() => this.handleClick(!this.props.testState)} >
                    Test: {this.props.testState.toString()}
                </button>
            </div>
        )
    };

    handleClick(value){
        //console.log("this.props: ", this.props);
        this.props.dispatch(setTest(value));
        this.loadLatestRates();
    };

    loadLatestRates(){
        this.props.dispatch(getLatestRates());
    };
};

export default connect(mapStateToProps)(App);