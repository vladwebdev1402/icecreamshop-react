import {FC, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperCore} from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';

import ButtonOrange from '../ui/button/ButtonOrange/ButtonOrange';

import {icecreams, themes} from './data';
import st from './Hero.module.scss';

interface Props {
  onThemeChange: (idx: number) => void;
  currentTheme: number;
}

const HeroSwiper: FC<Props> = ({onThemeChange, currentTheme}) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSwitchClick = (idx: number) => {
    if (swiperRef.current) swiperRef.current.slideTo(idx);
    onThemeChange(idx);
  };

  return (
    <>
      <Swiper
        spaceBetween={50}
        onSlideChange={(swiper: SwiperCore) =>
          onThemeChange(swiper.activeIndex)
        }
        pagination={{clickable: true}}
        className={st.swiper}
        onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
      >
        {icecreams.map(icecream => (
          <SwiperSlide className={st.slide} key={icecream.name}>
            <img src={icecream.img} alt="Мороженое" />
            <div className={st.slide__body}>
              <h1 className={st.slide__header}>{icecream.name}</h1>
              <ButtonOrange className={st.slide__btn}>
                Давайте оба!
              </ButtonOrange>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={st.themeSwitch}>
        {themes.map((theme, idx) => (
          <button
            className={`${st.themeSwitch__item} ${
              theme === currentTheme ? st.themeSwitch__item_active : ''
            }`}
            onClick={() => handleSwitchClick(idx)}
            key={idx}
          ></button>
        ))}
      </div>
    </>
  );
};

export {HeroSwiper};
