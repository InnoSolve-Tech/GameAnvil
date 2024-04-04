'use client'

import { Avatar, Box, CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function TrendingCard({
  name,
  image,
  developer,
}: {
  name: string
  image: string
  developer?: string
}) {
  function addCommas(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Card
      sx={{
        width: 250,
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: '#1B1212',
        height: '220px',
      }}
    >
      <CardActionArea>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar sx={{ width: '100px', height: '100%' }} src={image} />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            textAlign="center"
            color="#FAF9F6"
            sx={{
              fontSize: { md: '22px', xs: '20px' },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            textAlign={'center'}
            sx={{ fontSize: { md: '14px', xs: '12px' } }}
            color="grey"
          >
            {developer}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}