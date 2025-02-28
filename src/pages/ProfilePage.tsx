import UserInfo from "../components/UserInfo";
import Stadistics from "../components/Stadistics";
import NewTask from "../components/NewTask";
import TasksList from "../components/TasksList";


function ProfilePage() {
  return (
    <>
      <UserInfo />
      <Stadistics />
      <NewTask />
      <TasksList />
    </>
  );
}

export default ProfilePage;
