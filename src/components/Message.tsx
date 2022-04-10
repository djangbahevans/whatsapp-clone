import { Box, Stack, Typography } from "@mui/material"
import { Check } from "@mui/icons-material"

interface IMessageProps {
  type: "from" | "to"
  read?: boolean
  delivered?: boolean
  text: string
  time: string
}

export const Message = ({ type, text, time, read, delivered }: IMessageProps) => {
  return (
    <Stack direction="row">
      {type === "from" && <Box sx={{ flexGrow: 1 }} />}
      <Stack
        direction="column"
        alignItems="end"
        sx={{ position: "relative", bgcolor: type === "from" ? "#d9fdd3" : "#ffffff", maxWidth: "700px", p: 1, pr: 3, my: "1px", mx: 1, borderRadius: "10px" }}>
        <Typography sx={{ color: "#111b21" }}>{text}</Typography>
        <Stack direction="row" justifyContent="center" sx={{ color: "#667781" }}>
          <Typography sx={{ fontSize: "13px", color: "#667781" }}>{time}</Typography>
          {type === "from" && <Box sx={{ position: "relative" }}>
            <Check sx={{ width: "20px", height: "20px", color: read ? "#53bdeb" : "inherit" }} />
            {delivered && <Check sx={{ position: "absolute", left: "5px", top: "0px", width: "20px", height: "20px", color: read ? "#53bdeb" : "inherit" }} />}
          </Box>}
        </Stack>
      </Stack>
      {type === "to" && <Box sx={{ flexGrow: 1 }} />}
    </Stack>
  )
}
