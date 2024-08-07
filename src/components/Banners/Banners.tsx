import BoundingContainer from '../ui/container/BoundingContainer/BoundingContainer';
import st from './Banners.module.scss';
import ButtonOrange from '../ui/button/ButtonOrange/ButtonOrange';
import chocolate from '../../assets/chocolate.webp';
import raspberries from '../../assets/raspberries.webp';

const Banners = () => {
  return (
    <BoundingContainer className={st.banners}>
      <div className={st.banner}>
        <img src={raspberries} alt="фон" />
        <div className={st.banner__header}>Малинка даром!</div>
        <div className={st.banner__description}>
          При покупке 2 кг любого фруктового мороженого, добавим в ваш заказ
          банку малинового варенья бесплатно.
        </div>
        <ButtonOrange className={st.banner__btn}>Хочу варенье!</ButtonOrange>
      </div>
      <div className={st.banner}>
        <img src={chocolate} alt="фон" />
        <div className={st.banner__header}>Шоколадки даром!</div>
        <div className={st.banner__description}>
          При покупке 2 кг пломбира, добавим в ваш заказ упаковку вкуснейшей
          шоколадной присыпки совершенно бесплатно.
        </div>
        <ButtonOrange className={st.banner__btn}>Хочу шоколадки!</ButtonOrange>
      </div>
    </BoundingContainer>
  );
};

export default Banners;
