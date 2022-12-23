import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Message( setOpen, open, dialogHandler ) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const textHandler = () => {
        setOpen(false);
    }

    return (
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        >
            <DialogTitle>Contact</DialogTitle>
            <DialogContent>
                <TextField 
                    type="text"
                    placeholder="type your name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    fullWidth/>
            </DialogContent>
            <DialogContent>
                <TextField 
                    type="email"
                    placeholder="type your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    fullWidth/>
            </DialogContent>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 3, width: '40ch' }, }} noValidate autoComplete="off">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Type your message..."
                    multiline
                    maxRows={4}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message} 
                />
            </Box>
            <DialogActions>
                <Button onClick={dialogHandler}>Cancel</Button>
                <Button onClick={textHandler}>Send</Button>
            </DialogActions>
        </Dialog>
  )
};
