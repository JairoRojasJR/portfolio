import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Contact.module.css'

interface Props {
  alt: string
  src: string
  link: string
  divStyles?: object
}

function ContactLink({ alt, src, link, divStyles }: Props): JSX.Element {
  return (
    <li>
      <div className={`${styles.link} pr`} style={divStyles}>
        <Link href={link} rel='noreferrer' target='_BLANK'>
          <Image className='df' alt={alt} src={src} fill />
        </Link>
      </div>
    </li>
  )
}

export default function Contact(): JSX.Element {
  return (
    <section
      id='contact'
      className='sectionPortfolio'
      style={{ padding: '3.5rem 0' }}
    >
      <div
        className={`${styles.divContainer} sectionDiv`}
        style={{ background: 'transparent' }}
      >
        <ul className='df jcc' style={{ listStyle: 'none', gap: '3rem' }}>
          <ContactLink alt='Whatsapp' src='/logo-whatsapp.png' link='/' />
          <ContactLink
            alt='Phone'
            src='/logo-phone.png'
            link='/'
            divStyles={{ background: '#fff' }}
          />
          <ContactLink
            alt='Linkedin'
            src='/logo-linkedin.png'
            link='https://www.linkedin.com/in/jairo-rojas/'
          />
          <ContactLink
            alt='Email'
            src='/logo-email.png'
            link='/'
            divStyles={{ background: '#fff' }}
          />
          <ContactLink
            alt='Github'
            src='/logo-github.png'
            link='https://github.com/JairoRojasJR'
          />
        </ul>
      </div>
    </section>
  )
}
