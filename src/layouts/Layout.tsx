import Head from 'next/head'
import Link from 'next/link'
import Background from '@/components/Background'

interface Props {
  children: JSX.Element[]
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>Jairo Rojas Web - Full Stack Developer</title>
        <meta
          name='description'
          content='Jairo Rojas full stack web developer. This is my personal web portfolio where I show my knowledge and skills'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Background />
      <main className='df fdc pr'>{children}</main>
      <footer style={{ padding: '1.5rem' }}>
        <div
          className='df fdc tac'
          style={{
            background: 'var(--primary)',
            padding: '1.5rem',
            gap: '.5em'
          }}
        >
          <h5>Atribuciones - Iconos</h5>
          <Link href='http://www.freepik.com'>
            Diseñados por kjpargeter / Freepik
          </Link>
          <Link
            href='https://www.flaticon.es/iconos-gratis/php'
            title='php iconos'
          >
            Php iconos creados por Freepik - Flaticon
          </Link>
          <Link
            href='https://www.flaticon.com/free-icons/sql-server'
            title='sql server icons'
          >
            Sql server icons creado por Nadiinko - Flaticon
          </Link>
        </div>
      </footer>
    </>
  )
}
