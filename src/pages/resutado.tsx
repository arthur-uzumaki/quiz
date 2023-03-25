import { useRouter } from "next/router"
import { Botao } from "../components/botao/Botao"
import { Estatistica } from "../components/estatistica/Estatistica"
import styles from "../styles/Resutado.module.css"
export default function Resutado() {
  const router = useRouter()

  const total = Number(router.query.total)
  const certas = Number(router.query.certas)
  const percentual = Math.round((certas / total) * 100)
  

  const percentualAprovacao  = percentual >= 50 ? '#00FFFF' : '	#FF0000'

  return (
    <div className={styles.resutado} >
      <h1>Resututado Final</h1>
      <div style={{display:'flex' , }}>
        <Estatistica
          texto="Perguntas"
          valor={total}
        />
        <Estatistica
          texto="Certas"
          valor={certas}
          corFundo='#9CD2A4'
        />
        <Estatistica
          texto="Percentual"
          valor={`${percentual}%`}
          corFundo={percentualAprovacao}
          
        />
      </div>
      <Botao 
        hrf="/"
        texto="Tentar novamente"
      />

    </div>
  )
}