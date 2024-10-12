import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import en from "../assets/usa.png"
import france from "../assets/france.png"
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import "../Contact.css"

interface Props {
    window?: () => Window;
}

export default function Navbar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [language, setLanguage] = React.useState('fr')
    const [flag, setFlag] = React.useState('fr')

    const handleDrawerToggle = () => {
        setMobileOpen(true);
    };
    const handleOpen = () => {
        setMobileOpen(false)
    }

    const { t, i18n } = useTranslation();
    // const changeLanguage = (lng: string) => {
    //     i18n.changeLanguage(lng)
    // }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        const languageSelected = event.target.value;
        setLanguage(languageSelected)
        console.log("Elie selectionne est:::", languageSelected);
        i18n.changeLanguage(languageSelected)
        setFlag(languageSelected)
    }


    const drawer = (
        <Box>
            <Box
                onClick={handleOpen}
                sx={{ paddingLeft: '1rem' }}
            >
                <FaArrowLeft size={25} />
            </Box>
            <Divider />
            <List onClick={handleOpen} sx={{
                paddingTop: '1.5rem',
                textAlign: 'center',
            }}>
                <ul style={{ gap: '2rem' }}>
                    <li className='list' style={{ paddingBottom: '1.5rem' }}>
                        <Link to='accueil' smooth={true} onClick={handleOpen}>
                            Accueil
                        </Link>
                    </li>
                    <li className='list' style={{ paddingBottom: '1.5rem' }}>
                        <Link to='apropos' smooth={true} onClick={handleOpen}>
                            {t('prop')}
                        </Link>
                    </li>
                    <li className='list' style={{ paddingBottom: '1.5rem' }}>
                        <Link to='competence' smooth={true} onClick={handleOpen}>
                            {t('competenceNav')}
                        </Link>
                    </li>
                    <li className='list' style={{ paddingBottom: '1.5rem' }}>
                        <Link to='contact' smooth={true} onClick={handleOpen}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(5px)',
                boxShadow: 'none'
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', ml: 'auto', justifyContent: 'center', alignItems: 'center', flexGrow: .45, }}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, }}>
                            {/* {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))} */}
                            <ul style={{ display: 'flex', gap: '2rem' }}>
                                <li className='list'>
                                    <Link to='accueil' smooth={true}>
                                        Accueil
                                    </Link>
                                </li>
                                <li className='list'>
                                    <Link to='apropos' smooth={true}>
                                        {t('prop')}
                                    </Link>
                                </li>
                                <li className='list'>
                                    <Link to='competence' smooth={true}>
                                        {t('competenceNav')}
                                    </Link>
                                </li>
                                <li className='list'>
                                    <Link to='contact' smooth={true}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ ml: 'auto', display: 'flex', justifyContent: 'flex-end', color: '#fff', gap: 0 }}
                        >
                            <img src={flag === 'fr' ? france : en} style={{ height: '1.2rem', width: '1.5rem', marginTop: '0.2rem' }} />
                            <select value={language} onChange={handleLanguageChange} style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                border: 'none',
                                color: '#f5f5f5',
                                cursor: 'pointer',
                                fontWeight: 700,
                                marginLeft: '.2rem',
                                padding: '.2rem',
                                outline: 'none'
                            }}>
                                <option value="fr"> Français</option>
                                <option value="en">English</option>
                            </select>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        marginTop: '5rem',
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: { xs: '60%' },
                            // backgroundColor: '#0c081bcf',
                            backdropFilter: 'blur(5px)', // Ajoute l'effet de flou
                            backgroundColor: 'rgb(12 8 27 / 76%)',
                            color: '#fff',
                            paddingTop: '1rem',
                            paddingBottom: { xs: '3rem' }
                        },
                        background: '#0c081bcf',
                        color: '#fff'
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
