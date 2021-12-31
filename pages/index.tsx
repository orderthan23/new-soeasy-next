import type { NextPage } from 'next';

import Slider, {
  SliderImageProps,
  SliderSettingProps,
} from '../components/common/Slider';
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

const slideSeting: SliderSettingProps = {
  className: 'banner',
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
  autoplay: { delay: 5000 },
};

const imageList: SliderImageProps[] = [
  {
    url: '/images/space1-1.jpg',
    name: '이미지1',
  },
  {
    url: '/images/space1-2.jpg',
    name: '이미지2',
  },
  {
    url: '/images/space1-3.jpg',
    name: '이미지3',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <BannerArea>
        <Slider setting={slideSeting} imageList={imageList} />
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
