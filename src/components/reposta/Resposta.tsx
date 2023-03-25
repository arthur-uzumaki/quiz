import RespostaModel from "../../model/resposta"
import styles from './Resosta.module.css'

interface RespostaProps {
  resposta: RespostaModel
  indece: number
  letra: string
  corFundoLetra: string
  respostaFonecida: (indece: number) => void
}

export function Resposta({ resposta, indece, letra, corFundoLetra, respostaFonecida }: RespostaProps) {

  const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''
  return (

    <div className={styles.resposta} onClick={() => respostaFonecida(indece)}>
      <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>

        <div className={styles.frente}>
          <div className={styles.letra}
            style={{ backgroundColor: corFundoLetra }}
          >
            {letra}
          </div>
          <div className={styles.valor}>
            {resposta.valor}
          </div>
        </div>

        <div className={styles.verso}>
          {resposta.certa ? (
            <div className={styles.certa}>
              <div>A resposta certa é...</div>
              <div className={styles.valor}>{resposta.valor}</div>
            </div>
          ) : (
            <div className={styles.errada}>
              <div>A resposta informada está errada...</div>
              <div className={styles.valor}>{resposta.valor}</div>

            </div>

          )}


        </div>


      </div>
    </div>
  )
}