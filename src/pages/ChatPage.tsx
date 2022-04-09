import { Box, Stack } from "@mui/material"
import { ContactsList, MessageArea } from "../components"

const ChatPage = () => {
  return (
    <Stack direction="row" sx={{ height: "100%" }}>
      <Box sx={{ width: "600px" }}>
        <ContactsList />
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <MessageArea />
      </Box>
    </Stack>
  )
}

export { ChatPage }

