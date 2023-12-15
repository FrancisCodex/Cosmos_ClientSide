import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/navbar'
import Loginpage from '@/components/loginpage'
import HomePage from '../components/homepage'
import Landingpage from '@/components/landingpage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <HomePage/>
    </main>
  )
}
