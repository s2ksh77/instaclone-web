import { useParams } from 'react-router';

const Profile = () => {
  const { username } = useParams();
  return <>Profile</>;
};

export default Profile;
