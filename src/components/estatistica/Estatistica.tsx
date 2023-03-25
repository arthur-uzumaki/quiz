import styles from './Estatistica.module.css'

interface EstatisticaProps{
  valor: string | number
  texto: string
  corFundo?:string
  corFonte?:string
}
export function Estatistica({texto,valor,corFundo,corFonte}:EstatisticaProps){
  return(
    <div className={styles.estatisca}>
      <div className={styles.valor} style={{backgroundColor:corFundo ?? '#fdd60f',
      color:corFonte ??'#333'
    }}>
      {valor}
      </div>

      <div className={styles.texto}>
        {texto}

      </div>

    </div>
  )
}