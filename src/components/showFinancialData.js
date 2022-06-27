
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
                            Ingresos: $ {item.OBS_VALUE}
                        </div>
                        <div>
                            Egresos: $ {item.OBS_VALUE}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}