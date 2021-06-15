import React, { useEffect } from "react";

import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounterAction,
  decrementCounterAction,
} from "./../actions/home.actions";

function Home() {
  const { count } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col text-center">
            <div className="btn-group ">
              <button
                className="btn btn-outline-warning spl"
                onClick={() => dispatch(incrementCounterAction())}
              >
                +
              </button>
              <button className="btn btn-outline-warning dis" disabled>
                {count}
              </button>
              <button
                className="btn btn-outline-warning spl"
                onClick={() => dispatch(decrementCounterAction())}
              >
                -
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
