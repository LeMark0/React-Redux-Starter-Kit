import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTest } from 'actions/app';
import { getLatestRates } from 'actions/currency';
import ApiResponse from 'components/ApiResponse';

import './styles.scss';

class App extends React.Component {
  static propTypes = {
    testState: PropTypes.bool.isRequired,
    latestRatesState: PropTypes.object.isRequired,
    setTest: PropTypes.func.isRequired,
    getLatestRates: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="container-app">
        <h2>React-Redux-Starter-Kit</h2>

        <button onClick={() => this.handleClick(!this.props.testState)}>
          Request API: {this.props.latestRatesState.status}
        </button>

        <ApiResponse asyncState={this.props.latestRatesState} />
      </div>
    );
  }

  handleClick(value) {
    // set some state in the redux store
    this.props.setTest(value);
    // make an API request
    this.loadLatestRates();
  }

  loadLatestRates() {
    this.props.getLatestRates();
  }
}

const mapStateToProps = (store) => ({
  testState: store.app.test,
  latestRatesState: store.currency.async.getLatestRates,
});
const mapDispatchToProps = (dispatch) => ({
  setTest: (value) => {
    dispatch(setTest(value));
  },
  getLatestRates: () => {
    dispatch(getLatestRates());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
