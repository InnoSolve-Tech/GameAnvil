import { Box, Container, Typography } from '@mui/material';
// this is just sample code for the artist page
export default function Artist() {
  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Artist Profile
        </Typography>
        <Typography variant="body1">
          This is where you can display detailed information about the artist.
        </Typography>
      </Box>
    </Container>
  );
}
