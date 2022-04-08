import React, { Component } from "react";
import TitleH1 from "../../../components/UI/Titles/TitleH1";
import Animal from "./Animal/Animal";
import axios from "axios";
import Button from "../../../components/UI/Button/Button"

class Park extends Component {
  state = {
    animals: null,
    filterFamily: null,
    filterContinent: null,
  };

  loadData = () => {
    const famille = this.state.filterFamily ? this.state.filterFamily : "-1";
    const continent = this.state.filterContinent ? this.state.filterContinent : "-1";
    axios
    .get(`http://localhost/SERVEURANIMAUX/front/animals/${famille}/${continent}`)
    .then((response) => {
      this.setState({ animals: Object.values(response.data) });
    });
  }

  componentDidMount = () => {
    this.loadData();
  };

  componentDidUpdate = (oldProps,oldState) => {
    if (oldState.filterFamily !== this.state.filterFamily || oldState.filterContinent !== this.state.filterContinent){
      this.loadData();
    }
  }

  handleSelectionFamily = (idFamily) => {
    console.log(`Demande de ${idFamily}`);
    this.setState({filterFamily: idFamily});
  }

  handleSelectionContinent = (idContinent) => {
    console.log(`Demande de ${idContinent}`);
    this.setState({filterContinent: idContinent});
  }

  handleResetFilterFamily = () => {
    this.setState({filterFamily: null});
  }

  handleResetFilterContinent = () => {
    this.setState({filterContinent: null});
  }

  render() {
    return (
      <>
        <TitleH1 bgColor="bg-success">Les animaux du parc</TitleH1>
        {
          (this.state.filterFamily || this.state.filterContinent) && <span>Filtres : </span>
        }
        {
          this.state.filterFamily &&
          <Button 
          typeBtn="btn-secondary" 
          clic = {this.handleResetFilterFamily}>
          {this.state.filterFamily} &nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
          </Button>
        }
        {
          this.state.filterContinent &&
          <Button 
          typeBtn="btn-secondary" 
          clic = {this.handleResetFilterContinent}>
          {this.state.filterContinent} &nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
          </Button>
        }
        <div className="container-fluid">
          <div className="row no-gutters">
            {this.state.animals &&
              this.state.animals.map((animal) => {
                return (
                  <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                    <Animal {...animal}
                    filterFamily = {this.handleSelectionFamily} 
                    filterContinent = {this.handleSelectionContinent} 
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Park;
