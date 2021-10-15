import { useHistory } from 'react-router';
import { logUserOut } from '../apollo';
import { useReactiveVar, gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Avatar from '../components/Avatar';
import { FatText } from '../components/shared';

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      createdAt
      isMine
    }
  }
`;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(porps) => porps.theme.borderColor};
  margin-bottom: 20px;
`;
const PhotoHeader = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 5px;
`;

const PhotoFooter = styled.div``;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);
  const history = useHistory();
  return (
    <div>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer key={photo?.id}>
          <PhotoHeader>
            <Avatar url={photo?.user?.avata} />
            <Username>{photo?.user?.username}</Username>
          </PhotoHeader>
        </PhotoContainer>
      ))}
    </div>
  );
};

export default Home;
