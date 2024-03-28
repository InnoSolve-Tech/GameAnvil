'use client'

import Rocket from '@mui/icons-material/Rocket'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import { profileData } from '../DummyData/profileData'
import ProfilesCard from './ProfilesCard'

function Profiles() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={10}>
          <Typography
            color="white"
            sx={{
              fontSize: { md: '30px', xs: '20px' },
              fontWeight: 750,
              textAlign: { md: 'left', xs: 'center' },
            }}
          >
            Top User Accounts
          </Typography>
          <Typography
            color="white"
            sx={{ fontSize: { md: '20px', xs: '15px' }, textAlign: { md: 'left', xs: 'center' } }}
          >
            Check out the top user accounts on GameAnvil
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' } }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'orange',
                mt: '20px',
                color: 'orange',
                '&:hover': {
                  borderColor: 'darkorange',
                },
              }}
            >
              <Rocket /> View Rankings
            </Button>
          </Box>
        </Grid>
      </Grid>

      <div className="mt-4 grid grid-cols-1 place-items-center gap-6 md:grid-cols-4">
        {profileData.map((profile) => (
          <Grid key={profile.image} item>
            <ProfilesCard
              image={profile.image}
              name={profile.name}
              value={profile.value}
              followers={profile.followers}
            />
          </Grid>
        ))}
      </div>
    </Container>
  )
}

export default Profiles
