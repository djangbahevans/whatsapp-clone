import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { Box, ClickAwayListener, Divider, IconButton, InputBase } from "@mui/material";
import { green } from '@mui/material/colors';
import { useRef, useState } from 'react';

interface ISearchProps {
  onChange?(value: string): void
}

export const Search = ({ onChange }: ISearchProps) => {
  const [active, setActive] = useState(false)

  const inputRef = useRef<null | HTMLInputElement>(null)

  if (active) {
    const el = inputRef.current?.getElementsByTagName("input")[0]
    el?.focus()
  }

  const handleClickAway = () => {
    setActive(false)
  }

  // TODO: Fix the onclick handler to update state
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <>
        <Box sx={{ bgcolor: "#fff", p: 1 }}>
          <Box sx={{ p: '2px 4px', borderRadius: "10px", display: 'flex', alignItems: 'center', bgcolor: "primary.main" }}>
            {/* TODO: Fix the onclick handler to update state */}
            <IconButton onClick={() => { setActive(!!active) }} sx={{ p: '10px', color: active ? green[400] : "" }} aria-label="menu">
              {active
                ? <ArrowBackIcon />
                : <SearchIcon />
              }
            </IconButton>
            <InputBase
              ref={inputRef}
              onChange={e => (onChange) && onChange(e.target.value)}
              sx={{ mx: 1, flex: 1 }}
              placeholder="Search or start new chat"
              inputProps={{ 'aria-label': 'search or start new chat' }}
              onFocus={() => setActive(true)}
            />
          </Box>
        </Box>
        <Divider />
      </>
    </ClickAwayListener>
  );
}
