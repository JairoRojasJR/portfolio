import Image from 'next/image'
import Link from 'next/link'

interface Props {
  children: JSX.Element
  title: string
}

function Section({ children, title }: Props): JSX.Element {
  return (
    <article style={{ marginLeft: '1rem' }}>
      <h4 className='subtitle' style={{ marginBottom: '1rem' }}>
        {title}
      </h4>
      <div
        style={{
          listStyle: 'none',
          borderLeft: '3px solid var(--violet)',
          marginLeft: '1rem',
          paddingLeft: '1rem'
        }}
      >
        {children}
      </div>
    </article>
  )
}

export default function About(): JSX.Element {
  return (
    <section
      id='about'
      className='sectionPortfolio'
      style={{ padding: '3.5rem 0' }}
    >
      <div className='sectionDiv'>
        <h3>¿Te cuento un poco de mi?</h3>
        <Section title='Datos personales'>
          <div className='df'>
            <ul style={{ listStyle: 'none', lineHeight: '1.5' }}>
              <li>Nombre: Jairo Rojas</li>
              <li>Edad: 21 años</li>
              <li>Estudios: Bachillerato técnico en informática</li>
              <li>Celular/Movil: +593 999 99 99</li>
              <li>Nacionalidad: Ecuatoriana/Española</li>
              <li>Residencia: Ecuador, El Oro, Machala</li>
            </ul>
            <span className='df fc' style={{ flexGrow: '1' }}>
              <div className='pr' style={{ width: '100px', height: '100px' }}>
                <Image
                  alt='Jairo Rojas'
                  src='/favicon.ico'
                  style={{ filter: 'drop-shadow(0 0 0.5rem var(--violet))' }}
                  fill
                />
              </div>
            </span>
          </div>
        </Section>
        <Section title='Descripción'>
          <p style={{ lineHeight: '1.3' }}>
            Joven apasionado por el mundo de la tecnología desde muy pequeño,
            muy curioso y ambicioso.
            <br />
            <br />
            Me gradué de bachillerato técnico en informática donde acenté
            ciertas bases, contexto y teoría, de informática, y dónde descubrí
            mi pasión por el desarrollo web.
            <br />
            Sin embargo, obviamente no obtuve los conocimientos técnicos
            necesarios para dedicarme a ello, es por eso, qué decidí emprender
            mi camino como estudiante autodidacta de desarrollador web.
            <br />
            <br />
            Ha pasado más de un año y medio y he aprendido mucho, he
            desarrollado varios proyectos que involucran las técnologías más
            demandas y/o importantes de hoy en día en el mundo de la web
            incluido PHP (que por alguna extraña razón recibe mucho hate, a mi
            personalmente me encanta)
            <br />
            <Link href='#proyects'>
              (ver: <strong>Proyectos</strong>)
            </Link>
          </p>
        </Section>
        <Section title='Me gusta...'>
          <ul style={{ listStyle: 'none', lineHeight: '1.5' }}>
            <li>- El deporte (jugar futbol, hacer ejercicio)</li>
            <li>- Jugar Minecraft</li>
          </ul>
        </Section>
      </div>
    </section>
  )
}
