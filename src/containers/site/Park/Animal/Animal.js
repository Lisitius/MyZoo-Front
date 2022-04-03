import React from "react";
import Button from "../../../../components/UI/Button/Button";

const Animal = (props) => (
  <>
    <div className="card mb-3">
      <h3 className="card-header">
        {props.id} - {props.name}
      </h3>
      <div className="card-body">
        <div className="card-text">{props.description}</div>
      </div>
      <div className="text-center" style={{ height: "100px" }}>
        <img src={props.image} alt={props.name} className="img-fluid h-100" />
      </div>
      <div className="card-body">
        <h3>
          Famille :{" "}
          <Button typeBtn="btn-primary">
            {props.famille.wordingFamily.toUpperCase()}
          </Button>
        </h3>
        <div>{props.famille.descriptionFamily}</div>
      </div>
      <div className="card-body">
        <h3>Continents : </h3>
        {
            props.continents.map(continent => {
              let colorBtn = "";
              switch(continent.idContinent){
                case "1" : colorBtn="btn-primary";
                break;
                case "2" : colorBtn="btn-danger";
                break;
                case "3" : colorBtn="btn-warning";
                break;
                case "4" : colorBtn="btn-success";
                break;
                case "5" : colorBtn="btn-secondary";
                break;
                default : colorBtn = "btn-info";
              }
              return <Button typeBtn={colorBtn} css="m-1" key={continent.idContinent}>{continent.wordingContinent}</Button>
            })
        }
      </div>
    </div>
  </>
);

export default Animal;
