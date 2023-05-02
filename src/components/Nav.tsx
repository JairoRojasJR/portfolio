import Link from 'next/link'

export default function Nav(): JSX.Element {
  return (
    <nav className='df jcc ps' style={{ top: '1rem', zIndex: 500 }}>
      <ul
        className='sectionCard df'
        style={{
          listStyle: 'none',
          gap: '100px',
          padding: '1.5rem 100px',
          boxShadow: '0 0 0.8rem var(--violet)'
        }}
      >
        <li>
          <Link href='#introduction'>Introducción</Link>
        </li>
        <li>
          <Link href='#proyects'>Proyectos</Link>
        </li>
        <li>
          <Link href='#about'>Sobre mí</Link>
        </li>
        <li>
          <Link href='#contact'>Contáctame</Link>
        </li>
      </ul>
    </nav>
  )
}
