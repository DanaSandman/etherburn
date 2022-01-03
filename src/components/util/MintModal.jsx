import React, { useEffect, useState } from "react";
import { initNotify, initOnboard } from "../../services/blockNative.service.js";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { setUserAccount } from "../../store/user/user.action.js";

import { loadNfts } from "../../store/nft/nft.action.js";
import { web3service } from "../../services/web3.service.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function MintModal({ nft }) {
  const dispatch = useDispatch();
  const contractData = useSelector(
    (state) => state.contractModule.contractData
  );
  const [modalStatus, setModalStatus] = React.useState("");
  const onboard = useSelector((state) => state.walletModule.onboard);

  const [open, setOpen] = React.useState(false);
  const isConnected = localStorage.getItem("isConnected");

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    checkIfConnect();
    setOpen(true);
  };

  const checkIfConnect = () => {
    const isConnected = localStorage.getItem("isConnected");
    console.log("isConnected", isConnected);
    if (!isConnected) {
      setModalStatus("notConnect");
    } else if (isConnected) {
      setModalStatus("start");
    }
  };

  const mint = async () => {
    console.log("start minting");
    console.log("isConnected", isConnected);
    setModalStatus("inProcess");
    try {
      await web3service.mint([Math.round(nft.tokenId)])
      setModalStatus("done")
      dispatch(loadNfts());
    } catch (error) {
      console.error('rejectedd',error);
      setModalStatus("rejected");
      setTimeout(() =>{
        handleClose()
        }, 3000);
    };
  };

  const connectWallet = async () => {
    handleClose();
    const setAccount = (account) => {
      dispatch(setUserAccount(account));
    };
    const setWallet = (wallet) => {
      window.ethereum = wallet.provider;
      window.localStorage.setItem("selectedWallet", wallet.name);
    };
    const onboard = initOnboard({
      address: setAccount,
      // network: setChainId,
      // balance: setBalance,
      wallet: setWallet,
    });
    await onboard.walletSelect();
    window.localStorage.setItem("isConnected", true);
    setModalStatus("start");
    setOpen(true);
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
          {modalStatus === "start" && (
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              <button onClick={() => handleClose()} className="mint-btn">X</button>
                You About To Mint {nft.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                For {contractData.cost / 1e18} ETH
                <button onClick={() => mint()} className="mint-btn">
                  START
                </button>
              </Typography>
            </div>
          )}
          {modalStatus === "inProcess" && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              LOADING
            </Typography>
          )}
            {modalStatus === "rejected" && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
            <button onClick={() => handleClose()} className="mint-btn">X</button>
              rejected
            </Typography>
          )}
          {modalStatus === "notConnect" && (
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Connect youre wallet please
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <button onClick={() => connectWallet()} className="connect-btn">
                  connect
                </button>
              </Typography>
            </div>
          )}
          {modalStatus === "done" && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
          <button onClick={() => handleClose()} className="mint-btn">X</button>
              greenv
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}