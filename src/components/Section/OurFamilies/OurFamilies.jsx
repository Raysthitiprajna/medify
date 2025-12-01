import { Box,Container,Grid,Typography,Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

export default function OurFamilies(){
    const stats =[
        {icon:<FavoriteIcon color="primary"/>,value:"5000+",label:"Happy Patients"},
        {icon:<LocalHospitalIcon color="error"/>,value:"200+",label:"Hospitals"},
        {icon:<ScienceIcon sx={{color:"#FBC02D"}} />,value:"1000+",label:"Laboratories"},
        {icon:<MedicalServicesIcon sx={{color:"#4CAF50"}} />,value:"700+",label:"Expert Doctors"}
    ];

    return (
        <Box py={6} sx={{background:"linear-gradient(#E7F0FF,#E8F1FF)"}}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} color="primary.main" mb={1}>
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography variant="h2" mb={2}>
                           Our Families
                        </Typography>
                        <Typography color="#77829D" lineHeight={1.8}>
                            We will work with you to develop individualised care plans,including management of chronic disease. If we cannot assist, we can provide about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            {stats.map((stat,index) => (
                                <Grid item xs={6} key={index}>
                                    <Paper elevation={3}
                                   sx={{p:3,
                                    textAlign:"center",
                                    borderRadius:2,
                                    bgcolor:"#fff"
                                   }}
                                   >
                                    <Box mb={1}>
                                     {stat.icon}
                                    </Box>
                                    <Typography variant="h5" fontWeight={700} color="#1B3C74">
                                        {stat.value}
                                    </Typography>
                                    <Typography fontSize={14} color="#1B3C74">
                                {stat.label}
                                    </Typography>
                                   </Paper>
                                </Grid>
                            ))}

                        </Grid>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
}