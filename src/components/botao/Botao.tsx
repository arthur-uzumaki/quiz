import Link from 'next/link'
import { FormEvent } from 'react'
import styles from './Botao.module.css'

interface BotaoProps {
  hrf?: string
  texto: string
  onClick?: (event: FormEvent) => void
}

export function Botao({ texto, hrf, onClick }: BotaoProps) {

  function renderizarButton() {
    return (
      <button className={styles.botao}
        onClick={onClick}>
        {texto}
      </button>
    )
  }
  return hrf ? (
    <Link href={hrf} legacyBehavior>
      {renderizarButton()}
    </Link>
    
  ) : renderizarButton()
}