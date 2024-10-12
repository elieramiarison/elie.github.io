import { Box, Typography } from '@mui/material'
import "../Contact.css";
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../animation/animation';

const Apropos = () => {

    const { t } = useTranslation()

    return (
        <section id='apropos'>
            <Box
                sx={{
                    paddingTop: '4rem',
                    minHeight: '20em',
                    background: '#181136',
                    color: '#fff'
                }}>
                <AnimatedSection>
                    <Typography variant='h4' sx={{
                        paddingTop: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >{t('propos')}</Typography>
                </AnimatedSection>
                {/* <img src={svg} /> */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <AnimatedSection>
                        <Typography sx={{
                            color: 'hsla(0, 0%, 100%, .8)',
                            paddingTop: '3rem',
                            maxWidth: '600px',
                            mx: 4
                        }}>{t('apropos')}</Typography>
                    </AnimatedSection>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '2rem',
                    position: 'relative',
                    width: '5%',
                    height: '5px',
                }}>
                    <svg className='star-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" fill="#d80050" ><path d="M366.7 265.4c-27.7-5.6-27.7-45.2 0-50.7a85.2 85.2 0 0 0 43.6-143.8s-1.2-1.2-1.2-1.2a85.2 85.2 0 0 0-143.7 43.6c-5.6 27.7-45.2 27.7-50.7 0A85.2 85.2 0 0 0 70.9 69.7S69.7 71 69.7 71a85.2 85.2 0 0 0 43.6 143.8c27.7 5.5 27.7 45.1 0 50.7a85.2 85.2 0 0 0-42.4 144.9 85.2 85.2 0 0 0 143.8-43.6c5.5-27.7 45.1-27.7 50.7 0a85.2 85.2 0 0 0 144.9 42.4 85.2 85.2 0 0 0-43.6-143.8Z"></path></svg>
                </Box>
            </Box>
        </section>
    )
}

export default Apropos