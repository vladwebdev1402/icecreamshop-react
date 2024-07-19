import {useEffect, useState} from 'react';
import {HeroSwiper} from './HeroSwiper';
import st from './Hero.module.scss';

const bodyClassNames = [st.icecream1, st.icecream2, st.icecream3];

const Hero = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    body.className = bodyClassNames[currentTheme];
  }, [currentTheme]);

  return (
    <section className={st.hero}>
      <HeroSwiper
        onThemeChange={idx => setCurrentTheme(idx)}
        currentTheme={currentTheme}
      />
      <div className={st.backlight} />
    </section>
  );
};

export default Hero;
