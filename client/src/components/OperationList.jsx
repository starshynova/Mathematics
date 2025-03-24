import React, { useEffect, useState, useContext } from 'react';
import './component.css';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';
import { MethodContext } from '../context/MethodContext.jsx';

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
    console.log("Updated method in OperationList:", method);
  }, [method]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://react-project-t4ti.onrender.com/api/math-operation");
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
      {!method ? (
        <div>Please select a method above</div>
      ) : (
        data.map((question) => (
          <Link 
            to={method === "answer" 
              ? `/${question.operation}` 
              : `/quiz/${question.operation}`}
            key={question.operation}
          >
            <Button
              className="operation-button"
              title={question.operation.charAt(0).toUpperCase() + question.operation.slice(1)}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default OperationList;