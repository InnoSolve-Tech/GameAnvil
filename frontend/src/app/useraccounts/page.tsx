import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import profileData from '../../DummyData/profileDatacontent'

// this is just sample code for the artist page
export default function ArtistPage({ onClick }: { onClick: (name: string) => void }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: '100px', height: '100%' }} src={profileData[0].image} />
    </Stack>
  )
}
