import React from "react";
import TitleH1 from "../UI/Titles/TitleH1";

const Error = (props) => (
  <>
    <TitleH1 bgColor="bg-danger">Erreur {props.type}</TitleH1>
    <div>{props.children}</div>
  </>
);

export default Error;
