import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Proyects.module.css'

interface Props {
  children: string | JSX.Element
  name: string
  image: string
  href: string
}

function Proyect({ children, name, image, href }: Props): JSX.Element {
  return (
    <article className={`${styles.proyect} df aic fww`} style={{ gap: '2rem' }}>
      <h4 className='subtitle'>{name}</h4>
      <div
        className={`${styles.description}`}
        style={{ flexGrow: '1', maxWidth: '50%', lineHeight: '1.5' }}
      >
        {children}
      </div>
      <Link
        className='pr'
        href={href}
        style={{ flexGrow: '1', maxWidth: '50%', height: '400px' }}
        target='_BLANK'
        rel='noreferrer'
      >
        <div className={styles.imageContainer}>
          <Image className={styles.image} alt={name} src={image} fill />
        </div>
      </Link>
    </article>
  )
}

export default function Proyects(): JSX.Element {
  return (
    <section
      id='proyects'
      className='sectionPortfolio'
      style={{ padding: '3.5rem 0' }}
    >
      <div className='sectionDiv'>
        <h3>He desarrollado...</h3>
        <div className='df fdc' style={{ gap: '1rem' }}>
          <Proyect
            name='Tienda LA VECI'
            image='/proyect-laveci.png'
            href='https://laveci.vercel.app'
          >
            <p>
              Aplicación web para una microempresaria que se dedica a la ventas
              de productos. Le permite adminstrar de manera sencilla su
              inventario, el cuál está disponible para sus clientes, los cuáles
              pueden además pueden comprar desde esta aplicación, entre otras
              funcionalidades.
            </p>
          </Proyect>
          <Proyect
            name='JayoCrud'
            image='/proyect-jayocrud.png'
            href='https://portfoliojayo.x10.mx'
          >
            <>
              <p>
                Mi primer CRUD con php como ejercicio de práctica. Incluye una
                sección o función de:
              </p>
              <ol style={{ paddingLeft: '2rem', marginTop: '1rem' }}>
                <li>
                  <b>Login</b>
                </li>
                <li>
                  <b>Recuperar contraseña</b>
                </li>
                <li>
                  <b>Registrarse</b>
                </li>
                <li>
                  <b>Inicio</b>
                </li>
                <li>
                  <b>Proyectos</b>: Dónde se puede realizar las diferentes
                  operaciones de CRUD, en este caso, agregar, editar, y eliminar
                  proyectos.
                </li>
                <li>
                  <b>Cerrar sesión</b>
                </li>
              </ol>
            </>
          </Proyect>
        </div>
      </div>
    </section>
  )
}
