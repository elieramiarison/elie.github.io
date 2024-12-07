import { Box, Typography } from '@mui/material'
import { AnimatedSection } from '../animation/animation';
import psyKozy from "../projects/psyKozy1.jpg"
import portfolio from "../projects/InShot_20241207_114652207.jpg"
import maquette from "../projects/eni.jpg"
import bayAft from "../projects/beyAft.jpg"
import lighMedia from "../projects/back-off.jpg"
import test from "../projects/test-auth.jpg"
import psyLogo from "../logo/logo projet toto.jpg"
import lightLogo from "../logo/lightMedia.png"
import eni from "../logo/th.jpeg"
import elierms from "../logo/logo Elie Ramiarison.webp"
import { useTranslation } from 'react-i18next';

const Project = () => {
  const { t } = useTranslation()

  const table = {
    image: [bayAft, psyKozy, test, lighMedia, maquette, portfolio],
    logo: [lightLogo, psyLogo, elierms, lightLogo, eni, elierms],
    title: ["VisionSpot", "ShowcaseHub", "SecureAccess", "PowerAdmin", "FrontCraft", "Portfolio"],
    desc: [t('project1'), t('project2'), t('project3'), t('project4'), t('project5'), t('project6')]
  }
  return (
    <div>
      <section id='projet'>
        <Box sx={{
          paddingTop: '4rem',
          minHeight: '30em',
          background: '#181136',
          color: '#fff'
        }}>
          <Typography variant='h4' sx={{
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>PROJET</Typography>
          <Box sx={{
            marginTop: '5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5rem',
            flexWrap: 'wrap'
          }}>

            {table.image.map((item, index) => (
              <AnimatedSection>
                <Box sx={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'hsla(0, 0%, 96%, .1)',
                  border: 'none',
                  borderRadius: '5px',
                  borderImage: 'linear-gradient(98.77deg, #d80050 1.2%, #00A7FF 95.09%) 1',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: { xs: '1rem', md: '1.5rem' },
                  width: { xs: '20rem', sm: '23rem', md: '29rem' },
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0px 6px 20px rgb(14 81 139 / 13%)',
                  }
                }}>
                  <Box>
                    <Box
                      component='img'
                      src={item}
                      sx={{
                        width: { xs: '18rem', sm: '21rem', md: '26rem' },
                        height: { xs: '11rem', md: '15rem' },
                        marginBottom: '.5rem'
                      }}
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ flexDirection: 'column' }}>
                        <Typography><span>{table.title[index]}</span></Typography>
                        <Typography sx={{ fontSize: '0.8rem', fontFamily: 'system-ui' }}>{table.desc[index]}</Typography>
                      </Box>
                      <Box
                        component='img'
                        src={table.logo[index]}
                        sx={{
                          width: '40px',
                          height: 'auto'
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </AnimatedSection>
            ))
            }
          </Box>
        </Box>
      </section>
    </div>
  )
}

export default Project