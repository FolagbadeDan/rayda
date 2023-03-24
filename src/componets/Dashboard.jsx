import React, { useState, useEffect } from "react";
import { Container,Divider, Typography, Card, CardContent, CardMedia, Button, Grid } from '@material-ui/core'
import { borderRadius, width } from "@mui/system";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <Container 
        style={{
        background: "#FFFFFF",
        border: "1px solid #EAECF0",
        boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        borderRadius: "12px",
        display: "flex",
        flexWrap: 'wrap'        
      }}>

        <div style={{display:'flex', justifyContent:'space-between', width: '100%', paddingTop: '28px', paddingBottom : '24px'}}> 
            <Typography variant="h2" style={{fontSize:'18px', fontWeight:600}}>Featured Items</Typography>
            <Button variant="outlined" style={{fontSize: '14px', fontWeight: 600 ,padding :'8px, 14px, 8px, 14px', borderRadius:'8px'}}> View Auction </Button>
        </div>
        <Divider style={{backgroundColor:'#EAECF0', width: '100%'}}/>

        
        {data.length > 0 &&
          <Grid container spacing={3}>
            {data.map((item) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  variant="outlined"
                  style={{margin : "24px" , borderRadius : '12px', maxWidth : '300px', padding :'12px', height:'auto' }} 
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    width = '100%'
                  />
                  <CardContent style={{ flexGrow: 1 }}>
                    <div style={{display: 'flex'}}>
                        <span style={{ padding:'6px',fontSize:'14px',fontWeight : 500,borderRadius:'100px', backgroundColor: '#F2F4F7' }}>JD</span>
                    <Typography 
                    variant="h5" 
                    component="h2" 
                    style={{fontWeight: 600, fontSize:'12px'
                    }}
                    >
                      {item.name} <span style={{fontWeight: 400}}>(highest bidder)</span>

                    </Typography>
                    
                    </div>
                    <Typography gutterBottom 
                    variant="subtitle1"
                    style={{fontSize : '14px', fontWeight: 600}}
                    >
                      {item.title}
                    </Typography>

                    <Typography variant="h6" component="p"
                        style={{fontSize:'14px', fontWeight: 700}}
                    >
                      <span style={{fontWeight:400}}>Current Bid:</span> {item.bid}
                    </Typography>
                    <Button 
                      variant="contained"
                      color="primary"
                      style={{
                        alignSelf: "flex-end",
                        width: "100%",
                        borderRadius: "8px",
                        padding: "10px 16px"
                      }}                
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        }
    </Container>
  )}

  export default Dashboard;
  

