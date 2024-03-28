'use client'

import { Checkroom, ColorLens, MusicNote, Paid, Person2, Settings } from '@mui/icons-material'
import { Container, Grid, Typography } from '@mui/material'

import CategoryCard from './CategoryCard'

function Categories() {
  return (
    <Container sx={{ minHeight: '100vh', mt: { md: '50px', xs: '20px' } }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            color="white"
            sx={{
              fontSize: { md: '35px', xs: '30px' },
              textAlign: { md: 'left', xs: 'center' },
              fontWeight: 750,
            }}
          >
            Browse Categories
          </Typography>
        </Grid>
      </Grid>
      <div className="mt-4 grid grid-cols-1 place-items-center gap-6 md:grid-cols-4">
        <Grid item>
          <CategoryCard
            categoryName="Game Skins"
            CategoryIcon={Checkroom}
            categoryImage="https://www.gamespot.com/a/uploads/scale_super/1596/15965793/3973514-fortnite-gaming-legends-series-skins.png"
          />
        </Grid>
        <Grid item>
          <CategoryCard
            categoryName="Mods"
            CategoryIcon={Settings}
            categoryImage="https://www.pcworld.com/wp-content/uploads/2023/04/garrys-mod-100742045-orig.jpg?quality=50&strip=all"
          />
        </Grid>
        <Grid item>
          <CategoryCard
            categoryName="In-Game Tokens"
            CategoryIcon={Paid}
            categoryImage="https://cdna.artstation.com/p/assets/images/images/017/074/832/large/nxtdoor-games-3-fix.jpg?1554539410"
          />
        </Grid>
        <Grid item>
          <CategoryCard
            categoryName="Sound & Music packs"
            CategoryIcon={MusicNote}
            categoryImage="https://www.songkick.com/images/content/content_image_headers/video_game_concert_content_header.jpg"
          />
        </Grid>
        <Grid item>
          <CategoryCard
            categoryName="Art"
            CategoryIcon={ColorLens}
            categoryImage="https://retrostylegames.com/wp-content/uploads/2023/02/Techniques-for-Creating-AI-Game-Art-Design.jpg"
          />
        </Grid>
        <Grid item>
          <CategoryCard
            categoryName="Game Accounts"
            CategoryIcon={Person2}
            categoryImage="https://media.forgecdn.net/attachments/24/433/4esmetz.png"
          />
        </Grid>
      </div>
    </Container>
  )
}

export default Categories
