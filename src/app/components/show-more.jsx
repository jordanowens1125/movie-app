"use client";
import "./show-more.scss";
import { useState } from "react";

export default function ShowMore({ text, length = 200, className = "text" }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {text.length > length ? (
        <p className={`${className} show`}>
          {show ? (
            <>
              {text}
              <br />
              <br />
            </>
          ) : (
            <>{text.slice(0, length)}...&nbsp; &nbsp; </>
          )}
          <span onClick={() => setShow(!show)}>
            {show ? "Show Less" : "Show More"}
          </span>
        </p>
      ) : (
        <p className={className}>{text}</p>
      )}
    </>
  );
}
