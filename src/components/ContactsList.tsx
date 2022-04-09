import { Add, FilterTiltShift, MoreHoriz } from "@mui/icons-material"
import { Avatar, Badge, Box, IconButton, styled } from "@mui/material"
import { Header, Search } from "."
import { ContactDisplay } from "./ContactDisplay"

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  }
}));

const HEADER_SIZE = 64
const SEARCHBAR_SIZE = 48 + 16

const ContactsList = () => {
  return (
    <Box>
      <Header>
        <Avatar alt="Evans Djangbah" src="https://this-person-does-not-exist.com/img/avatar-ac0d9b922dfd54469bc09f47ce7319b1.jpg" />
        <Box sx={{ flexGrow: 1 }} />
        <StyledBadge
          sx={{ mr: 2 }}
          overlap="circular"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          variant="dot"
        >
          <IconButton >
            <FilterTiltShift />
          </IconButton>
        </StyledBadge>
        <IconButton sx={{ mr: 2 }}>
          <Add />
        </IconButton>
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Header>
      <Search />
      <Box sx={{ overflowY: "scroll", height: `calc(100vh - ${SEARCHBAR_SIZE}px - ${HEADER_SIZE}px)` }}>
        <ContactDisplay
          name="Evans Djangbah"
          text="Hey, what's up?"
          msgCount={1}
          time="9:46"
        />
        <ContactDisplay
          name="Dennise Deborah"
          text="Hey, what's up?"
          time="9:46"
        />
      </Box>
    </Box>
  )
}

export { ContactsList }

