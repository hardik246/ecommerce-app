import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ViewProduct() {
  const view = useSelector((state) => state.getReducer.viewItem);
  console.log(view);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        {view.map((data, i) => {
          return (
            <>
              <div className="flex" style={{ display: "flex" }}>
                <div className="left">
                  <div className="image">
                    <img
                      src={data.image}
                      style={{ width: "250px", height: "400px" }}
                    ></img>
                  </div>
                </div>
                <div
                  className="right"
                  style={{ marginTop: "10%", textAlign: "start" }}
                >
                  <h3>
                    <span style={{ color: "red" }}>Title: </span>
                    {data.title}
                  </h3>
                  <h3>
                    <span style={{ color: "red" }}>Name: </span>
                    {data.name}
                  </h3>
                  <h3>
                    <span style={{ color: "red" }}>Description: </span>
                    {data.description}
                  </h3>
                  <h3>
                    <span style={{ color: "red" }}>Price: </span>
                    {data.price}
                  </h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ViewProduct;
