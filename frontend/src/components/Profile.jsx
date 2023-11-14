import { useSelector } from "react-redux";

const Profile = () => {
  const { logedInUser } = useSelector((state) => state.app);

  if (!logedInUser) {
    // Handle the case where the user is not logged in
    return;
  } else {
    return (
      <div className="flex items-center flex-col">
        {logedInUser.photoURL && (
          <img
            src={logedInUser.photoURL}
            alt="User Profile"
            className="rounded-full h-14 w-14 "
          />
        )}
       
      </div>
    );
  }
};

export default Profile;
