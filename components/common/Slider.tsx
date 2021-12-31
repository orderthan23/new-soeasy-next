import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'; // 추가
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

export interface SliderSettingProps {
  className: string;
  spaceBetween: number;
  slidesPerView: number;
  navigation: boolean;
  pagination: { clickable: boolean };
  autoplay: { delay: number };
}

export interface SliderImageProps {
  url: string;
  name: string;
}

export interface SliderProps {
  setting: SliderSettingProps;
  imageList: SliderImageProps[];
}

const SlideImage = styled.img`
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
`;

const FixedText = styled.h1`
  position: absolute;
  top: 50%;
  color: white;
  font-size: 50px;
  font-weight: 800;
  z-index: 1;
  left: 50%;
  text-align: center;
  background-color: transparent;
  transform: translate(-50%, -50%);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

const Slider = ({ setting, imageList }: SliderProps) => {
  return (
    <Swiper
      className={setting.className}
      spaceBetween={setting.spaceBetween}
      slidesPerView={setting.slidesPerView}
      navigation={setting.navigation}
      pagination={{ clickable: setting.pagination.clickable }}
      autoplay={{ delay: setting.autoplay.delay }} // 추가
    >
      {imageList.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <SlideImage src={image.url} alt={image.name} />
          </SwiperSlide>
        );
      })}
      <FixedText>
        쉽게 공유오피스 찾을 땐<br />
        SO Easy!
      </FixedText>
    </Swiper>
  );
};

export default Slider;
