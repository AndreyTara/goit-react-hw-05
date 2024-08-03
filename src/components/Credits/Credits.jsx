import React, { useState, useEffect } from "react";
import { fetchCredits } from "./../services/api.js";
import { useParams } from "react-router-dom";

const Credits = () => {
  const params = useParams();
  const [actors, setActors] = useState([]);
  const movieId = params.id;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchCredits({ movieId });
        // setActors(response)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {console.log(actors.length)}
      Credits
    </div>
  );
};

export default Credits;
