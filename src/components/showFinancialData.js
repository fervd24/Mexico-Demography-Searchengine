
import styles from "./showFinancialData.module.css"
export default function ShowFinancial({financialInfo}) {

    return(
        <div >
            <h2>FINANZAS PUBLICAS</h2>
            {financialInfo.ingInfo.map(item => {

                return(
                    <div className={styles.financialItem} key={item.TIME_PERIOD}>
                        <h4>{item.TIME_PERIOD}</h4>
                        <div>
                            Ingresos: <span className={styles.financialValue}>$ {item.OBS_VALUE}</span>
                        </div>
                        <div>
                            Egresos: <span className={styles.financialValue}>$ {item.OBS_VALUE}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}