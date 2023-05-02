import Image from 'next/image'
import styles from '@/styles/Cover.module.css'

interface Props {
  src: string
  name: string
}

function Technology({ src, name }: Props): JSX.Element {
  return (
    <article className='df aic' style={{ gap: '1rem' }}>
      <Image
        className={styles.floatIcon}
        alt={name}
        src={src}
        width={48}
        height={48}
      />
      <span>{name}</span>
    </article>
  )
}

export default function Introduction(): JSX.Element {
  const downloadCV = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    return alert('En desarrollo...')
  }

  return (
    <section
      id='introduction'
      className='sectionPortfolio'
      style={{ padding: '3.5rem 0' }}
    >
      <div className='sectionDiv'>
        <h3>Estudiante autodidacta...</h3>
        <p>
          <strong>+1 año y medio</strong> de aprendizaje,{' '}
          <strong>desarrollador web full stack</strong> (que maneja un o varios
          stack de tecnologías).
          <br />
          <br />
          <strong>Graduado</strong> de{' '}
          <strong>bachillerato técnico en Informática</strong> en el colegio de
          bachillerato Ismael Pérez Pazmiño
          <br />
          <br />
          Nivel <strong>intermedio en inglés</strong>
        </p>
        <article style={{ marginLeft: '1.5rem' }}>
          <h4 style={{ color: 'var(--violet)', fontSize: '1.5rem' }}>
            Tecnologías que manejo
          </h4>
          <section
            className='dg'
            style={{
              gridTemplateColumns: '1fr 1fr',
              gridAutoRows: 'min-content',
              gap: '1rem',
              borderLeft: '0.3rem solid var(--violet)',
              padding: '1.5rem'
            }}
          >
            <Technology src='/logo-html.png' name='Html' />
            <Technology src='/logo-css.png' name='Css' />
            <Technology src='/logo-js.png' name='Javascript' />
            <Technology src='/logo-php.png' name='Php' />
            <Technology src='/logo-laravel.png' name='Lavarel' />
            <Technology src='/logo-react.png' name='React' />
            <Technology src='/logo-nextjs.png' name='Nextjs' />
            <Technology src='/logo-nodejs.png' name='Nodejs y express' />
            <Technology src='/logo-sql.png' name='BBDD Sql' />
            <Technology src='/logo-mongodb.jpg' name='BBDD NoSql' />
            <Technology src='/logo-typescript.png' name='Typescript' />
            <Technology src='/logo-jquery.png' name='JQuery' />
            <Technology src='/logo-git.png' name='Git' />
            <Technology src='/logo-github.png' name='Github' />
          </section>
        </article>
        <button
          className='cp'
          style={{
            background: 'var(--green-turq)',
            alignSelf: 'center',
            padding: '.5rem 1.5rem',
            borderRadius: '.3rem'
          }}
          onClick={downloadCV}
        >
          Descargar CV
        </button>
      </div>
    </section>
  )
}
