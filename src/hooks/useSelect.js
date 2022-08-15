import { useState } from "react"
import { fetchCityData } from "../api/fetchCityData";
import { fetchStatesData } from "../api/fetchStatesData";

export const useSelect = () => {
    const [idGeo, setIdGeo] = useState('01');
    
    const [statesData, setStatesData] = useState([]);
    const [citiesData, setCitiesData] = useState([]);

    const [selectedState, setSelectedState] = useState('');
    const [selectedStateData, setSelectedStateData] = useState(null);

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCityData, setSelectedCityData] = useState(''); 

    const fetchCitiesStatesData = () => {
        fetchStatesData(setStatesData);
        fetchCityData(idGeo, setCitiesData);
    }

    const handleChangeState = (e) => {
        setSelectedState(e.target.value);
    }
    const handleChangeCity = (e) => {
        setSelectedCity(e.target.value);
    }

    const handleClick = () => {
        statesData.filter(state => selectedState === state.nom_agee && setSelectedStateData({...state}));
        statesData.filter(state => selectedState === state.nom_agee && setIdGeo(state.cvegeo));
        citiesData.filter(state => selectedCity === state.nom_agem && setSelectedCityData({...state}));
    }

    return {
        idGeo,
        statesData,
        citiesData,
        selectedStateData,
        selectedCityData,
        fetchCitiesStatesData,
        handleChangeState,
        handleChangeCity,
        handleClick
    }
}
