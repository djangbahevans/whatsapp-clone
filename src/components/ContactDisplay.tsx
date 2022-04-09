import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import { green } from "@mui/material/colors"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useMemo } from "react"

interface IContactDisplayProps {
  name: string
  text: string
  time: string
  msgCount?: number
}



export const ContactDisplay = ({ name, text, time, msgCount }: IContactDisplayProps) => {
  const dropArrowClassName = useMemo(() => {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 5; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
  }, [])

  return (
    <>
      <Box sx={{ height: "70px", display: "flex", alignItems: "center", p: 1, cursor: "pointer", "&:hover": { bgcolor: "primary.main", [`& .arrow-down_${dropArrowClassName}`]: { display: "inline-block" } } }}>
        <Avatar alt="Evans Djangbah" sx={{ mr: 1 }} />
        <Stack direction="column" justifyContent="space-between">
          <Typography>{name}</Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>{text}</Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Stack sx={{ height: "100%" }} direction="column" justifyContent="space-around" alignItems="end">
          <Typography sx={{ color: msgCount ? green[400] : "primary.dark", mr: 1 }} variant="body2">{time}</Typography>
          <Stack direction="row" sx={{ mr: 1 }}>
            <Avatar
              sx={{ visibility: msgCount ? "visible" : "hidden", height: 20, width: 20, p: "2px", bgcolor: green[400] }}>
              <Typography sx={{ fontSize: "12px" }}>{msgCount}</Typography>
            </Avatar>
            <KeyboardArrowDownIcon
              className={`arrow-down_${dropArrowClassName}`}
              onClick={() => console.log("Icon clicked")}
              sx={{ ml: 0, color: "primary.dark", display: "none" }} />
          </Stack>
        </Stack>
      </Box>
      <Divider light sx={{ ml: 7, mr: 1 }} />
    </>
  )
}
