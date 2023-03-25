import styles from './Enuciado.module.css';

interface EnuciadoProps {
  texto: string;
}

export function Enuciado({ texto }: EnuciadoProps) {
  return (
    <div className={styles.enuciado}>
      <span className={styles.texto}>
        {texto}

      </span>

    </div>
  )

}