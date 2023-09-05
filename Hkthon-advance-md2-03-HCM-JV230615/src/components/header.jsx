import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" style={{ backgroundColor: 'red' }}>
    <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'center' }}>
      <h1>To Spend You have money</h1>
    </Toolbar>
  </AppBar>
</Box>
  );
}
