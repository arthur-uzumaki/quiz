import type { NextApiRequest, NextApiResponse } from 'next'
import bancoDeQuestao from '../bancoDeQuestao'



export default function handler(req:NextApiRequest, res: NextApiResponse) {
  const idSelecionado = Number(req.query.id)

  const unicaQuestaoOuNda = bancoDeQuestao.filter(questao => questao.id === idSelecionado)

  if (unicaQuestaoOuNda.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNda[0].embaralharRespostas()
   
    return res.status(200).json(questaoSelecionada.paraObjeto())
  } else {

    return res.status(204).send({erro:'Sem conteúdo'})
  }




}