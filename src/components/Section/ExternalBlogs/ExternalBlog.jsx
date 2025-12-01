import { Box,Container,Typography} from "@mui/material";
import BlogCard from "./BlogCard";

export default function ExternalBlogs(){
    return (
        <Box py={6} bgcolor="#f9f9f9">
            <Container maxWidth="lg">
                <Typography color="primary.main" fontWeight={600} textAlign="center" >
                    Blog & News
                </Typography>
                <Typography textAlign="center" variant="h2" mb={4}>
                 Read Our Latest News
                </Typography>
                <Box sx={{overflow:"auto" ,pb:2}}>
                    <Box sx={{display:"flex",gap:3,minWidth:"100%"}}>
                        {[1,2,3].map((item) => (
                            <Box key={item} sx={{minWidth:300}}>
                           <BlogCard/>
                           </Box>
                           
                        ))}

                    
                 </Box>
                </Box>
            </Container>

        </Box>
    );
}