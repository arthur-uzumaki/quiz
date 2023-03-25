import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from './Temporizador.module.css';

interface TemporizadorProps {
  duracao: number
  key: string
  tempoEsgotado: () => void
}

export function Temporizador({ duracao, tempoEsgotado, key }: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        duration={duracao}
        size={120}
        isPlaying
        onComplete={tempoEsgotado}
        colors={['#bce596', '#f7b801', '#a30000']}
        colorsTime={[7,4, 0]}

      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>

    </div>
  )
}