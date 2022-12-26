
import React, { FC, useCallback} from "react";
import { styles } from "./styles";
import './psevdoselectors.css'

interface IProps {
  valute: string;
  setValute: Function;
  checkboxes: ICheckbox[];
  setCheckboxes: Function; 
} 
interface ICheckbox {
  title: string,
  value: boolean;
  stops?: number
}  

const FilterBoard: FC<IProps> = ({valute, setValute, checkboxes ,setCheckboxes, }) => {

const changeCheckboxState = useCallback((index: number, key: string) => {
  const tempArr = checkboxes.map((item, indexof) => {
    if (key === 'Все') {
      if (!checkboxes[0].value){ 
      return {...item, value: true} 
    } else return {...item, value: false}
    } else {
    if (indexof === index) {
      return {...item, value: !item.value}
    }
    else return item
  }
  })

  setCheckboxes(tempArr)
},[checkboxes, setCheckboxes])



  return (
    <div style={styles.filterCardContainer}>
      <span style={styles.textFilter}>ВАЛЮТА</span>
      <div style={styles.buttonGroup}>
        <button type="button" className={'buttonLeft'} onClick={()=>setValute("RUB")}>
          RUB
        </button>
        <button type="button" className={'buttonCenter'} onClick={()=>setValute("USD")}>
          USD
        </button>
        <button type="button" className={'buttonRight'} onClick={()=>setValute("EUR")}>
          EUR
        </button>
      </div>
      <span style={styles.textFilter}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div style={styles.labelList}>
        {checkboxes.map((item, index) =>(
        <span className={"checkboxSpan"} key={`${index} ${item.title}`}>
          <input 
            type="checkbox" 
            className={"custom-checkbox"} 
            checked={item.value} 
            onChange={()=>changeCheckboxState(index, item.title)} 
            id={item.title}/>
          <label htmlFor={item.title} style={styles.label}> 
            {item.title}
          </label>
       </span>
      ))}
      </div>
    </div>
  );
};

export default FilterBoard;
