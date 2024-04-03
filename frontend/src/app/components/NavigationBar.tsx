'use client'

import Image from 'next/image'
import * as React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import PersonOutline from '@mui/icons-material/PersonOutline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const pages = ['Marketplace', 'Ranking', 'Connect a wallet']

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" color="transparent" sx={{ zIndex: 0, boxShadow: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            className="hidden md:block"
            src="/images/logo.svg"
            alt="logo"
            width={300}
            height={300}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Typography textAlign="center">Sign up</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1.5 }}>
            <Image
              className="xs:block place-items-center md:hidden"
              src="/images/logo.svg"
              alt="logo"
              width={250}
              height={250}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: 5,
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: { xs: '12px', md: '18px' },
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              className="my-2 block rounded bg-orange-500 px-4 text-white hover:bg-orange-700"
              sx={{
                textTransform: 'none',
              }}
            >
              <PersonOutline /> Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavigationBar
