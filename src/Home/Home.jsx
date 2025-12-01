import {Container,Box,Stack} from "@mui/material";
import Hero from "../components/Hero/Hero";
import HospitalSearch from "../components/HospitalSearch/HospitalSearch";
import FAQs from "../components/Section/FAQs/FAQs";
import OurFamilies from "../components/Section/OurFamilies/OurFamilies";
import ExternalBlogs from "../components/Section/ExternalBlogs/ExternalBlog";
import PatientCaring from "../components/Section/PatientCare/PatientCare";
import Specialists from "../components/Section/Specialists/Specialists";
import Specialisation from "../components/Section/Specialisation/Specialisation";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";

export default function Home(){
    return (
        <Box>
            <Box sx={{background:"linear-gradient(#E7F0FF,rgba(232,241,255,0.47)90%,#fff 10%)",}}mb={4}>
                <Navbar/>
                <Container maxWidth="xl">
                    <Hero />
                    <Stack p={{xs:2.5,md:8}} mt={{xs:-2,md:0,lg:-6,xl:-10}} position="relative" zIndex={99} bgcolor="#fff" borderRadius="15px" spacing={10} boxShadow="0 0 12px rgba(0,0,0,0.1">
                        <HospitalSearch/>
                        <Layout/>
                    </Stack>
                </Container>
            </Box>
            <Specialisation/>
            <Specialists/>
            <PatientCaring/>
            <ExternalBlogs/>
            <OurFamilies/>
            <FAQs/>
        </Box>
    );
}