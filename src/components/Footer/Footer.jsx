import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import visa from "../../assets/image/visa-mastercard 1.png";
import visa2 from "../../assets/image/visa-mastercard-mir 1.png";
import paypal from "../../assets/image/paypal 1.png";
import tink from "../../assets/image/tinkoff 1.png";
import sber from "../../assets/image/sberbank 1.png";
import yandex from "../../assets/image/yandexmoney 1.png";
function Footer() {
  return (
    <div className="footer">
      <div className="table_top">
        <div className="table1">
          <h1>Навигация</h1>
          <Link className="link" to={"/"}>
            Новинки
          </Link>
          <Link className="link" to={"/"}>
            Вопрос ответ
          </Link>
          <Link className="link" to={"/"}>
            Контакты
          </Link>
        </div>
        <div className="table2">
          <h1>Покупателям</h1>
          <Link className="link" to={"/"}>
            Каталог
          </Link>
          <Link className="link" to={"/"}>
            Корзина
          </Link>
          <Link className="link" to={"/"}>
            Избранные товары
          </Link>
          <Link className="link" to={"/"}>
            Профиль
          </Link>
        </div>
        <div className="table3">
          <h1>Партнёрам</h1>
          <p>Пункты самовывоза </p>
          <p>Служба поддержки клиентов</p>
          <p>Ищем новых поставщиков</p>
          <p>Оптовые продажи</p>
          <p>Центральный офис</p>
          <p>Пресс-служба</p>
        </div>
        <div className="table4">
          <h1>Услуги</h1>
          <p>Доставка</p>
        </div>
        <div className="table5">
          <h1>Связь с нами</h1>
          <p>Контакты</p>
        </div>
      </div>
      <div className="table_img">
        <h1>Мы принимаем к оплате</h1>
        <img src={visa} alt="" />
        <img src={visa2} alt="" />
        <img src={paypal} alt="" />
        <img src={tink} alt="" />
        <img src={sber} alt="" />
        <img src={yandex} alt="" />
      </div>
    </div>
  );
}

export default Footer;
