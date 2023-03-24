import React from 'react'
import { Container, Typography, Badge, IconButton, Divider, Button,Avatar } from '@material-ui/core'
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";

import avatarphoto from '../assets/avatarphoto.png'
import image from '../assets/image.png'
import { padding } from '@mui/system';




const Header = () => {
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:'30px' }}>
        <div style={{alignItems:'left'}}>
          <Typography 
          variant='h1' 
          style={{textAlign:'left',fontWeight: 600, fontSize:'30px'}}>Welcome</Typography>
          <Typography style={{textAlign:'left',fontWeight: 400, fontSize:'16px'}} >your current sales aution and activity</Typography>
        </div>

        <div style={{ position: 'relative' }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Badge badgeContent={2} color="secondary" overlap="circle" style={{ position: 'relative',top: '5px', right: '10px' }} />
        </div>
      </div>
      <Divider style={{ marginTop:'20px',marginBottom:'32px',backgroundColor:'#EAECF0', width: '100%'}}/>

      <Container 
        style={{
          boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
          borderRadius: "12px",     
          marginTop: '30px',
          width : '100%',
          padding: '20px',
          alignItems: 'center',
          color: '#FFFFFF'
      }}> 

        <div >
            <img src={`${image}`} style={{borderRadius:'12px', width:'100%'}} alt='gradient'/>
            </div>
            <Container style={{display:'flex', justifyContent: 'space-between'}}>

                <Avatar 
                alt="Profile" src={avatarphoto} style={{ borderRadius: '200px', width:'144px',height: '144px'}} />
            
            <Typography style={{ fontWeight: 600, fontSize: '24px', marginBottom: '5px' ,color:'#191828'}}>
                Starts in: 3 days : 2 hours : 24 minutes
            </Typography>
            <Button variant='outlined' startIcon={<ThumbUpAltOutlined />}> Accept Invite</Button>
        </Container>

        
        
        <div>
          <Badge badgeContent="not live" color="secondary" style={{ opacity: '0.7', fontSize: '10px', fontWeight: '300' }} />
          <Typography style={{ opacity: '0.7', fontSize: '10px', fontWeight: '300' }}>not layered</Typography>
        </div>
      </Container>
    </Container >
  )
}

export default Header

