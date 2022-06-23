
export default function ShowStateData({stateData}) {
    return(
        <div>
            <div>Poblacion: {stateData.pob}</div>
            <div>Poblacion Masculina: {stateData.pob_mas}</div>
            <div>Poblacion Femenina: {stateData.pob_fem}</div>
        </div>
    )
}