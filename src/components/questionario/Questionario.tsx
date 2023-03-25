import QuestaoModel from "../../model/questao"
import { Botao } from "../botao/Botao"
import { Questao } from "../questao/Questao"
import styles from './Questionario.module.css'

interface QuestionarioProps{
  questao:QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irPraProximoPasso: () => void
}

export function Questionario({questao,ultima,questaoRespondida,irPraProximoPasso}:QuestionarioProps){
   
  function repostaFonecida(indece: number){
    if(questao.naoRespondida){
      questaoRespondida(questao.responderCom(indece))
    }
  }

  return(
      
      <div className={styles.questionario}>
        {questao ?
        <Questao 
          valor={questao}
        
          respostaFonecida={repostaFonecida}
          tempoEsgotado={irPraProximoPasso}
          
        />      
      : false  
      
      }
        <Botao onClick={irPraProximoPasso}
          texto={ultima ? 'Finalizar' : 'Próxima'}
        />
      </div>

  )
}