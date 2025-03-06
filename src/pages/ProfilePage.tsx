import AddTask from "../components/AddTask";
import { Stadistics } from "../components/Stadistics";
import TasksList from "../components/TaskList";
import { UserInfo } from "../components/UserInfo";



function ProfilePage() {
  return (
    <>
      <UserInfo />
      <Stadistics />
      <AddTask />
      <TasksList />
    </>
  );
}

export default ProfilePage;
