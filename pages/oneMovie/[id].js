import React from "react";
import { withRouter } from "next/router";

import config from "../../config";

const OneMovie = (props) => {
  const { router } = props;
  console.log(router.query.id);
  return <div>funciona</div>;
};

export default withRouter(OneMovie);
