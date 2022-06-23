import { useState } from "react"
import OptGen from "./optGen";
import ShowStateData from "./showStateData";

export default function ShowMenus({expenses, statesInfo, cityInfo}) {
    const [stateValue, setStateValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [selectedStateData, setSelectedStateData] = useState(null); 
    const [selectedCityData, setSelectedCityData] = useState(null);
    

    function handleChangeState(e) {
        setStateValue(e.target.value);
    }

    function handleChangeCity(e) {
        setCityValue(e.target.value);
    }

    function handleClick() {
        statesInfo.filter(state => stateValue === state.nom_agee ? setSelectedStateData({...state}): false);
        cityInfo.filter(state => cityValue === state.nom_agem ? setSelectedCityData({...state}): false);
            
        console.log(stateValue);
        console.log(cityValue);
    }

    return(
        <div>
            <h1>{expenses.label}</h1>
            <h2>Estados</h2>
            <OptGen 
                option={statesInfo} 
                defSent="-- Estados --" 
                handleChange={handleChangeState}
                handleClick={handleClick}
            />           
            {
                selectedStateData ? <ShowStateData stateData={selectedStateData}/>: false
            }
            <h2>Municipios</h2>
            <OptGen 
                option={cityInfo} 
                defSent="-- Municipios --"
                handleChange={handleChangeCity}
                handleClick={handleClick}
            />
            {
                selectedCityData ? <ShowStateData stateData={selectedCityData}/>: false
            }
        </div>
    )
}