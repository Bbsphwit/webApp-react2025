import { use } from "react";
import { useLocation } from "react-router-dom";

export default function Hello(props) {
  const urlString = new URLSearchParams(useLocation().search);
  const name = urlString.get("name");
  const surname = urlString.get("surname");

  return (
    <>
      <div>
        <h1>
          Hello {name} {surname}
        </h1>
        <hr></hr>
      </div>
    </>
  );
}
