import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import { green } from "@mui/material/colors"
import { KeyboardArrowDown, PushPin, VolumeOff } from "@mui/icons-material"
import { useMemo } from "react"
import randomClassGen from "../utilities/random-class-gen"

interface IContactDisplayProps {
  name: string
  text: string
  time: string
  msgCount?: number
  muted?: boolean
  pinned?: boolean
  img?: string
}



export const ContactDisplay = ({ muted, pinned, name, text, time, msgCount, img }: IContactDisplayProps) => {
  const dropArrowClassName = useMemo(() => randomClassGen(5), [])

  return (
    <>
      <Box sx={{ height: "70px", display: "flex", alignItems: "center", p: 1, cursor: "pointer", "&:hover": { bgcolor: "primary.main", [`& .arrow-down_${dropArrowClassName}`]: { transform: "translateX(0)" } } }}>
        <Avatar alt="Evans Djangbah" src={img} sx={{ mr: 1 }} />
        <Stack direction="column" justifyContent="space-between">
          <Typography>{name}</Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>{text}</Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Stack sx={{ height: "100%" }} direction="column" justifyContent="space-around" alignItems="end">
          <Typography sx={{ color: msgCount ? green[400] : "primary.dark", mr: 1 }} variant="body2">{time}</Typography>
          <Box sx={{ overflow: "hidden" }}>
            <Stack className={`arrow-down_${dropArrowClassName}`} direction="row" sx={{ transform: "translateX(20px)", transition: "all .2s", color: "#8696a0" }}>
              {muted && <VolumeOff />}
              {pinned && <PushPin />}
              {msgCount && <Avatar
                sx={{ visibility: msgCount ? "visible" : "hidden", height: 20, width: 20, p: "2px", bgcolor: green[400] }}>
                <Typography sx={{ fontSize: "12px" }}>{msgCount}</Typography>
              </Avatar>}
              <KeyboardArrowDown
                onClick={() => console.log("Icon clicked")}
                sx={{ ml: 0 }} />
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Divider light sx={{ ml: 7, mr: 1 }} />
    </>
  )
}
