import { Box, Typography } from '@mui/material';
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import css from "../assets/css.svg";
import express from "../assets/express.svg";
import git from "../assets/git.svg";
import html from "../assets/html.svg";
import mongo from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import next from "../assets/next.svg";
import node from "../assets/node js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import "../Contact.css";
import { AnimatedSection } from '../animation/animation';

const frontEnd = ["JavaScript", "HTML", "CSS", "Tailwind CSS", "React JS", "Next JS"];
const logoFront = [js, html, css, tailwind, react, next];
const backEnd = ["Node JS", "Express JS", "TypeScript",];
const logoBack = [node, express, ts, git];
const baseDeDonne = ["MongoDB", "MySQL"];
const logoBd = [mongo, mysql];

const Competences = () => {

    return (
        <section id='competence'>
            <Box sx={{
                paddingTop: '4rem',
                minHeight: '70vh',
                background: '#181136',
                color: '#fff',
                paddingBottom: '80px'
            }}>
                <Typography variant='h4' sx={{
                    // paddingTop: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>COMPETENCES</Typography>

                <Typography sx={{
                    paddingY: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>FRONTEND</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                    flexWrap: 'wrap',
                }}>
                    {frontEnd.map((item, index) => (
                        <AnimatedSection>
                            <Box key={index} sx={{
                                width: '180px',
                                height: '200px',
                                padding: '25px',
                                textAlign: 'center',
                                background: 'hsla(0, 0%, 100%, .1)',
                                backdropFilter: 'blur(5px)',
                                borderRadius: '2px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 2)',
                                }
                            }}>
                                <img className='logo-animated' src={logoFront[index]} alt={item} style={{ width: '85px' }} />
                                <Typography variant="h6">{item}</Typography>
                            </Box>
                        </AnimatedSection>
                    ))}
                </Box>

                <Typography sx={{
                    paddingY: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >BACKEND</Typography>
                <Box sx={{
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center', gap: 5, flexWrap: 'wrap'
                }}>
                    {backEnd.map((item, index) => (
                        <AnimatedSection>
                            <Box key={index} sx={{
                                width: '180px',
                                height: '200px',
                                padding: '25px',
                                textAlign: 'center',
                                background: 'hsla(0, 0%, 100%, .1)',
                                backdropFilter: 'blur(5px)',
                                borderRadius: '2px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 2)',
                                }
                            }}>
                                <img className='logo-animated' src={logoBack[index]} alt={item} style={{ width: '85px' }} />
                                <Typography variant="h6">{item}</Typography>
                            </Box>
                        </AnimatedSection>
                    ))}
                </Box>

                <Typography sx={{
                    paddingY: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>BASE DE DONNEES</Typography>
                <Box sx={{
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center', gap: 5, flexWrap: 'wrap'
                }}>
                    {baseDeDonne.map((item, index) => (
                        <AnimatedSection>
                            <Box key={index} sx={{
                                width: '180px',
                                height: '200px',
                                padding: '25px',
                                textAlign: 'center',
                                background: 'hsla(0, 0%, 100%, .1)',
                                backdropFilter: 'blur(5px)',
                                borderRadius: '2px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 2)',
                                }
                            }}>
                                <img className='logo-animated' src={logoBd[index]} alt={item} style={{ width: '85px' }} />
                                <Typography variant="h6">{item}</Typography>
                            </Box>
                        </AnimatedSection>
                    ))}
                </Box>
            </Box>
        </section>
    );
}

export default Competences;
