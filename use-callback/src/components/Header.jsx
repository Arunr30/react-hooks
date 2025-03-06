import React from "react";

const Header = () => {
  console.log("header is changing");
  return <div> Header</div>;
};

export default React.memo(Header);
