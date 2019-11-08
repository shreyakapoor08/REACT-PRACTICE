/**
 *
 * DisplayListApi
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
import makeSelectDisplayListApi from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {getDisplayListSuccess,getDisplayListFailure} from './selectors';
import {getDisplayList} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class DisplayListApi extends React.Component {

  state = {
    apiDisplayList: []
  }

  componentWillMount(){
    this.props.getDisplayList();
    
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.getDisplayListSuccess && nextProps.getDisplayListSuccess !== this.props.getDisplayListSuccess) {
      console.log("nextProps.getDisplayListSuccess------->",nextProps.getDisplayListSuccess);
      this.setState({
        apiDisplayList: nextProps.getDisplayListSuccess
      })
      console.log("apiDisplayList------>",this.state.apiDisplayList);
    }
    if(nextProps.getDisplayListFailure && nextProps.getDisplayListFailure !== this.props.getDisplayListFailure) {
      this.setState({
        
      });
    }

  }

  

  render() {
    
    console.log("apiDisplayList: ",this.state.apiDisplayList);
     let tableData = this.state.apiDisplayList.map((value,index) => {
       console.log("key", index)
       return(
        <tr key={index}>
          <td>{value.name}</td>
          <td>{value.email}</td>
        </tr>
       ) 
     });
    

    return (
      <div>
        <Helmet>
          <title>DisplayListApi</title>
          <meta name="description" content="Description of DisplayListApi" />
        </Helmet>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
              {tableData}
          </tbody>
        </table>
        
        
      </div>
    );
  }
}

DisplayListApi.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  getDisplayListSuccess: getDisplayListSuccess(),
  getDisplayListFailure: getDisplayListFailure()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getDisplayList: () => dispatch(getDisplayList())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'displayListApi', reducer });
const withSaga = injectSaga({ key: 'displayListApi', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DisplayListApi);
