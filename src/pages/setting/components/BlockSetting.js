import React from "react";

const BlockSetting = ({ tittle, children }) => {
  return (
    <div>
      <h2 className="pt-7 font-semibold">{tittle}</h2>
      <div>{children}</div>
    </div>
  );
};

export default BlockSetting;
