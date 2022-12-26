import React, {FC, useCallback} from "react";
import {styles} from './styles'
import s7 from '../images/s7.png'
import ba from '../images/ba.png'
import su from '../images/su.png'
import tu from '../images/tu.png'
import arrow from '../images/arrow.png'


interface IProps {
  cardInfo: ICardInfo;
  valute: string;
  currentEur: number;
  currentUsd: number;
} 
interface ICardInfo {
  origin: string,
  origin_name: string,
  destination: string,
  destination_name: string,
  departure_date: string,
  departure_time: string,
  arrival_date: string,
  arrival_time: string,
  carrier: string,
  stops: number,
  price: number,
}

const FlightCard: FC<IProps> = ({cardInfo, valute, currentEur, currentUsd }) => {

  const flyDate = useCallback((datefly: string)=>{
    const daysName=['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС']
    const dateSplit = datefly.split('.');
    let date = new Date(Number('20'+dateSplit[2]), Number(dateSplit[1])-1, Number(dateSplit[0]));
    const dayName = daysName[(date.getDay())-1]
    return dayName
  },[])

  const priceValute = useCallback((rubPrice: number)=>{
    switch (valute) {
      case "USD":
        return (`${(rubPrice/currentUsd).toFixed(0)} ${valute}`);
      case "EUR":
        return (`${(rubPrice/currentEur).toFixed(0)} ${valute}`);
      default:
        return (`${(rubPrice)} ${valute}`);

    }
  }, [currentEur, currentUsd, valute])

const carrierLogo = useCallback((carrierName: string)=>{
  switch (carrierName) {
    case "SU":
      return su
    case "S7":
      return s7
    case "TK":
      return tu
    case "BA":
      return ba
}}
, [])

const renderPhrase = useCallback((number: number) => {
  const lastOne = Number(number.toString().slice(-1));
  if (number === 0) return "ПЕРЕСАДОК"
  if (number > 4 && number < 15) return "ПЕРЕСАДОК";
  if ([2, 3, 4].indexOf(lastOne) >= 0) return "ПЕРЕСАДКИ";
  if (lastOne === 1) return "ПЕРЕСАДКА";
}, []);

  return (
    
    <div style={styles.cardContainer}>
      <div style={styles.leftBlock}>
        <img  src={carrierLogo(cardInfo.carrier)} style={styles.carrierLogo} alt={cardInfo.carrier} />
        <button style={styles.buyButton}>Купить <br /> {priceValute(cardInfo.price)}</button>
      </div>
      <div style={{flex: 1}} >
        <div style={styles.rightBlock}>
          <div>
            <div style={styles.row}>
              <span style={styles.timeText}>{cardInfo.departure_time}</span>
              <div style={styles.stopsWrapper}>
                <span style={styles.greySmallText}>{`${cardInfo.stops} ${renderPhrase(cardInfo.stops)}`}</span>
                <img style={styles.arrowImg} src={arrow} alt="arrow" />
              </div>
              <span style={styles.timeText}>{cardInfo.arrival_time}</span>
            </div>

          </div>
        <div style={styles.pleaceContainer}>
            <span style={styles.pleaceText}>{`${cardInfo.origin}, ${cardInfo.origin_name}`}</span>
            <span style={styles.pleaceText}>{`${cardInfo.destination_name}, ${cardInfo.destination}`}</span>
        </div>
          <div style={styles.dateContainer}>
            <span style={styles.greySmallText}>{`${cardInfo.departure_date}, ${flyDate(cardInfo.departure_date)}`}</span>
            <span style={styles.greySmallText}>{`${cardInfo.arrival_date}, ${flyDate(cardInfo.arrival_date)}`}</span>
          </div>
        </div>
        </div>
    </div>
  );
};

export default FlightCard;
