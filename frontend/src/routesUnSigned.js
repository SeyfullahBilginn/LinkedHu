// import Home from "layouts/home";
// import Meetings from "layouts/meetings";
// import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
// import CustomerSupport from "examples/Icons/CustomerSupport";
// import SlideshowIcon from "@mui/icons-material/Slideshow";
// import VideocamIcon from "@mui/icons-material/Videocam";
// import EventIcon from "@mui/icons-material/Event";
// import Jobs from "./layouts/jobs/index";
// import Events from "./layouts/events/index";
// import CreatePost from "./layouts/createPost/index";

const routesUnSigned = [
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
    allow: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <Document size="12px" />,
    component: <SignUp />,
    noCollapse: true,
    allow: true,
  },
];

export default routesUnSigned;
