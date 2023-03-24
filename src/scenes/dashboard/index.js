import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between">
            <Header title="Admin Dashboard" subtitle="Manage your accounts"/>
        </Box>
    </Box>
  )
}

export default Dashboard