import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.grey[100], 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[100], 0.12),
    },

  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function AppBreadcrumbs() {
  return (
    <Box sx={{pb: 3}} role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">

        <StyledBreadcrumb
          // component="a"
          href="#"
          label="Головна"
          // icon={<HomeIcon fontSize="medium" />}
        />

        {/* <StyledBreadcrumb component="a" href="#" label="Catalog" /> */}

        <StyledBreadcrumb
          label="IP адреси"
          deleteIcon={<ExpandMoreIcon />}
          // onDelete={handleClick}
        />
        
      </Breadcrumbs>
    </Box>
  );
}
