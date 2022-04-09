import { Box, Stack, Typography } from "@mui/material"

interface IMessageProps {
  type: "from" | "to"
  read?: boolean
  delivered?: boolean
  text: string
  time: string
}

const HEADER_SIZE = 64

export const Message = ({ type, text }: IMessageProps) => {
  return (
    <Stack direction="row">
      {type === "from" && <Box sx={{ flexGrow: 1 }} />}
      <Box
        sx={{ bgcolor: type === "from" ? "#d9fdd3" : "#ffffff", maxWidth: "700px", p: 1, pr: 3, my: 1, mx: 1, borderRadius: "10px" }}>
        <Typography>{text}</Typography>
      </Box>
      {type === "to" && <Box sx={{ flexGrow: 1 }} />}
    </Stack>
  )
}
