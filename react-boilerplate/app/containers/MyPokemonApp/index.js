/**
 *
 * MyPokemonApp
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
import {makeSelectMyPokemonApp,makeSelectOnClickRequest,displayForm,addNewValues} from './selectors'; //,displayForm,addNewValues
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {getPokemonList,onClickRequest,onClickForm,addNewPokemons} from './actions'; //,onClickForm,addNewPokemons
import index from './index.css';


/* eslint-disable react/prefer-stateless-function */
export class MyPokemonApp extends React.Component {

  state={
    name :"",
    type:"",
    pokemonsDetails: [],
    count: 0,
    flag: false,
    newName: "",
    newType: "",
    newStage: "",
    newSpecies: "",
  }

  componentDidMount(){ //called only once but willmount baar baar call hota hai
    this.props.getPokemonList()
  }

  

  componentWillReceiveProps(nextProps){
    console.log('myPokemonApp before if',nextProps.myPokemon);
    if(nextProps.myPokemon && nextProps.myPokemon !== this.props.myPokemon) {
      this.setState({
        pokemonsDetails: nextProps.myPokemon
      });
    }

    if(nextProps.pokemonCatch && nextProps.pokemonCatch !== this.props.pokemonCatch) {
      this.setState({
        count: nextProps.pokemonCatch
      });
    }

    if(nextProps.displayForm && nextProps.displayForm !== this.props.displayForm) {
      this.setState({
        flag: nextProps.displayForm,
      });
    }
}

  nameSearch = (event) => {
    this.setState({name: event.target.value})
  }

  typeSearch = (event) => {
    this.setState({type: event.target.value})
  }

  

  onSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
          Name: this.state.newName,
          Type:  this.state.newType,
          Stage: this.state.newStage,
          Species: this.state.newSpecies ,
          Caught : false 
     }
   this.props.addNewPokemons(data)
 } 

 updateNameText = (event) => {
  this.setState({newName: event.target.value})
}
updateTypeText = (event) => {
  this.setState({newType: event.target.value})
  console.log('newType:', this.state.newType);
}
updateStageText = (event) => {
  this.setState({newStage: event.target.value})
}
updateSpeciesText = (event) => {
  this.setState({newSpecies: event.target.value})
}


  render() {
    let newPokemonsList = this.state.pokemonsDetails.filter(val => {
      if(val.Name.toUpperCase().includes(this.state.name.toUpperCase()) && val.Type.toUpperCase().includes(this.state.type.toUpperCase()))
          return val;
    }).map((value,index)=> {
      return(
        <tr key={index}>
            <td>{value.Name}</td>
            <td>{value.Type}</td>
            <td>{value.Stage}</td>
            <td>{value.Species}</td>
            <td><button onClick={(key)=>this.props.onClickRequest(index)} disabled = {value.Caught}>{value.Caught ? "Caught" : "Click Me"}</button></td>
        </tr>
      );  
   }) 


   let formPokemon = this.state.flag === false ? "" : (
      <form onSubmit = {this.onSubmitHandler}>
      <input required className = "formSearch" type = "text" placeholder = "Enter Name" value = {this.state.newName} onChange = {this.updateNameText}/>
      <input required className = "formSearch" type = "text" placeholder = "Enter Type" value = {this.state.newType} onChange = {this.updateTypeText}/>
      <input required className = "formSearch" type = "number" placeholder = "Enter Stage" value = {this.state.newStage} onChange = {this.updateStageText}/>
      <input required className = "formSearch" type = "text" placeholder = "Enter Species" value = {this.state.newSpecies} onChange = {this.updateSpeciesText}/>
      <button className = "formSearch">Add</button>
     </form>
    );

  
  return (
      <div>
        <Helmet>
          <title>MyPokemonApp</title>
          <meta name="description" content="Description of MyPokemonApp" />
        </Helmet>
        <div>
          <div className="headingname">
            <h2>Redux Pokemon App</h2>
          </div>
          <div className="addnewpokemon">
            <button onClick={()=> this.props.onClickForm()}>ADD NEW POKEMON</button>
            {formPokemon}
          </div>
          

          <div>
            <input type="text" placeholder="Search By Name" value={this.state.name} className="search" onChange={this.nameSearch}></input>
            <input type="text" placeholder="Search By Type" value={this.state.type} className="search" onChange={this.typeSearch}></input>
          </div>
          
          <div>
            <table className="pokemontable">
              <thead>
                <tr className="tableheading">
                  <td>Name</td>
                  <td>Type</td>
                  <td>Stage</td>
                  <td>Species</td>
                  <td>Caught</td>
                </tr>
              </thead>
              <tbody>
              {newPokemonsList}
              </tbody>
              </table>
          </div>
          <div>
            <h4 className="caughtme">Shreya Kapoor</h4>
            <p className="caughtme">Pokemon Caught: {this.state.count}</p>
          </div>
        </div>
      </div>
    );
  }
}

MyPokemonApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myPokemon: makeSelectMyPokemonApp(),
  addNewValues:addNewValues(),
  pokemonCatch:  makeSelectOnClickRequest(),
  displayForm:displayForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getPokemonList:()=>dispatch(getPokemonList()),
    addNewPokemons : (data) => dispatch(addNewPokemons(data)),
    onClickRequest:(index)=>dispatch(onClickRequest(index)),
    onClickForm : () => dispatch(onClickForm()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'myPokemonApp', reducer });
const withSaga = injectSaga({ key: 'myPokemonApp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyPokemonApp);
