import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Questionario } from '../components/questionario/Questionario'
import QuestaoModel from '../model/questao'

import RespostaModel from '../model/resposta'



const questaoMock = new QuestaoModel(1, ' Qual é Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Azul'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.certa('Preto'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const route = useRouter()
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)
  const [repostaCertas, setRepostaCertas] = useState<number>(0)



  useEffect(() => {
    async function carregarIdsDasQuestao() {
      const response = await fetch(`${BASE_URL}/questionario`)
      const idsDasQuestoes = await response.json()

      setIdsDasQuestoes(idsDasQuestoes)
    }
    carregarIdsDasQuestao()
  }, [])

  async function carregarQuestao(idQuestao: number) {
    const response = await fetch(`${BASE_URL}/questao/${idQuestao}`)
    const data = await response.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(data)
    setQuestao(novaQuestao)
  }
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRepostaCertas(repostaCertas + (acertou ? 1 : 0))
  }

  function idProximoPergunta() {
    const proximoIndece = idsDasQuestoes.indexOf(questao.id) + 1
    return idsDasQuestoes[proximoIndece]


  }

  function irPraProximoPasso() {
    const proximoId = idProximoPergunta()
    proximoId ? irProximaQuestao(proximoId) : finalizar()
  }

  function irProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    route.push({
      pathname: "/resutado",
      query: {
        total: idsDasQuestoes.length,
        certas: repostaCertas
      }
    })
  }
  return questao ?(
    <Questionario
      questao={questao}
      ultima={idProximoPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
  
    />
    
    )
    : null




}
