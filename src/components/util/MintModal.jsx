import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector , useDispatch} from "react-redux";
import { loadNfts } from "../../store/nft/nft.action.js";
import { web3service } from "../../services/web3.service.js";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function MintModal({ nft }) {

  const dispatch = useDispatch()
  const contractData = useSelector((state) => state.contractModule.contractData);
  const addressConnected = useSelector((state) => state.userModule.currUserAddress)
  const [modalStatus, setModalStatus] = React.useState('start');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const mint = async () => {
  console.log('start minting');
  if(addressConnected){
    setModalStatus('inProcess')
  } else{ 
    console.log('addressConnected',addressConnected);
    setModalStatus('notConnected')
  } 

  await web3service.mint([Math.round(nft.tokenId)]);
  setModalStatus('done')
  dispatch(loadNfts())  
};

  return (
    <div>
      <Button onClick={handleOpen}>MINT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           {(modalStatus === 'start')&&
           <div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You About To Mint {nft.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For {contractData.cost / 1e18} ETH
           <button onClick={()=>mint()}  className="mint-btn">START</button>
          </Typography>
          </div>
          }
          {(modalStatus === 'inProcess')&&
            <Typography id="modal-modal-title" variant="h6" component="h2">
            LOADING
          </Typography>
          }
          {(modalStatus === 'notConnected')&&
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Please CONNECT YOURE WALLET!
          </Typography>
          }{(modalStatus === 'done')&&
            <Typography id="modal-modal-title" variant="h6" component="h2">
            greenv
          </Typography>
          }
        </Box>
      </Modal>
    </div>
  );
}