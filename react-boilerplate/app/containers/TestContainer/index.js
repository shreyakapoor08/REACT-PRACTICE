/**
 *
 * TestContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTestContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {getSuccess, getFailure, getDataSuccess, getDataFailure} from './selectors';
import {getDetails, getData} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class TestContainer extends React.Component {

  state={
    apiDetails: "" ,
    apiData: ""
  }

  componentWillMount(){
    this.props.abcd(); //function call/declared, ab dispatch mai  dispatch ho jayega

    this.props.getData();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.getSuccess && nextProps.getSuccess !== this.props.getSuccess) {
      this.setState({
        apiDetails: nextProps.getSuccess
      })
    }
    if(nextProps.getFailure && nextProps.getFailure !== this.props.getFailure) {
      this.setState({
        
      });
    }


    if(nextProps.getDataSuccess && nextProps.getDataSuccess !== this.props.getDataSuccess) {
      this.setState({
        apiData: nextProps.getDataSuccess
      })
    }
    if(nextProps.getDataFailure && nextProps.getDataFailure !== this.props.getDataFailure) {
      this.setState({
        
      });
    }


  }



  render() {
    console.log("data",this.state.apiDetails);
    
    return (
      <div>
        {this.state.apiDetails}  <br/> <br/> 
        {this.state.apiData}
      </div>
    );
  }
}

TestContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  //make case of success and failure
  getSuccess: getSuccess(),
  getFailure: getFailure(),
  getDataSuccess: getDataSuccess(),
  getDataFailure: getDataFailure()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    abcd: () => dispatch(getDetails()), //yaha se function jump krke action.js mai dispatch ho jayega
    getData: () => dispatch(getData())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'testContainer', reducer });
const withSaga = injectSaga({ key: 'testContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TestContainer);
