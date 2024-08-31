import React from "react";
import Card from "@/components/UI/Card";

const Posts = () => {
  let items = [];
  for (let i = 0; i < 2500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return (
    <>
      <h3>Posts</h3>
      <div className="d-flex justify-content-center">
        <ul style={{ listStyle: "none" }}>
          <li>{items}</li>
        </ul>
      </div>
    </>
  );
};

function SlowPost({ index }) {
  for (let index = 0; index < 2000000; index++) {}

  return (
    <Card className="mb-3 p-3" style={{ width: "20rem" }}>
      {/* <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder rounded col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <div className="placeholder-glow"></div>
        <a
          className="btn btn-primary disabled placeholder col-6"
          aria-disabled="true"
        >
          Post #{index + 1}
        </a>
      </div> */}
      Post #{index + 1}
    </Card>
  );
}

export default React.memo(Posts);
