import React, { useEffect, useMemo, useState } from "react";
import FilterBoard from "../../components/FliterBoard";
import FlightCard from "../../components/FlightCard";
import {styles} from './styles'
import mockResponce from '../../mockData/tickets.json'
import CourseValute from "../../mockData/courseValute";
import flyLogo from '../../components/images/flyLogo.png'


const MainScreen = () => {
  const [valute,setValute] = useState("RUB")
  const [currentUsd, setCurrentUsd] = React.useState(null);
  const [currentEur, setCurrentEur] = React.useState(null);
  
  const [checkboxes, setCheckboxes] = useState(
    [{title: 'Все', value: true } ,
    {title:'Без пересадок', value: true, stops: 0},
    {title: 'Одна пересадка',value: true,stops: 1},
    {title: 'Две пересадки',value: true, stops: 2},
    {title: 'Три пересадки',value: true, stops: 3}])

  const [sortValue,setSortValue]= useState ([])
  useEffect (() => {
    const tempArr = checkboxes.filter((checkbox) => checkbox.value === true && checkbox.title !== 'все')
    const values = tempArr.map((item)=> {
      return item.stops
    })
    setSortValue(values);
  }, [checkboxes]);

    
  const temeSortedList = useMemo(()=>{
    const sortedArr  = []
    mockResponce.tickets.forEach((item)=>{
      sortValue.forEach((sortIndex)=> {
        if (item.stops === sortIndex) {
          sortedArr.push(item)
  }})})

  return sortedArr.sort((a, b) => a.departure_time > b.departure_time ? 1 : -1)
  }, [sortValue])
   
return (
<div style={styles.head}>
  <div style={styles.logoBox}>
    <img  src={flyLogo} style={styles.flyLogo} alt={'Samolet'} />
  </div>
  <div style={styles.screen}>
    <div >
      <FilterBoard 
        valute={valute} 
        setValute={setValute} 
        checkboxes={checkboxes} 
        setCheckboxes={setCheckboxes}/>
    </div>
    <div style={styles.cardsContainer}>
      {temeSortedList.map((item, index) => (
        <FlightCard
          valute={valute}
          cardInfo={item}
          key ={`${index}
          ${item.origin_name}`}
          currentUsd={currentUsd}
          currentEur={currentEur}/>
      ))}
    </div>
      <CourseValute
        setCurrentUsd={setCurrentUsd}
        setCurrentEur={setCurrentEur}/>   
  </div>
</div>
  );
};

export default MainScreen;
