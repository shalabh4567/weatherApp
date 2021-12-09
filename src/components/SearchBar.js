import React, { useState } from "react";
import { Form, Input, FormGroup } from "reactstrap";
import { Drawer } from "antd";
import WeatherInfo from "./WeatherInfo";

const SearchBar = () => {
  const [cityName, setCityName] = useState("");
  const [visible, setVisible] = useState(false);
  const [weather, setWeather] = useState({});
  const [err, setErrors] = useState("");

  function fetchData(cityName) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WA_APIKEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.cod === 200) {
          setWeather(res);
          setVisible(true);
        } else if (res.cod === 404) {
          setWeather(null);
          setVisible(true);
        }

        setCityName("");
      })
      .catch((err) => {
         console.log(err);
        setErrors(err);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName) {
      fetchData(cityName);
    } else {
      alert("Enter the city name");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 searchRow">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="text"
                  id="cityName"
                  placeholder="Search by city name"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  style={{
                    boxShadow: "3px 3px 3px 3px rgba(85, 85, 190, 0.5)",
                  }}
                />
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
      <Drawer
        height="95%"
        onClose={() => setVisible(false)}
        placement="bottom"
        closable={false}
        visible={visible}
      >
        <WeatherInfo weather={weather} />
      </Drawer>
    </>
  );
};

export default SearchBar;
