import React from "react";

export default function HalfSection({ title, body, blue, id }) {
  return (
    <div className={(blue ? " halfsectionblue" : "halfsection")}>
        {body}
    </div>
  );
}