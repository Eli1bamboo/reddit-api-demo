import React from 'react';
import Dialog from '@material-ui/core/Dialog';

function Modal(props) {
    const { onClose, open, imgUrl } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} maxWidth={'lg'}>
            <img src={imgUrl} style={{ width: '100%' }} />
        </Dialog>
    );
}

export default function Thumbnail(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { imgUrl, title } = props;

    return (
        <React.Fragment>
            <img src={imgUrl} alt={title} style={{ width: '100%' }} onClick={handleOpen} />
            <Modal imgUrl={imgUrl} open={open} onClose={handleClose} />
        </React.Fragment>
    );
}