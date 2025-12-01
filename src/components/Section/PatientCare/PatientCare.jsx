import { Box,Container,Typography,List,ListItem,ListItemIcon,ListItemText,Button } from "@mui/material";
import banner from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick.png";

export default function PatientCare(){
    return (
        <Box py={6} sx={{background:"linear-gradient(#E7F0FF,#E8F1FF)"}}>
            <Container maxWidth="lg">
                <Box sx={{display:"flex", flexDirection:{xs:"column",md:"row"},alignItems:"center",gap:6}}>
                    <Box component="img" src={banner} alt="Patient Caring" sx={{
                        width:{xs:"100%",md:"50%"},
                        borderRadius:2,
                        objectFit:"cover"
                    }}>
                    </Box>
                    <Box sx={{width:{xs:"100%",md:"50%"}}}>
                        <Typography fontWeight={600} color="primary.main" mb={1}>
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>
                        <Typography variant="h2" mb={2}>
                            Patient <Box component="span" color="primary.main">Caring</Box>
                        </Typography>
                        <Typography color="#77829D" lineHeight={1.8} mb={3}>
                            Our goal is to deliver quality of care in a courteous,respectful,and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.
                        </Typography>

                        <List>
                            {[
                                "Stay Updated About Your Health",
                                "Check Your Results Online",
                                "Manage Your Appointments"
                            ].map((text,index) => (
                                <ListItem key={index} disableGutters>
                                    <ListItemIcon sx={{minWidth:32}}>
                                        <Box component="img" src={tick} alt="tick"
                                        height={22}
                                        width={22} >
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText primary={text} primaryTypographyProps={{
                                        fontSize:{xs:14,md:18},
                                        fontWeight:500,color:"#1B3C74"
                                    }}
                                    />
                                </ListItem>

                            ))}
                        </List>
                        <Button variant="contained" color="primary" sx={{mt:3,textTransform:"none"}}>
                            Free Consultation

                        </Button>

                    </Box>

                </Box>
            </Container>

        </Box>
    );
}