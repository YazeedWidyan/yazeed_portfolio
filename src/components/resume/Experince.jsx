import React from "react";

const Experince = ({ data }) => {
  const { title, subTitle, text, timeSpan } = data;

  return (
    <>
      <li>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
        <span>{timeSpan}</span>
        <p>{text}</p>
      </li>
    </>
  );
};

export default Experince;
