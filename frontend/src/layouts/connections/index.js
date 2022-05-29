import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";

import { useEffect, useState } from "react";
import UserService from "services/UserService";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout/index";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar/index";
import ConnectionCard from "./connectionCard";
import { useAuth } from "../../contexts/AuthContext";

function Connections() {
  const [users, setUsers] = useState([]);
  const { userCookie, fetchUserToCookie } = useAuth();

  async function getUsers() {
    UserService.getUsersWithoutId(userCookie.user.id).then((res) => {
      setUsers(res.data);
    });
  }

  useEffect(async () => {
    await getUsers();
    await fetchUserToCookie();
  }, []);

  if (!users && !userCookie.user.friends) {
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <div>LOADİNG</div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            {users.map((user) => (
              <Grid item xs={12} sm={6} xl={3} key={user.id}>
                <ConnectionCard user={user} />
              </Grid>
            ))}
          </Grid>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Connections;
