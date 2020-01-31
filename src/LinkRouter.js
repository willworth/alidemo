/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
// LinkBehavior is Probably not necessary https://reactjs.org/docs/forwarding-refs.html

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/BasicTimePicker/" {...props} />
));

export default function LinkRouter() {
  return (
    <Router>
      <div>
        <Link component={RouterLink} to="/">
          With prop forwarding
        </Link>
        <Link component={RouterLink} to="/1">
          go to 1
        </Link>
        <Link component={RouterLink} to="/2">
          go to 2
        </Link>
        <Button variant="contained" component={RouterLink} to="/1">
          button 1
        </Button>
        <br />
        <Link component={LinkBehavior}>BasicTimePicker</Link>
      </div>
    </Router>
  );
}
