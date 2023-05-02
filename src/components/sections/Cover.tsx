import Image from 'next/image'
import styles from '@/styles/Cover.module.css'

export default function Cover(): JSX.Element {
  return (
    <section style={{ height: '100vh', padding: '1.5rem' }}>
      <div className={`${styles.coverDiv} sectionCard htf whf dg`}>
        <article className='df fc'>
          <div
            className='pr df aife jcc'
            style={{ width: '300px', height: '300px' }}
          >
            <div className='pr' style={{ width: '275px', height: '275px' }}>
              <div className={`${styles.heptagon} whf htf`}>
                <Image alt='jairo rojas' src='/my_self.png' fill />
              </div>
              <Image
                className={`${styles.floatIcon} pa`}
                alt='logo javascript'
                src='/logo-js.png'
                width={48}
                height={48}
                style={{ top: '-10%', left: '40%' }}
              />
              <Image
                className={`${styles.floatIcon} pa`}
                alt='logo react'
                src='/logo-react.png'
                width={48}
                height={48}
                style={{ top: '10%', left: '0' }}
              />
              <Image
                className={`${styles.floatIcon} pa`}
                alt='logo nodejs'
                src='/logo-nodejs.png'
                width={48}
                height={48}
                style={{ top: '50%', left: '-10%', zIndex: '50' }}
              />
              <Image
                className={`${styles.floatIcon} pa`}
                alt='logo php'
                src='/logo-php.png'
                width={48}
                height={48}
                style={{ bottom: '-5%', left: '15%', zIndex: '50' }}
              />
              <Image
                className={`${styles.floatIcon} pa`}
                alt='logo sql'
                src='/logo-sql.png'
                width={48}
                height={48}
                style={{ bottom: '-5%', right: '15%', zIndex: '50' }}
              />
              <Image
                className={`${styles.floatIcon} pa`}
                alt='logo mongodb'
                src='/logo-mongodb.jpg'
                width={48}
                height={48}
                style={{ top: '50%', right: '-10%', zIndex: '50' }}
              />
              <Image
                className={`${styles.floatIcon} pa`}
                alt='logo typescript'
                src='/logo-typescript.png'
                width={48}
                height={48}
                style={{ top: '10%', right: '0', zIndex: '50' }}
              />
            </div>
          </div>
        </article>
        <article className='df fc'>
          <span className={`${styles.curlyBracket}`}>&#123;</span>
          <div className='df fdc fc' style={{ height: '300px', gap: '3rem' }}>
            <h2 className='tac'>Jairo Rojas</h2>
            <h1 className='tac'>Desarrollador web full stack</h1>
          </div>
          <span className={`${styles.curlyBracket}`}>&#125;</span>
        </article>
        <article
          className='df fc'
          style={{ gridColumn: '2 / 3', gap: '1.5rem' }}
        >
          <span>21 años</span>
          <span>Machala - Ecuador</span>
          <span>+593 999 99 99 99</span>
        </article>
      </div>
    </section>
  )
}
