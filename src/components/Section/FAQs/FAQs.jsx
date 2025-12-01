import {Box,Container,Grid,Typography} from "@mui/material";
import faqBanner from "../../../assets/faqs-banner.jpg";
import "./FAQs.css";
import CustomizedAccordions from "../../Accordion/Accordian";

export default function FAQs(){
    const faqs=[
        {
            question:"Why choose our medical for your family?",
            answer: "...."
        },
        {
            question:"Why we are different from others?",
            answer: "....."
        },{
        question:"Trusted & exprience senior care & love",
            answer: "....."
        },{
            question:"How to get appointment for emergency cases?",
            answer: "....."

        }

    ]

    return (
        <Box py={4}>
            <Container maxWidth="xl">
                <Typography color="primary.main" fontWeight={600} textAlign="center">
                    Get Your Answer
                </Typography>
                <Typography textAlign="center" variant="h2" mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container alignItems="center" spacing={5}>
                    <div className="faq-box">
                        <Grid item xs={12} md={6}>
                            <Box src={faqBanner} component="img" width="500px">
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box maxWidth={450}>
                                <CustomizedAccordions data={faqs}/>
                            </Box>
                        </Grid>
                        </div> 

                </Grid>

            </Container>

        </Box>
    )
}