import QuestaoModel from "../../model/questao"
import { Enuciado } from "../enuciado/Enuciado"
import { Resposta } from "../reposta/Resposta"
import { Temporizador } from "../temporizador/Temporizador"
import styles from './Questao.module.css'

interface QuestaoPrps {
  valor: QuestaoModel
  respostaFonecida: (indece: number) => void
  tempoPraResposta?:number
  tempoEsgotado: () => void
}
const letras = [
  { valor: 'A', cor: '#f2c866' },
  { valor: 'B', cor: '#f268ba' },
  { valor: 'C', cor: '#85d4f2' },
  { valor: 'D', cor: '#bce596' },

]
export function Questao({ valor, respostaFonecida , tempoEsgotado ,tempoPraResposta }: QuestaoPrps) {


  function renderizarResposta() {

    return valor.respostas.map((resposta, i) => {

      return (<Resposta
        key={`${valor.id} ${i}`}
        resposta={resposta}
        indece={i}
        letra={letras[i].valor}
        corFundoLetra={letras[i].cor}
        respostaFonecida={respostaFonecida}
      />
      )
    })
  }
  return (
    <div className={styles.questao}>
      <Enuciado texto={valor.enunciado} />
      <Temporizador key={`${valor.id}`} duracao={tempoPraResposta ?? 10}  tempoEsgotado={tempoEsgotado}/>
      {renderizarResposta()}
    </div>
  )
}