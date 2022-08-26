import { useState, useEffect } from "react";
import { client } from "../utils";

const Alert = () => {
  const [alert, setAlert] = useState([]);

  useEffect(() => {
    const query = '*[_type == "alert"] {description, active}';

    client.fetch(query).then((data) => {
      setAlert(data[0]);
    });
  }, []);

  if (!alert.active) return null;

  return (
    <div className="alert alert-info shadow-lg z-10 rounded-none pt-20">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{alert.description}</span>
      </div>
    </div>
  );
};
export default Alert;
