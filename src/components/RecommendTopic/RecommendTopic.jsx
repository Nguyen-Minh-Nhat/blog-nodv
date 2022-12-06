import { Chip } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getRecommendTopic } from "../../api/userApi";

const RecommendTopic = () => {
  const { data: userTopics } = useQuery("topics1", () => getRecommendTopic());
  console.log(userTopics);
  return (
    <>
      <div className="mt-5">
        <h2 className="m-0 mb-5 block text-base font-medium leading-5">
          Recommended Topic
        </h2>
        {userTopics &&
          userTopics.map((item) => (
            <Link to="/datdz">
              <Chip
                label={item.name}
                className="mr-2 mb-5 cursor-pointer p-0 py-2 px-4 font-medium"
                // onClick={handleClick}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default RecommendTopic;
