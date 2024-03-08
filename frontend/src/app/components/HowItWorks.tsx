'use client'

import { Container, Grid, Typography } from '@mui/material'

function HowItWorks() {
  return (
    <Container sx={{ minHeight: '100vh', mt: { md: '50px', xs: '20px' } }}>
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
    </Container>
  )
}

export default HowItWorks
