import { AppBar, Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";

interface IHeaderProps {
  children?: ReactNode
  clickable?: boolean
}

export const Header = ({ children, clickable }: IHeaderProps) => {

  return (
    <Box sx={{ borderRight: "1px solid #d1d7db", cursor: clickable ? "pointer" : "default" }}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
