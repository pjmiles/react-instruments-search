import React from "react";
import { useState } from "react";
import Images from "../Images";

const FunctionSearch = () => {
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let imageSearch = Images.imageData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div className="container">
      <div className="heading">
        <h1>Instruments search</h1>
      </div>

      <div className="search">
        <input
          type="text"
          id="search-box"
          placeholder="search here"
          value={filter}
          onChange={searchText.bind(this)}
        />
      </div>

      <div className="image-container">
      {imageSearch.map((item, index) => {
        return (
          
            <div className="image">
              <img src={item.img} alt="instr" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
        );
      })}
      </div>
      <div className="footer-section">
        <footer id="foot">
          Designed with &#10084; by{" "}
          <a
            href="https://github.com/pjmiles/react-instruments-search"
            target="_blank"
          >
            PonmileJames
          </a>
        </footer>
      </div>
    </div>
  );
};
export default FunctionSearch;
