import { useAuth } from "contexts/AuthContext";
import { useEffect } from "react";
import ChatService from "services/ChatService";
import SuiButton from "components/SuiButton";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout/index";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar/index";

function Chat() {
  const { userCookie } = useAuth();
  useEffect(() => {
    ChatService.getChatBySenderId(userCookie.user.id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function run() {
    console.log("run");
    ChatService.createChat(6, 13, "second message")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiButton onClick={() => run()}>button</SuiButton>
    </DashboardLayout>
  );
}

export default Chat;
