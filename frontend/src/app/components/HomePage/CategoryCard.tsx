import { CardActionArea, SvgIconTypeMap } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import Typography from '@mui/material/Typography'

export default function CategoryCard({
  categoryName,
  CategoryIcon,
  categoryImage,
}: {
  categoryName: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  CategoryIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
  categoryImage: string
}) {
  return (
    <Card sx={{ width: 250, height: 250, borderRadius: '10px', backgroundColor: '#353935' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={categoryImage}
          alt="Background"
          sx={{ filter: 'blur(3px)', height: '160px' }}
        />
        <CardContent
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: '#fff',
            }}
          >
            <CategoryIcon sx={{ fontSize: '50px' }} />
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ color: 'white', fontWeight: 700 }}
            component="div"
          >
            {categoryName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
