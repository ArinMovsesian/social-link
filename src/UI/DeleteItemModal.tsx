import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';  
import TextField from '@mui/material/TextField';
import Item from '../models/Item';
import { ItemContext } from '../store/item-context';
const DeleteItemModal: React.FC<{open: boolean; handleClose: () => void; link: string; id: string}> = (props) => {
  const itemCtx = React.useContext(ItemContext);
  const [removeBtnState, setRemveBtnState] = React.useState<boolean>(true);
  const [removeItemText, setRemoveItemText] = React.useState<string>('');
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const removeItemTextHandler = (event: any) => {
    setRemveBtnState(true);
    if(event.target.value === 'confirm') {
      setRemveBtnState(false);
    }
    setRemoveItemText(event.target.value);
  }
  const removeItemHandler = () => {
    itemCtx.removeItem(props.id);
    props.handleClose();
  }
  return (<div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            for delete <span>{props.link}</span> pls enter confirm characters.
          
          </Typography>
          <TextField id="deleteSubmit" label="confirm" variant="outlined" fullWidth={true} value={removeItemText} onChange={removeItemTextHandler}/>
          <Button variant="text" onClick={props.handleClose}>CANCEL</Button>
          <Button variant="text" disabled={removeBtnState} onClick={removeItemHandler}>DELETE</Button>
        </Box>
      </Modal>
  </div>)
}
export default DeleteItemModal;