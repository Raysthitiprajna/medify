import DaySelector from "./DaySelector/DaySelector";
import {Box,Typography} from "@mui/material";
import { useState } from "react";
import {startOfDay} from "date-fns";
import TimeSelector from "./TimeSelector/TimeSelector";

export default function Calendar ({availableSlots,details,handleBooking}){
    const[selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    const totalSlots = 
    availableSlots.morning.length + availableSlots.afternoon.length + 
    availableSlots.evening.length;

    return (
        <Box>
            <DaySelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} details={details} handleBooking={handleBooking}/>
            <TimeSelector availableSlots={availableSlots} selectedDate={selectedDate} details={details} handleBooking={handleBooking}/>
        </Box>
    );
}