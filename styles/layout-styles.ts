import styled from 'styled-components';

const SoEasyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid lightgray;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  background-color: #ffffff;
`;
const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputSearch = styled.div`
  position: relative;
  width: 400px;
  margin-left: 60px;

  & > input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid lightgray;
    height: 37px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .fa-search {
    position: absolute;
    right: 16px;
    top: 10px;
    margin: 0;
  }
`;

const SubMenus = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const ToggleMenu = styled.button`
  width: 3%;
  height: 40px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding: 0px 10px 0px 0px;
  z-index: 1;
  margin-right: 10px;
  margin-left: 10px;

  .bar {
    display: block;
    width: 30px;
    height: 4px;
    margin-bottom: 6px;
    background: #343333;
    border-radius: 1px;
  }

  &:focus ~ .navWrap > .megaMenu {
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
  }

  .navWrap {
    position: relative;
    width: 5%;
    display: inline-block;
  }
`;

const NavWrap = styled.div`
  position: relative;
  width: 5%;
  display: inline-block;

  & h1 {
    position: absolute;
    padding-top: 6px;
    margin: 0;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bolder;
    z-index: 1;

    label {
      margin-right: 150px;
      font-size: 30px;
    }
  }
`;

const ProfileZone = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SubTitle = styled.li`
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  margin: 20px auto 5px auto;
  text-decoration: none;
  list-style: none;
  width: 80%;

  & a:hover {
    color: #fff;
  }
`;

const InfoZone = styled.li`
  text-align: center;
  font-size: 15px;
  font-weight: 800;
  padding: 10px 0;
`;

const MainTitle = styled.li`
  text-decoration: none;
  list-style: none;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const SubNav = styled.a`
  font-size: 16px;
  font-weight: bolder;
  color: black;
  text-align: center;
  text-decoration: none;
  background: #3db6ae;
  width: 90%;
  transition: all 1s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
`;

const MainNav = styled.a`
  font-size: 20px;
  font-weight: bolder;
  color: black;
  text-align: center;
  text-decoration: none;
  background: #3db6ae;
  width: 90%;

  &:hover {
    color: black;
  }
`;

const MegaMenu = styled.ul`
  transform: translateX(-270px);
  -ms-transform: translateX(-270px);
  -o-transform: translateX(-270px);
  -webkit-transform: translateX(-270px);
  -moz-transform: translateX(-270px);
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  list-style-type: none;
  padding: 50px 0 0 0;
  margin: 0;
  top: 0px;
  left: 0;
  background: #3db6ae;
  position: fixed;
  width: 250px;
  height: 100%;
  z-index: 100;
  overflow: scroll;
  border-right: 1px solid lightgray;
  box-shadow: 2px 2px 50px 3px;
  -webkit-box-shadow: 2px 2px 50px 3px #000;
  -moz-box-shadow: 2px 2px 50px 3px #000;
  -ms-box-shadow: 2px 2px 50px 3px #000;
  -o-box-shadow: 2px 2px 50px 3px #000;
`;

//footer

const SoEasyFooter = styled.footer`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #c4c4c4;
  text-align: center;
`;

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
`;

const FooterText = styled.div`
  font-size: 12px;
  text-align: left;
`;

//defaultLayout

const Container = styled.div`
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 10px 0px 10px;
  min-height: 100%;
`;

const ContentArea = styled.section`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  min-height: 760px;
  margin-bottom: 100px;
  position: relative;
`;

//Header
export const HeaderStyles = {
  SoEasyHeader,
  InputArea,
  InputSearch,
  SubMenus,
};

//SideBar
export const SideBarStyles = {
  ToggleMenu,
  NavWrap,
  ProfileZone,
  SubTitle,
  InfoZone,
  MainTitle,
  SubNav,
  MainNav,
  MegaMenu,
};

//Footer
export const FooterStyles = {
  SoEasyFooter,
  FooterWrap,
  FooterText,
};

//DefaultLayout
export const DefaultLayoutStyles = {
  Container,
  ContentArea,
};
