import React from "react";

export default function Section({ title, body, blue, id }) {
  return (
    <div className={"section"}>
      <div className={(blue ? " section-content-blue" : "section-content")} id={id}>
        <div>{body}</div>
      </div>
    </div>
  );
}
