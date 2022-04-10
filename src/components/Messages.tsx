import { Box, Stack } from "@mui/material"
import BackgroundImage from "./background.jpg"
import { Message } from "./Message"

const HEADER_SIZE = 64

export const Messages = () => {
  return (
    <Stack sx={{ px: 5, height: `calc(100vh - ${HEADER_SIZE}px - 66px)`, background: `url(${BackgroundImage})`, overflowY: "scroll" }}>
      <Box sx={{ flexGrow: 1 }} />
      <Message
        type="from"
        time="9:09 PM"
        read={true}
        delivered={true}
        text="If you want to understand it well, you'll have to install it on your PC.1" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="from"
        time="9:09 PM"
        text="You've done well 😂" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="from"
        time="9:09 PM"
        delivered={true}
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
      <Message
        type="to"
        time="9:09 PM"
        text="Waiting for a reply from Dr Ramde, he says he’ll check his schedule and get back to me on the possibility of having a zoom class tomorrow" />
    </Stack>
  )
}
