import Header from './Header';
import styled from 'styled-components';

const Content = styled.main`
  margin: 0 auto;
  margin-top: 45px;
  width: 100%;
  max-width: 930px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
