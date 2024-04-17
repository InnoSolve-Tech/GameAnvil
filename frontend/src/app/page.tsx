'use client'

import { Container } from '@mui/material'

import Categories from './components/HomePage/Categories'
import ContactUsCard from './components/HomePage/ContactUsCard'
import Hero from './components/HomePage/Hero'
import HowItWorks from './components/HomePage/HowItWorks'
import Profiles from './components/HomePage/Profiles'

export default function HomePage() {
  // Display `useInkathon` error messages (optional)
  // const { error } = useInkathon()
  // useEffect(() => {
  //   if (!error) return
  //   toast.error(error.message)
  // }, [error])

  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Hero />
      <Profiles />
      <Categories />
      <HowItWorks />
      <ContactUsCard />
    </Container>
  )
}
