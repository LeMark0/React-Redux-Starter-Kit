import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';

import './styles.scss';

const ApiResponse = (props) => {
  const { asyncState, children } = props;

  return (
    <div className="component-api-response">
      {
        (asyncState.needShowLoader) && <Loader />
      }
      <div className="response">
        {
          (asyncState.needShowData) &&
            ((children)
              ? { children }
              : <div className="data-text">{ JSON.stringify(asyncState.data) }</div>
            )
        }
        {
          (asyncState.needShowError) && <div className="error">{asyncState.error.responseData}</div>
        }
      </div>
    </div>
  );
};

ApiResponse.propTypes = {
  asyncState: PropTypes.object.isRequired,
  children: PropTypes.node,
};

ApiResponse.defaultProps = {
  children: null,
};

export default ApiResponse;
