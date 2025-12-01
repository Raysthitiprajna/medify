import { Box,Button,Container,Grid,Typography } from "@mui/material";
import IconCard from "../../Icons/Icons";
import icon1 from "../../../assets/Drugstore.png";
import icon2 from "../../../assets/primary-care.png";
import icon3 from "../../../assets/cardiology.png";
import icon4 from "../../../assets/mri.png";
import icon5 from "../../../assets/blood-test.png";
import icon6 from "../../../assets/piscologist.png";
import icon7 from "../../../assets/X-Ray.png";

export default function Specialisation () {
    const data =[
        {icon:icon1,title:"Dentistry"},
        {icon:icon2,title:"Primary Care"},
        {icon:icon3,title:"Cardiology"},
        {icon:icon4,title:"MRI Resonance"},
        {icon:icon5,title:"Blood Test"},
        {icon:icon6,title:"Piscologist"},
        {icon:icon1,title:"Laboratory"}
        ,{icon:icon7,title:"X-Ray"}
    ];

    return (
        <Box sx={{
            py:{xs:6,md:8},
            background:"linear-gradient(180deg,#E7F0FF 0%, #E8F1FF 100%)",
        }}>
            <Container sx={{textAlign:"center"}}>
                <Typography variant="h4" fontWeight={700} color="#0c1E58" mb={6}>
                    Find by Specialisation
                </Typography>
                <Grid container spacing={{xs:2,sm:3,md:4}} justifyContent="center" mb={5}>
                    {data.map((item) => (
                        <Grid item xs={12} sm={6} md={3} key={item.title}>

                            <IconCard img={item.icon} title={item.title} bgColor="#FFFFFF" shadow={true} iconSize={60}>

                            </IconCard>
                            </Grid>
                    ))}

                </Grid>

            </Container>

        </Box>
    )
}