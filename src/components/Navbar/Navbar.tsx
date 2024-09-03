"use client"
import { AppBar, Box, Button, createTheme, Divider, Toolbar } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from '@emotion/react'
import getTheme from '@/lib/theme'

export default function Navbar() {
    const theme = createTheme(getTheme())

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ backgroundColor: 'white', pl: '30px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <Toolbar disableGutters>
                    <Link href="/">
                        <Image src="/nav_logo.webp" alt="logo" width="90" height="45" />
                    </Link>
                    <Divider orientation="vertical" sx={{ color: 'black', ml: '40px' }} flexItem variant="middle" />
                    <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                        <Button sx={{ fontSize: '1.25rem', my: 2, color: 'black', display: 'block', mx: '12px', textTransform: 'none', ml: '40px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                            Products
                        </Button>
                        <Button sx={{ fontSize: '1.25rem', my: 2, color: 'black', display: 'block', mx: '12px', textTransform: 'none', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                            Pricing
                        </Button>
                        <Button sx={{ fontSize: '1.25rem', my: 2, color: 'black', display: 'block', mx: '12px', textTransform: 'none', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                            Blog
                        </Button>
                        <Button sx={{ fontSize: '1.25rem', my: 2, color: 'black', display: 'block', mx: '12px', textTransform: 'none', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                            Community ✨
                        </Button>
                    </Box>
                    <Box sx={{ ml: 'auto', display: 'flex' }}>
                        <Button variant='outlined' sx={{ color: '#fe2354', borderColor: 'rgba(254, 35, 84, 0.5)', fontWeight: 600, textTransform: 'none', minWidth: '100px', padding: '10px 20px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                            Log in
                        </Button>
                        <Button variant='contained' sx={{ backgroundColor: '#fe2354', color: 'white', mx: '20px', textTransform: 'none', fontWeight: 400, minWidth: '140px', padding: '10px 20px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                            Early Access
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}