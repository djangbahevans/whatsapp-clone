import { CallOutlined, MoreHoriz, SearchOutlined, VideocamOutlined } from "@mui/icons-material"
import { Avatar, Box, Divider, IconButton, Stack, Typography } from "@mui/material"
import { Header, TextInput, Messages } from "."

const HEADER_SIZE = 64

export const MessageArea = () => {
  return (
    <Stack direction="column">
      <Header clickable>
        <Avatar sx={{ mr: 2 }} alt="Evans Djangbah" src="https://this-person-does-not-exist.com/img/avatar-ac0d9b922dfd54469bc09f47ce7319b1.jpg" />
        <Stack>
          <Typography>Evans Djangbah</Typography>
          <Typography sx={{ color: "primary.dark", fontWeight: 300, fontSize: "0.8rem" }}>last seen today at 5:46 PM</Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <VideocamOutlined />
        </IconButton>
        <IconButton sx={{ mr: 2 }}>
          <CallOutlined />
        </IconButton>
        <Divider light orientation="vertical" variant="middle" sx={{}} flexItem />
        <IconButton sx={{ ml: 2 }}>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Header>
      <Stack direction="column" sx={{ flexGrow: 1, height: `calc(100vh - ${HEADER_SIZE}px)` }}>
        <Box sx={{ flexGrow: 1, height: `calc(100vh - ${HEADER_SIZE}px - 66px)` }}>
          <Messages />
        </Box>
        <TextInput />
      </Stack>
    </Stack>
  )
}
