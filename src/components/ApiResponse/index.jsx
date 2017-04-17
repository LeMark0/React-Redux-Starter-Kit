import React, {Component} from 'react';
import Loader from 'components/Loader';

import './styles.scss';

export default class ApiResponse extends Component {

    static propTypes = {
        asyncState: React.PropTypes.object
    }

    render() {
        const { asyncState } = this.props;

        return (
            <div className="component-api-response">

                {
                    (asyncState.needShowLoader) && <Loader />
                }

                <div className="response">

                {
                    (asyncState.needShowData) &&
                    ((this.props.children)
                            ? this.props.children
                            : <div className="data-text">{ JSON.stringify(asyncState.data) }</div>)

                }

                {
                    (asyncState.needShowError) && <div className="error">{asyncState.error.responseData}</div>

                }

                </div>

            </div>
        )
    }
};