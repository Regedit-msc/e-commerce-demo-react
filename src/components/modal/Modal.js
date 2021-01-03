import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import bg from '../../assets/bg/Login-enterprise-bg.jpg';
import './Modal.css';
import LoginDesktop from './Desktop/LoginDesktop';
import MobileLogin from './Mobile/MobileLogin';

const Modal = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
    };

    let a = {
        style: {
            minWidth: "63vw",
            overflow: 'hidden',
            background: `#fff url(${bg}) 0 100% no-repeat`,
            display: 'flex',
            position: 'fixed',
            width: '100%',
        }
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Login</Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} PaperProps={a}>
                <DialogContent style={{padding: '0'}}>
                    <div className="desktop--page" style={{ backgroundColor: 'white'}}>
                    <div className="close" onClick={handleClose}>X</div>
                        <LoginDesktop />
                    </div>
                    <div className="mobile--page">
                    <div className="close--mobile" onClick={handleClose}>X</div>
                        <MobileLogin />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Modal;