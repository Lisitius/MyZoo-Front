import React, { Component } from "react";
import TitleH1 from "../../../components/UI/Titles/TitleH1";
import sign from "../../../assets/images/sign.png";
import logo from "../../../assets/images/logo.png";

class Home extends Component {
  componentDidMount = () => {
    document.title = "Parc d'animaux MyZoo";
  };

  render() {
    return (
      <div>
        <img src={sign} alt="sign" className="img-fluid" />
        <TitleH1 bgColor="bg-success">
          Venez visitez le parc d'animaux MyZoo !
        </TitleH1>
        <div className="container">
          <p>
            Esse veniam tempor nostrud qui. Deserunt officia in eu veniam
            consectetur id irure. Culpa culpa ad ipsum quis voluptate pariatur
            cupidatat ex. Irure sit labore nulla occaecat tempor. Anim
            exercitation sunt Lorem mollit aute ut.
          </p>
          <p>
            Consequat laborum exercitation qui exercitation dolor exercitation
            ut deserunt sunt fugiat. Occaecat deserunt ea nostrud in. Aliquip ad
            occaecat est veniam irure. Adipisicing exercitation elit nulla
            incididunt.
          </p>
          <div className="row no-gutters align-items-center">
            <div className="col-12 col-md-6">
              <img src={logo} alt="logo du site" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6">
              Amet commodo quis et qui fugiat tempor velit pariatur ut consequat
              culpa cillum. Aliquip excepteur magna ullamco cupidatat mollit
              voluptate proident voluptate deserunt laborum. Duis fugiat nostrud
              magna incididunt cillum laboris elit deserunt. Lorem incididunt
              sit et laborum nisi ea mollit commodo pariatur esse. Voluptate ad
              amet nulla id tempor. Elit mollit elit est aliqua ex in nostrud ut
              adipisicing aute consequat sunt veniam. Excepteur veniam ipsum
              anim aute aliqua magna enim magna. Ullamco elit elit proident
              fugiat aute ad cillum. Cillum irure proident aliquip labore
              commodo irure. Aute est ex ex cupidatat voluptate aute. Ut ipsum
              officia adipisicing et eiusmod. Magna dolor deserunt aliquip non.
            </div>
            <div className="col-12 col-md-6">
              Amet commodo quis et qui fugiat tempor velit pariatur ut consequat
              culpa cillum. Aliquip excepteur magna ullamco cupidatat mollit
              voluptate proident voluptate deserunt laborum. Duis fugiat nostrud
              magna incididunt cillum laboris elit deserunt. Lorem incididunt
              sit et laborum nisi ea mollit commodo pariatur esse. Voluptate ad
              amet nulla id tempor. Elit mollit elit est aliqua ex in nostrud ut
              adipisicing aute consequat sunt veniam. Excepteur veniam ipsum
              anim aute aliqua magna enim magna. Ullamco elit elit proident
              fugiat aute ad cillum. Cillum irure proident aliquip labore
              commodo irure. Aute est ex ex cupidatat voluptate aute. Ut ipsum
              officia adipisicing et eiusmod. Magna dolor deserunt aliquip non.
            </div>
            <div className="col-12 col-md-6">
              <img src={logo} alt="logo du site" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
