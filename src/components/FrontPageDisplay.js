import React from "react";
import SearchBar from "./SearchBar";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const FrontPageDisplay = () => {
  return (
    <div className="orignalBackground">
      <SearchBar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 frontPageTitle">
            <h1>Check your Weather</h1>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "8%" }}>
          <div className="col-12 col-sm-9 col-md-5">
            <Card className="weatherCard">
              <CardBody>
                <CardTitle>
                  <h3 style={{ textAlign: "center" }}>What is Weather ?</h3>
                </CardTitle>
                <hr />
                <CardText style={{ textAlign: "justify" }} tag="h5">
                  Weather is the mix of events that happen each day in our
                  atmosphere. Weather is different in different parts of the
                  world and changes over minutes, hours, days and weeks. Most
                  weather happens in the troposphere, the part of Earth’s
                  atmosphere that is closest to the ground.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPageDisplay;
