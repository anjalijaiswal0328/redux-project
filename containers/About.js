import React, { useEffect } from "react";
import "./about.css";
import { useSelector, useDispatch } from "react-redux";
import store from "./../store";
import { UPDATE_TITLE } from "../constants";

export default function About() {
  const { title } = useSelector((state) => state.about);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: UPDATE_TITLE,
        payload: "HEyy UNIVERSE",
      });
    }, 1000);
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col text-center coll">
            <h2>{title}</h2>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
