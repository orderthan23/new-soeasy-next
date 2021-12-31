import type { NextPage } from 'next';

import mainStyle from '../styles/mainpage-styles';

const {
  BannerArea,
  QuickSearch,
  ThemeListWrap,
  LocationList,
  ThemeList,
  CardList,
  SpaceName,
  SpacePrice,
} = mainStyle;
const Home: NextPage = () => {
  return (
    <>
      <BannerArea>
        <img src="/images/banner.png" height="300px" width="100%" />
      </BannerArea>
      <QuickSearch>
        <ThemeListWrap>
          <h2>테마전!</h2>
          <ThemeList>
            <div className="theme">
              <a>
                외근이 잦아요!
                <br />
                코워킹 스페이스
              </a>
            </div>
            <div className="theme">
              <a>
                직원이 많아요!
                <br />
                임대 사무실
              </a>
            </div>
            <div className="theme">
              <a>
                하루만 이용!
                <br />
                코워킹 라운지
              </a>
            </div>
          </ThemeList>
        </ThemeListWrap>
        <LocationList>
          <table>
            <tr>
              <td colSpan={4}>
                <h2>지역별 검색</h2>
              </td>
            </tr>
            <tr>
              <td>
                <a>종로구</a>
              </td>
              <td>
                <a>강남구</a>
              </td>
              <td>
                <a>서초구</a>
              </td>
              <td>
                <a>관악구</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>종로구</a>
              </td>
              <td>
                <a>강남구</a>
              </td>
              <td>
                <a>서초구</a>
              </td>
              <td>
                <a>관악구</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>종로구</a>
              </td>
              <td>
                <a>강남구</a>
              </td>
              <td>
                <a>서초구</a>
              </td>
              <td>
                <a>관악구</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>종로구</a>
              </td>
              <td>
                <a>강남구</a>
              </td>
              <td>
                <a>서초구</a>
              </td>
              <td>
                <a>관악구</a>
              </td>
            </tr>
          </table>
        </LocationList>
      </QuickSearch>
      <div id="spaceArea">
        <h1>NOW 인기공간</h1>
        <CardList>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              매우 매우 이름이 긴
              코워킹스페이스스스스스스스스스스스스스스스스스스스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
          <a className="card">
            <img src="/images/areasample.png" />
            <SpaceName className="spaceName">
              성수동 인생공간 코워킹스페이스
            </SpaceName>
            <SpacePrice>300,000 / 1개월</SpacePrice>
          </a>
        </CardList>
      </div>
    </>
  );
};

export default Home;
