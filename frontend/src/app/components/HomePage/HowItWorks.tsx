'use client'

import { Container, Grid, Typography } from '@mui/material'

import HowItWorksCard from './HowItWorksCard'

function HowItWorks() {
  return (
    <Container sx={{ minHeight: '100vh', mt: '20px' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            color="white"
            sx={{
              fontSize: { md: '30px', xs: '25px' },
              textAlign: { md: 'left', xs: 'center' },
              fontWeight: 750,
            }}
          >
            How it works
          </Typography>
          <Typography
            color="grey"
            sx={{
              fontSize: { md: '20px', xs: '18px' },
              textAlign: { md: 'left', xs: 'center' },
            }}
          >
            Find out how to get started
          </Typography>
        </Grid>
      </Grid>
      <div className="md:gap-30 mt-4 grid grid-cols-1 place-items-center gap-10 md:grid-cols-3">
        <Grid item md={4}>
          <HowItWorksCard
            info="🔐 Start by installing a browser wallet! Safeguard your creations and personal information with ease. Sign up to securely back up all your data, ensuring peace of mind and seamless access whenever you need it."
            image="/images/wallet.svg"
          />
        </Grid>
        <Grid item md={4}>
          <HowItWorksCard
            info="Upload your items to our website and gain exposure to a vast audience of potential buyers. Share your creativity with the world and watch your creations flourish. 🚀"
            image="/images/market.svg"
          />
        </Grid>
        <Grid item md={4}>
          <HowItWorksCard
            info="💰 Set a price for your digital game assets and start selling! Whether it's characters, environments, or soundtracks, your creations deserve recognition and reward. Take the first step towards monetizing your talent today. 💡"
            image="/images/sell.svg"
          />
        </Grid>
      </div>
    </Container>
  )
}

export default HowItWorks
