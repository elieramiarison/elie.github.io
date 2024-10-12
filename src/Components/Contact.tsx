import { Box, Button, TextField } from "@mui/material"
import Typography from "@mui/material/Typography"
import "../Contact.css"
import { LuSend } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import line from "../assets/lg-line.svg"
import { useState, useRef } from "react";
import CircularIndeterminate from "./Spinner";
import Swal from 'sweetalert2';
import { AnimatedSection } from "../animation/animation";
// @ts-ignore
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import "../Contact.css"


const Contact = () => {

    const { t } = useTranslation()

    const form = useRef<HTMLFormElement>(null)

    const [name, setName] = useState<string>('')
    const [mail, setMail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [succes, setSucces] = useState(false)
    const [err, setErr] = useState({
        name: false,
        mail: false,
        message: false
    })




    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const errors = {
            name: name === '',
            mail: mail === '',
            message: message === ''
        };
        setErr(errors);

        if (errors.name || errors.mail || errors.message) {
            setLoading(false);
            return;
        }

        if (form.current) {
            try {
                await (emailjs as any).sendForm(
                    'service_s2sfg5g',
                    'template_l8fy6d3',
                    form.current,
                    'aCbH99VNHiqMk9ncp'
                );
                setTimeout(() => {
                    console.log('SUCCESS!');
                    setName('');
                    setMail('');
                    setMessage('');
                    setLoading(false);
                    setSucces(true);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: t('succe'),
                        showConfirmButton: false,
                        timer: 999999,
                        width: 'fit-content',
                        customClass: {
                            icon: 'custom-icon',
                            title: 'custom-title'
                        }
                    });
                }, 2000);
            } catch (error) {
                console.error('FAILED...', error);
                setLoading(false);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: t('error'),
                    text: t('error1'),
                    showConfirmButton: true,
                    timer: 1500
                });
            }
        } else {
            console.error("Form reference is null.");
            setLoading(false);
        }
    };


    return (
        <section id="contact">
            <Box>
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
                    }}>CONTACT</Typography>
                    <Box
                        component='form'
                        onSubmit={handleSubmit}
                        ref={form}
                        sx={{
                            position: 'relative',
                            marginTop: '55px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            zIndex: 10,
                        }}>
                        <AnimatedSection>
                            <Typography sx={{
                                marginBottom: '0.3rem', color: 'hsla(0, 0%, 100%, .8)',
                                mx: 2, maxWidth: { xs: '19.98rem', sm: 'none' }
                            }}>{t('contact')}</Typography>
                        </AnimatedSection>
                        <AnimatedSection>
                            <TextField
                                placeholder={t('nom')}
                                name="from_name"
                                sx={{
                                    width: { xs: '19em', sm: '29em', md: '29em' },
                                    border: '1px solid #ffffff59',
                                    borderRadius: '.375rem',
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'hsla(0, 0%, 100%, .8)',
                                        fontSize: '1em',
                                        opacity: 0.9,
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#ffffff59', // couleur normale
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#ffffff59', // couleur au survol
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#ffffff59', // couleur quand il est focus
                                        },
                                    },
                                }}
                                inputProps={{
                                    sx: {
                                        height: '7px',
                                        color: '#fff'
                                    },
                                }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {err.name && (
                                <Typography color="#ff2079" sx={{ fontSize: '0.75rem' }} >{t('alName')}</Typography>
                            )}
                        </AnimatedSection>

                        <AnimatedSection>
                            <TextField
                                placeholder={t('mail')}
                                name="user_email"
                                sx={{
                                    width: { xs: '19em', sm: '29em', md: '29em' },
                                    border: '1px solid #ffffff59',
                                    borderRadius: '.375rem',
                                    marginTop: '9px',
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'hsla(0, 0%, 100%, .8)',
                                        fontSize: '1em',
                                        opacity: 0.9,
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#ffffff59',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#ffffff59',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#ffffff59',
                                        },
                                    },
                                }}
                                inputProps={{
                                    sx: {
                                        height: '7px',
                                        color: '#fff'
                                    },
                                }}
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                            {err.mail && (
                                <Typography color="#ff2079" sx={{ fontSize: '0.75rem' }}>{t('alMail')}</Typography>
                            )}
                        </AnimatedSection>

                        <AnimatedSection>
                            <TextField
                                placeholder={t('message')}
                                multiline
                                rows={3}
                                name="message"
                                sx={{
                                    width: { xs: '19em', sm: '29em', md: '29em' },
                                    border: '1px solid #ffffff59',
                                    borderRadius: '.375rem',
                                    marginTop: '9px',
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'hsla(0, 0%, 100%, .8)',
                                        fontSize: '1em',
                                        opacity: 0.9,
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#ffffff59',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#ffffff59',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#ffffff59',
                                        },
                                    },
                                }}
                                inputProps={{
                                    sx: {
                                        height: '55px',
                                        color: '#fff'
                                    },
                                }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {err.message && (
                                <Typography color="#ff2079" sx={{ fontSize: '0.75rem' }}>{t('alMessage')}</Typography>
                            )}
                        </AnimatedSection>

                        {loading ? <span style={{ marginTop: '1rem' }}><CircularIndeterminate /> </span> : (
                            <AnimatedSection>
                                <Box sx={{
                                    display: 'flex',
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
                                            type="submit"
                                            sx={{
                                                padding: '10px 20px',
                                                color: '#fff',
                                                // background: 'transparent',
                                                background: 'hsla(0, 0%, 100%, .1)',
                                                backdropFilter: 'blur(5px)',
                                                borderRadius: '5px',
                                                border: 'none',
                                                backgroundColor: '#181136',
                                                whiteSpace: 'nowrap',
                                                cursor: 'pointer',
                                                gap: '8px',
                                                width: { xs: '21.5em', sm: '33em', md: '33em' },
                                                height: '2.5em',
                                                textAlign: 'center'
                                            }}>
                                            {t('send')} <LuSend />
                                        </Button>
                                    </div>
                                </Box>
                            </AnimatedSection>
                        )}
                        <Box component='img' src={line} sx={{
                            position: 'absolute',
                            bottom: 0,
                            opacity: '0.4',
                            zIndex: -2,
                            width: '100%',
                            animation: 'moveUpDown 20s ease-in-out infinite, changeColor 2s linear infinite',
                            '@keyframes moveUpDown': {
                                '0%': { transform: 'translateY(0)' },
                                '50%': { transform: 'translateY(-50px)' },
                                '100%': { transform: 'translateY(0)' },
                            },
                            '@keyframes changeColor': {
                                '0%': { filter: 'hue-rotate(0deg)' },
                                '50%': { filter: 'hue-rotate(180deg)' },
                                '100%': { filter: 'hue-rotate(360deg)' },
                            }
                        }} />
                    </Box>

                    {/* Footer */}
                    <Box sx={{
                        marginTop: '150px',
                        background: '#0d082194',
                        backdropFilter: 'blur(7px)',
                        padding: '40px',
                        gap: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'column', md: 'row' }
                    }}>
                        {/* <Typography variant="h6" sx={{
                        fontSize: '1em'
                    }}> <IoLocationSharp /> Fianarantsoa - Madagascar</Typography> */}
                        <Typography variant="h6" sx={{
                            fontSize: '1em'
                        }}> <IoMdCall /> +261 34 25 270 04</Typography>
                        <Typography variant="h6" sx={{
                            fontSize: '1em'
                        }}> <AiOutlineMail /> eliespirale1@gmail.com</Typography>
                        <Typography variant="h6" sx={{
                            fontSize: '1em'
                        }}>© 2024 Elie Ramiarison</Typography>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}

export default Contact