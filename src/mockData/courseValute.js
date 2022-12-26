import axios from "axios";
import React from "react";

const baseURL = "https://www.cbr-xml-daily.ru/daily_json.js";

export default function CourseValute({setCurrentUsd,setCurrentEur}) {
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        setCurrentUsd(response.data.Valute.USD.Value);
        setCurrentEur(response.data.Valute.EUR.Value);
    });
  },[setCurrentEur, setCurrentUsd]);

  return <></>
}
