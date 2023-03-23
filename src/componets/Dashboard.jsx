import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid } from '@material-ui/core'

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
        
        {data.length > 0 &&
          <Grid container spacing={3}>
            {data.map((item) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  variant="outlined"
                  style={{margin : "24px"}} 
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    width = '100%'
                  />
                  <CardContent style={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" component="span" style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "#5E6C84",
                      marginLeft: "6px"
                    }}>
                      (highest bidder)
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      {item.title}
                    </Typography>
                    <Typography variant="h6" component="p">
                      Current Bid: {item.bid}
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
  

