import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import './Login.css';
import LoginDesktop from './Desktop/LoginDesktop';
import MobileLogin from './Mobile/MobileLogin';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => {
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        setOpen(false);
        history.goBack();
    };

    let a = {
        style: {
            minWidth: "63vw",
            overflow: 'hidden',
            // background: `#fff url(${bg}) 0 100% no-repeat`,
            background: `#fff 0 100% no-repeat`,
            display: 'flex',
            position: 'fixed',
            width: '100%',
        }
    }

    return (
        <div>
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

export default withRouter(Login);