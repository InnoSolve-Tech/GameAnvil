'use client'

import { useEffect } from 'react'

import { Container } from '@mui/material'
import { useInkathon } from '@scio-labs/use-inkathon'
import { toast } from 'react-hot-toast'

import Categories from './components/Categories'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Profiles from './components/Profiles'

export default function HomePage() {
  // Display `useInkathon` error messages (optional)
  const { error } = useInkathon()
  useEffect(() => {
    if (!error) return
    toast.error(error.message)
  }, [error])

  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Hero />
      <Profiles />
      <Categories />
      <HowItWorks />
    </Container>
  )
}
