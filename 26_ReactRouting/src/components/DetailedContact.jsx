import React from "react";
import { useParams } from "react-router-dom";

const DetailedContact = () => {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <h3>DetailedContact for : {param.contactid}</h3>
    </div>
  );
};

export default DetailedContact;
