'use client'

import Image from 'next/image'

import RocketIcon from '@mui/icons-material/Rocket'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

function Hero() {
  return (
    <Container sx={{ minHeight: '100vh', mt: '20px' }}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Typography
            sx={{
              fontSize: { md: '50px', xs: '35px' },
              textAlign: { xs: 'center', md: 'left' },
              color: 'white',
              fontWeight: 800,
              letterSpacing: '5px',
              lineHeight: 1.5,
            }}
          >
            Welcome to the Ultimate Hub for Gaming Assets
            <br /> & Token Management!
          </Typography>
          <Typography
            sx={{
              fontSize: { md: '20px', xs: '18px' },
              textAlign: { xs: 'center', md: 'left' },
              color: 'white',
              mt: '15px',
            }}
          >
            Discover the future of gaming with our innovative Web3 platform, leveraging NFT
            technology to empower game asset creators.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' } }}>
            <Button
              size="large"
              className="my-2 mt-4 block rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-700"
              sx={{
                textTransform: 'none',
              }}
            >
              <RocketIcon /> Get Started
            </Button>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Image src="/images/hero.png" height={800} width={800} alt="Hero section image" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
