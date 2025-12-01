import {Box,Stack,Typography} from "@mui/material";

export default function Icons({img,title,bgColor,active=false,shadow=false,iconSize=60,}){
    return (
        <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        bgcolor={active ? "rgba(42,167,255,0.08)":bgColor} 
        p={4} 
        borderRadius={2}
        border={active ? "1px solid #2AA7FF" : "0"}
        boxShadow={shadow ? "0 4px 12px rgba(0,0,0,0.08)" : "none"}
        sx={{
            transition:"all 0.3s ease",
            "&:hover" :{
                transform:"translateY(-5px)",
                boxShadow:"0 6px 16px rgba(0,0,0,0.12)",
            },
        }}
        >
            <Box component="img" src={img} height={iconSize} width={title} alt={title} sx={{
                filter:"invert(38%) sepia(88%) saturate(4590%) hue-rotate(201deg) brightness(102%) contrast(101%)",
            }}>
            </Box>
            <Typography color={active ? "primary.main":"#7A7A7A"} fontSize={17} fontWeight={500}>
                {title}
            </Typography>

        </Stack>
    )
}