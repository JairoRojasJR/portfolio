import Image from 'next/image'

export default function Background(): JSX.Element {
  return (
    <div
      className='pa'
      style={{ inset: 0, pointerEvents: 'none', zIndex: -50 }}
    >
      <div className='pf whf htf'>
        <Image alt='fondo estrellado' src='/background.jpg' fill />
      </div>
    </div>
  )
}
