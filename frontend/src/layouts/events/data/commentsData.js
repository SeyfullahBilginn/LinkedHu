// Images
// import kal from "assets/images/kal-visuals-square.jpg";
// import marie from "assets/images/marie.jpg";
// import ivana from "assets/images/ivana-square.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import pp from "assets/images/pp.jpg";

const commentsData = [
  {
    image: pp,
    name: "Sophie B.",
    description: "Hi! I am going to attend this amazing meeting..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: pp,
    name: "Anne Marie",
    description: "What a meeting",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: pp,
    name: "Ivanna",
    description: "It is recommended that you attend",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: pp,
    name: "Peterson",
    description: "It seems it will be amazing",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: pp,
    name: "Nick Daniel",
    description: "Hi! I need more information about this meeting. Could you please inform me ?",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
];

export default commentsData;
