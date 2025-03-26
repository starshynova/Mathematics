import React, { useEffect, useState, useContext } from "react";
import "./component.css";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { MethodContext } from "../context/MethodContext.jsx";
import { API_ROUTES } from "../config/apiRoutes";

const OperationList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const context = useContext(MethodContext);
  if (!context) {
    return <div>Error: Method context not available</div>;
  }
  const { method } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ROUTES.GET_OPERATIONS);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading operations...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="operation-list" key={method}>
      {method &&
        data.map((question) => (
          <Link
            to={
              method === "answer"
                ? `/${question.operation}`
                : `/quiz/${question.operation}`
            }
            key={question.operation}
          >
            <Button
              className="operation-button"
              title={
                question.operation.charAt(0).toUpperCase() +
                question.operation.slice(1)
              }
            />
          </Link>
        ))}
    </div>
  );
};

export default OperationList;
