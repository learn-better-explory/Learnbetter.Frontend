import React, { useEffect } from "react";
import { useGlobalState } from "./context";

const LogContextData = () => {
  const { token, id } = useGlobalState();

  useEffect(() => {
    console.log("Token:", token);
    console.log("ID:", id);
  }, [token, id]);

  return null;
};

export default LogContextData;
