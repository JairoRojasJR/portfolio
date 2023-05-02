import Head from 'next/head'
import Link from 'next/link'
import Background from '@/components/Background'

interface PropsLayout {
  children: JSX.Element[]
}

interface PropsLink {
  children: string
  link: string
  title?: string
}

function AttributtionLink({ children, link, title }: PropsLink): JSX.Element {
  return (
    <Link href={link} rel='noreferrer' target='_BLANK' title={title}>
      {children}
    </Link>
  )
}

export default function Layout({ children }: PropsLayout): JSX.Element {
  return (
    <>
      <Head>
        <title>Jairo Rojas - Desarrollador Web Full Stack</title>
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
          className='sectionCard df fdc'
          style={{ gap: '.5em', padding: '1.5rem' }}
        >
          <h5 style={{ color: 'var(--green-turq)', fontSize: '1.1rem' }}>
            Happy hacking!!
          </h5>
          <h5 style={{ color: 'var(--violet)', fontSize: '1.1rem' }}>
            Atribuciones - Iconos
          </h5>
          <section
            className='dg'
            style={{
              gridTemplateColumns: '1fr 1fr',
              marginLeft: '1rem',
              paddingLeft: '1rem',
              borderLeft: '3px solid var(--violet)'
            }}
          >
            <AttributtionLink link='http://www.freepik.com'>
              Diseñados por kjpargeter / Freepik
            </AttributtionLink>
            <AttributtionLink
              link='https://www.flaticon.es/iconos-gratis/php'
              title='php iconos'
            >
              Php iconos creados por Freepik - Flaticon
            </AttributtionLink>
            <AttributtionLink
              link='https://www.flaticon.com/free-icons/sql-server'
              title='sql server icons'
            >
              Sql server icons creado por Nadiinko - Flaticon
            </AttributtionLink>
            <AttributtionLink
              link='https://www.flaticon.com/free-icons/html'
              title='html icons'
            >
              Html icons created by Freepik - Flaticon
            </AttributtionLink>
            <AttributtionLink
              link='https://www.flaticon.com/free-icons/css'
              title='css icons'
            >
              Css icons created by Pixel perfect - Flaticon
            </AttributtionLink>
            <AttributtionLink
              link='https://www.flaticon.com/free-icons/whatsapp'
              title='whatsapp icons'
            >
              Whatsapp icons created by Freepik - Flaticon
            </AttributtionLink>
            <AttributtionLink link='https://commons.wikimedia.org/wiki/File:LinkedIn_logo_initials.png'>
              LinkedIn, Public domain, via Wikimedia Commons
            </AttributtionLink>
            <AttributtionLink
              link='https://www.flaticon.es/iconos-gratis/gato'
              title='gato iconos'
            >
              Gato iconos creados por Dave Gandy - Flaticon
            </AttributtionLink>
            <AttributtionLink link='https://.pngtree.com/so/vector'>
              vector png de .pngtree.com/
            </AttributtionLink>
            <AttributtionLink link='https://.pngtree.com/so/bandeja'>
              bandeja png de .pngtree.com/
            </AttributtionLink>
          </section>
        </div>
      </footer>
    </>
  )
}
