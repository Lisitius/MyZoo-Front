import React, { Component } from "react";
import TitleH1 from "../../../components/UI/Titles/TitleH1";
import Animal from "./Animal/Animal";
import axios from "axios";

class Park extends Component {
  state = {
    animals: null,
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost/SERVEURANIMAUX/front/animals`)
      .then((response) => {
        this.setState({ animals: Object.values(response.data) });
      });
  };

  handleSelectionFamily = (idFamily) => {
    console.log(`Demande de ${idFamily}`);
  }

  handleSelectionContinent = (idContinent) => {
    console.log(`Demande de ${idContinent}`);
  }

  render() {
    return (
      <>
        <TitleH1 bgColor="bg-success">Les animaux du parc</TitleH1>
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
