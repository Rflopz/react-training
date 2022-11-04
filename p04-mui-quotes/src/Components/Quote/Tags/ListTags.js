import React from 'react'
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ListTags({quote}) {
  return (
    
    <div className='container'> 
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
        >
            {quote?.data?.tags?.map((tag) => (
                <Item key={tag}>{tag}</Item> 
            ))
            }
        </Stack>
    </div>
  )
}

export default ListTags