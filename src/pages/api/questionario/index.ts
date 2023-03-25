import { NextApiRequest, NextApiResponse } from "next";
import { embaralhar } from "../../../function/arrays";
import bancoDeQuestao from "../bancoDeQuestao";

export default function Questionario(req:NextApiRequest , res:NextApiResponse){
  const ids = bancoDeQuestao.map(questao =>  questao.id)
  res.status(200).json(embaralhar(ids))
}