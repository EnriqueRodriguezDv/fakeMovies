import React from "react";
import { withRouter } from "next/router";

const OneMovie = (props) => {
  const { router } = props;
  console.log(router.query.id);
  return <div>funciona</div>;
};

export default withRouter(OneMovie);
