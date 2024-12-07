import { Box, Typography } from '@mui/material';
import image from "../assets/hero.png"
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import svg2 from "../assets/svg2.png"
import svg4 from "../assets/svg4.png"
import Button from '@mui/material/Button';
import { IoMdDownload } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { SiSkype } from "react-icons/si";
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from 'react';
import { AnimatedTypingText } from '../animation/animation';



const Accueil = () => {

   const { t } = useTranslation()

   const ref = useRef(null)
   const isInView = useInView(ref, { once: true })
   const mainControls = useAnimation()
   const slideControls = useAnimation()

   useEffect(() => {
      if (isInView) {
         mainControls.start("visible")
         slideControls.start("visible")
      }
   }, [isInView])

   return (
      <section id="accueil">
         <Box
            sx={{
               top: 0,
               left: 0,
               minHeight: '100vh',
               background: '#181136',
               // background: '#0D0821',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               // paddingLeft: '10vh',
            }}
         >
            <Box sx={{
               position: 'absolute',
               width: { xs: '75vw', md: '65vw' },
               height: { xs: '80vw', md: '65vw' },
               background: 'radial-gradient(50% 50% at 50% 50%, #d80050 5%, rgba(0, 167, 255, 0) 100%)',
               backgroundRepeat: 'no-repeat',
               backgroundPositionX: '-30vw',
               backgroundPositionY: { xs: '-15vw', sm: '-20vw', md: '-30vw' },
               opacity: .43,
               top: 0,
               left: 0,
               zIndex: 1
            }}></Box>
            <Box sx={{
               zIndex: 20,
               position: 'relative',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               gap: { sm: 8, md: 25 },
               flexDirection: { xs: 'column', sm: 'column', md: 'row' },
               mx: 5,
               paddingTop: 8
            }}
            >
               <Box component='img' src={svg2} sx={{
                  position: 'absolute',
                  zIndex: -1,
                  top: { xs: '28rem', sm: '25rem', md: '15rem' },
                  left: { xs: '1rem', sm: '2rem', md: '-6rem' },
                  width: '3rem',
                  filter: "saturate(8.5) grayscale(0.7) invert() hue-rotate(-290deg)"
               }} />
               {/* saturate(17.5) grayscale(0.7) invert() hue-rotate(-304deg) */}
               <Box sx={{
                  textAlign: { xs: 'center', sm: 'center', md: 'left' },
                  display: { xs: 'flex', sm: 'flex', md: 'block' },
                  justifyContent: { xs: 'center', sm: 'center' },
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                  marginTop: { xs: '100px', sm: '150px', md: 0 }
               }}
               >
                  <Typography
                     variant="h2"
                     sx={{
                        // color: '#fff',
                        fontSize: { xs: '2.7rem', sm: '3.5rem', md: '3.5rem' },
                        background: 'linear-gradient(98.77deg, #d80050 1.2%, #00A7FF 95.09%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '10px',
                     }}
                  >
                     {t('salutation')}
                  </Typography>

                  <motion.div
                     variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                     }}
                  >
                     <Typography
                        variant="h2"
                        sx={{
                           color: '#fff',
                           background: 'linear-gradient(98.77deg, #d80050 1.2%, #00A7FF 95.09%)',
                           fontFamily: 'sans-serif',
                           fontSize: { xs: '2.5rem', sm: '3.5rem', md: '3.5rem' },
                        }}
                     >
                        Elie Ramiarison
                     </Typography>
                  </motion.div>

                  <Typography
                     variant="h3"
                     sx={{
                        background: 'linear-gradient(98.77deg, #d80050 1.2%, #00A7FF 95.09%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginTop: '10px',
                        fontSize: { xs: '1.6rem', sm: '3rem', md: '3rem' }
                     }}
                  >
                     {t('metier')}
                  </Typography>

                  {/* Animation text */}
                  <AnimatedTypingText />

                  <Box sx={{
                     display: { xs: 'flex', sm: 'flex', md: 'block' },
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '100%'
                  }}>
                     <div style={{
                        marginTop: '15px',
                        padding: '2px',
                        background: 'linear-gradient(98.77deg, #d80050 1.2%, #00A7FF 95.09%)',
                        borderRadius: '5px',
                        maxWidth: 'fit-content',
                     }}>
                        <Button
                           href="/CV_elie_ramiarison_final.pdf"
                           download="CV_Elie_Rms.pdf"
                           sx={{
                              padding: '10px 10px',
                              color: '#fff',
                              backgroundColor: '#181136',
                              borderRadius: '5px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              textDecoration: 'none',
                              fontSize: '0.7rem'
                           }}
                           target="_blank"
                        >
                           {t('telechargement')} <IoMdDownload />
                        </Button>
                     </div>
                  </Box>
                  <div ref={ref}>
                     <motion.div
                        variants={{
                           hidden: { opacity: 0, y: 75 },
                           visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={slideControls}
                        transition={{ duration: 0.5, delay: 0.25 }}
                     >
                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px', justifyContent: { xs: 'center', sm: 'center', md: 'left' } }}>
                           <motion.a
                              href='https://www.linkedin.com/in/elie-ramiarison-ab59502bb'
                              target='_blank'
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 75 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                           >
                              <FaLinkedin size={30} color="#0077b5" />
                           </motion.a>

                           <motion.a
                              href='https://wa.me/+261342527004'
                              target='_blank'
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 75 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                           >
                              <FaWhatsapp size={30} color="#25D366" />
                           </motion.a>

                           <motion.a
                              href='mailto:eliespirale1@gmail.com'
                              target='_blank'
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 75 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                           >
                              <MdOutlineMailOutline size={30} color="#D44638" />
                           </motion.a>

                           <motion.a
                              href='https://join.skype.com/invite/Ozeij1QubhYz'
                              target='_blank'
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 75 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.7 }}
                           >
                              <SiSkype size={30} color='#00AFF0' />
                           </motion.a>
                        </Box>
                     </motion.div>
                  </div>
               </Box>

               {/* Image hero */}
               <div>
                  <div ref={ref}>
                     <motion.div variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                     }}
                        initial="hidden"
                        animate={slideControls}
                        transition={{ duration: 0.5, delay: 0.9 }}>
                        <Box
                           component='img'
                           src={image}
                           sx={{
                              maxWidth: { xs: '10em', sm: '12em', md: '16rem' },
                              zIndex: 1,
                              paddingTop: { xs: '4em', sm: '1em' },
                              opacity: 0.9
                           }}
                        />
                     </motion.div>
                  </div>
               </div>
               <Box component='img' src={svg4} sx={{
                  position: 'absolute',
                  zIndex: -1,
                  right: '0rem',
                  top: { xs: '4rem', sm: '8rem', md: 10 },
                  width: '3rem',
                  filter: 'invert(1) hue-rotate(308deg) saturate(3)',
               }} />


            </Box>

            <Box sx={{
               position: 'absolute',
               width: '65vw',
               height: { xs: '100vw', sm: '80vw', md: '60vw' },
               background: 'radial-gradient(50% 50% at 50% 50%, #00A7FF 0%, rgba(255, 61, 0, 0) 100%)',
               backgroundRepeat: 'no-repeat',
               backgroundPositionX: '30vw',
               opacity: .5,
               top: '240px',
               right: 0,
               zIndex: 1
            }}></Box>
         </Box>
      </section>
   );
};

export default Accueil;
