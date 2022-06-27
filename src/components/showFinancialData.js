export default function ShowFinancial({financialInfo}) {
    return(
        <>
            <h2>FINANZAS PUBLICAS</h2>
            <h3>INGRESOS </h3>
            {financialInfo.ingInfo.map(item => <div key={item.TIME_PERIOD}>{item.TIME_PERIOD}: $ {item.OBS_VALUE}</div>)}
            <h3>EGRESOS</h3>
            {financialInfo.egInfo.map(item => <div key={item.TIME_PERIOD}>{item.TIME_PERIOD}: $ {item.OBS_VALUE}</div>)}
        </>
    )
}