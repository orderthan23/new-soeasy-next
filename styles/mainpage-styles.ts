import styled from 'styled-components';

const BannerArea = styled.div`
  margin-bottom: 50px;
`;

const QuickSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeListWrap = styled.div`
  width: 70%;
`;

const LocationList = styled.div`
  background-color: #ebebeb;
  padding: 10px;
  width: 30%;
  text-align: center;
  border-radius: 10px;
  height: 250px;

  & table {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 95%;
  }
`;

const ThemeList = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  & .theme {
    background: #e9f6fd;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 100px;
    text-align: center;

    & > a {
      display: block;
      margin-top: 30px;
    }

    &:hover {
      border: 1px solid #3db6ae;

      & > a {
        color: #3db6ae;
        font-weight: bold;
      }
    }
  }
`;

const CardList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & .card {
    width: 300px;
    margin-bottom: 30px;

    &:hover {
      background: #ebebeb;
      border-radius: 5px;

      & .spaceName {
        color: #3db6ae;
      }
    }

    & > img {
      width: 100%;
      height: 200px;
      max-height: 200px;
      border-radius: 5px;
    }
  }
`;

const SpaceName = styled.p`
  font-weight: bold;
  color: #000000;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 95%;
  white-space: nowrap;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SpacePrice = styled.p`
  font-size: 13px;
  color: gray;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const mainStyle = {
  BannerArea,
  QuickSearch,
  ThemeListWrap,
  LocationList,
  ThemeList,
  CardList,
  SpaceName,
  SpacePrice,
};

export default mainStyle;
