import Home from "layouts/home";
import Presentations from "layouts/presentations";
import Meetings from "layouts/meetings";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import Events from "./layouts/events/index";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <Shop size="12px" />,
    component: <Home />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Presentations",
    key: "presentations",
    route: "/presentations",
    icon: <SlideshowIcon size="12px" />,
    component: <Presentations />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Meetings",
    key: "meetings",
    route: "/meetings",
    icon: <VideocamIcon size="12px" />,
    component: <Meetings />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Events",
    key: "events",
    route: "/events",
    icon: <EventIcon size="12px" />,
    component: <Events />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <Document size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
