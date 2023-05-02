import Layout from '@/layouts/Layout'
import Cover from '@/components/sections/Cover'
import Nav from '@/components/Nav'
import Introduction from '@/components/sections/Introduction'
import Proyects from '@/components/sections/Proyects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Cover />
      <div className='df fdc' style={{ padding: '1.5rem' }}>
        <Nav />
        <Introduction />
        <Proyects />
        <About />
        <Contact />
      </div>
    </Layout>
  )
}
