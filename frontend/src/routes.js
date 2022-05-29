import Home from "layouts/home";
import Meetings from "layouts/meetings";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GroupIcon from "@mui/icons-material/Group";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FreeAccessCreatePost from "layouts/createPost/freeAccessCreatePost";
import RestrictedAccessCreatePost from "layouts/createPost/restrictedAcessCreatePost";
import Jobs from "./layouts/jobs/index";
import Events from "./layouts/events/index";
import EventDetail from "./layouts/events/EventDetail";
import JobDetail from "./layouts/jobs/JobDetail";
import MeetingDetail from "./layouts/meetings/MeetingDetail";
import Connections from "./layouts/connections/index";
import OtherProfile from "./layouts/profile/otherProfile";
import Chat from "./layouts/chat/index";
import EditProfile from "./layouts/profile/editProfile/index";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <HomeIcon size="12px" />,
    component: <Home />,
    noCollapse: true,
    allow: false,
  },
  {
    type: "collapse",
    name: "Jobs",
    key: "jobs",
    route: "/jobs",
    icon: <WorkIcon size="12px" />,
    component: <Jobs />,
    noCollapse: true,
    allow: false,
  },
  {
    // type: "collapse",
    name: "Jobs",
    key: "jobs",
    route: "/jobs/:jobId",
    icon: <WorkIcon size="12px" />,
    component: <JobDetail />,
    noCollapse: true,
    allow: false,
  },
  {
    type: "collapse",
    name: "Meetings",
    key: "meetings",
    route: "/meetings",
    icon: <VideocamIcon size="12px" />,
    component: <Meetings />,
    noCollapse: true,
    allow: false,
  },
  {
    // type: "collapse",
    name: "Meetings",
    key: "meetings",
    route: "/meetings/:meetingId",
    icon: <VideocamIcon size="12px" />,
    component: <MeetingDetail />,
    noCollapse: true,
    allow: false,
  },
  {
    type: "collapse",
    name: "Events",
    key: "events",
    route: "/events",
    icon: <EventIcon size="12px" />,
    component: <Events />,
    noCollapse: true,
    allow: false,
  },
  {
    name: "Events",
    key: "events",
    route: "/events/:eventId",
    component: <EventDetail />,
    noCollapse: true,
    allow: false,
  },
  {
    type: "collapse",
    name: "Connections",
    key: "connections",
    route: "/connections",
    icon: <GroupIcon size="12px" />,
    component: <Connections />,
    noCollapse: true,
    allow: false,
  },
  {
    name: "Profile",
    key: "otherProfile",
    route: "/connections/:userId",
    component: <OtherProfile />,
    noCollapse: true,
    allow: false,
  },
  {
    type: "collapse",
    name: "Chat",
    key: "chat",
    route: "/chat",
    icon: <ChatBubbleIcon size="12px" />,
    component: <Chat />,
    noCollapse: true,
    allow: false,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <PersonIcon size="12px" />,
    component: <Profile />,
    noCollapse: true,
    allow: false,
  },
  {
    // type: "collapse",
    name: "UpdateProfile",
    key: "updateProfile",
    route: "/profile/edit",
    icon: <PersonIcon size="12px" />,
    component: <EditProfile />,
    noCollapse: true,
    allow: false,
  },
  {
    // type: "collapse",
    name: "Create New Post",
    key: "create-new- post",
    route: "/create-new-post-free-access",
    component: <FreeAccessCreatePost />,
    noCollapse: true,
    allow: false,
  },
  {
    // type: "collapse",
    name: "Create New Post",
    key: "create-new- post",
    route: "/create-new-post-restricted-access",
    component: <RestrictedAccessCreatePost />,
    noCollapse: true,
    allow: false,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <VpnKeyIcon size="12px" />,
    component: <SignIn />,
    noCollapse: true,
    allow: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <AccountCircleIcon size="12px" />,
    component: <SignUp />,
    noCollapse: true,
    allow: true,
  },
];

export default routes;
