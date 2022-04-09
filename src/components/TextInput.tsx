import { AttachFileOutlined, EmojiEmotionsOutlined, KeyboardVoiceOutlined, SendOutlined } from "@mui/icons-material"
import { Box, IconButton, InputBase, Popover, Stack, Typography } from "@mui/material"
import { useRef, useState } from "react"
import Picker, { IEmojiData } from 'emoji-picker-react';


export const TextInput = () => {
  const [value, setValue] = useState("")
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  // const [popperOpen, setPopperOpen] = useState(false)

  const boxRef = useRef(null)

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setAnchorEl(boxRef.current);
  };

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    setValue(value + emojiObject.emoji);
  };

  const popperOpen = Boolean(anchorEl)

  return (
    <Box ref={boxRef}>
      <Stack alignItems="center" sx={{ bgcolor: "#f0f2f5" }} direction="row">
        <IconButton onClick={handleClick}>
          <EmojiEmotionsOutlined />
        </IconButton>
        <IconButton>
          <AttachFileOutlined />
        </IconButton>
        <InputBase
          sx={{ mx: 1, my: 1, flex: 1, height: "50px", bgcolor: "#ffffff", borderRadius: "10px", px: 1 }}
          placeholder="Type a message"
          inputProps={{ 'aria-label': 'search or start new chat' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IconButton sx={{ mx: 1 }}>
          {
            value.length === 0
              ? <KeyboardVoiceOutlined />
              : <SendOutlined />
          }
        </IconButton>
      </Stack>
      <Popover
        id={popperOpen ? 'simple-popover' : undefined}
        open={popperOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <Picker onEmojiClick={onEmojiClick} />
      </Popover>
    </Box >
  )
}
