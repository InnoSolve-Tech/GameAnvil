import { Avatar, Card, CardContent } from '@mui/material'

function HowItWorksCard({ info, image }: { info: string; image: string }) {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: '10px',
        padding: '10px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1B1212',
      }}
    >
      <Avatar sx={{ width: '100px', height: '100px', borderRadius: '0px' }} src={image} />
      <CardContent sx={{ color: '#DBDBDB', fontSize: '18px', textAlign: 'center' }}>
        {info}
      </CardContent>
    </Card>
  )
}

export default HowItWorksCard
