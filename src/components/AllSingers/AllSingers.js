import React, { useEffect, useState } from "react";
import Singer from "../Singer/Singer";
import SelectedSingers from "../SlectedSingers/SelectedSingers";
import "./AllSingers.css";

const AllSingers = () => {
  const [singers, setSingers] = useState([]);
  const [selecteds, setSelecteds] = useState([]);

  useEffect(() => {
    fetch("./singers.JSON")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);

  // add button handler
  const handleSelectSinger = (singer) => {
    const duplicataSinger = selecteds.find((select) => select.id === singer.id);
    if (duplicataSinger) {
      alert("This singer already added");
      return;
    }
    const newSelecteds = [...selecteds, singer];
    setSelecteds(newSelecteds);
  };

  return (
    <div className="singers-container">
      <div className="all-singers">
        {singers.map((singer) => (
          <Singer
            key={singer.id}
            singer={singer}
            handleSelectSinger={handleSelectSinger}
          ></Singer>
        ))}
      </div>

      <div className="selected-singers">
        <SelectedSingers selecteds={selecteds}></SelectedSingers>
      </div>
    </div>
  );
};

export default AllSingers;
