import React, { useEffect } from "react";
import { data, useParams } from "react-router-dom";
import { useGlobalState } from "./context";
import ConnectingDefinitions from "./Games/ConnectingDefinitions/ConnectingDefinitions";

const LogContextData = () => {
  const { token, id } = useGlobalState();

  useEffect(() => {
    console.log("Token:", token);
    console.log("ID:", id);
  }, [token, id]);

  return (
    <>
      <ConnectingDefinitions />
    </>
  );
};

export default LogContextData;
