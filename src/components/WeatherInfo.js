import moment from "moment";
import React from "react";

const WeatherInfo = (props) => {
  const weather = props.weather;
  var t; //= new Date(weather.dt)
  var formatted; //= moment(t*1000).format("D MMM YY")

  if (weather) {
    t = new Date(weather.dt);
    formatted = moment(t * 1000).format("D MMM YY");
  }
  return weather ? (
    <div className="weatherInfoBackground">
      <div className="container">
        <div className="row weatherBlock">
          <div className="col-12 col-sm-9 col-md-5 weatherHeader">
            <h2 className="weatherHeaderHeading">{weather.name}</h2>
          </div>
        </div>
        <div className="row weatherBlock">
          <div className="col-8 col-sm-7 col-md-3 tempBlock">
            <h1 className="tempHeading">{Math.round(weather.main.temp)}°C</h1>
          </div>
        </div>
        <div className="row weatherBlock">
          <div className="col-12">
            <div className="row">
              <div className="col-4 col-sm-6 col-md-4 tempDescription">
                <section className="row">
                  <div className="col-md-7">
                    <h5 className="tempDesWriting">
                      Temp-max: {Math.round(weather.main.temp_max)}
                    </h5>
                  </div>
                </section>
                <section className="row">
                  <div className="col-md-7">
                    <h5 className="tempDesWriting">
                      Temp-min: {Math.round(weather.main.temp_min)}
                    </h5>
                  </div>
                </section>
                <section className="row">
                  <div className="col-md-7">
                    <h5 className="tempDesWriting">
                      Humidity: &nbsp;{Math.round(weather.main.humidity)}
                    </h5>
                  </div>
                </section>
              </div>
              <div className="col-4 col-sm-6 col-md-4 dayDescription">
                <section className="row">
                  <div className="col-md-7">
                    <h5 className="tempDesWriting">Date: {formatted}</h5>
                  </div>
                </section>
                <section className="row">
                  <div className="col-md-7">
                    <h5 className="tempDesWriting">
                      Des: {weather.weather[0].description}
                    </h5>
                  </div>
                </section>
                <section className="row">
                  <div className="col-md-7">
                    <h5 className="tempDesWriting">
                      Wind-Speed: {Math.round(weather.wind.speed)}m/s
                    </h5>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="errorMessage">
        <h1>Error 404</h1>
        <h1>Please check the city name</h1>
      </div>
    </>
  );
};

export default WeatherInfo;
