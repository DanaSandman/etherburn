import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Service
import { web3service } from "../../services/web3.service.js";
//Redux
import { loadNfts } from "../../store/nft/nft.action.js";
//MeterialUi
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
//Cmps
import UserWallet from "./UserWallet.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 325,
  bgcolor: "#1c1c1d",
  border: "1px solid rgba(255, 255, 255, 0.19)",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export function MintModal({ nft }) {
  const dispatch = useDispatch();
  const contractData = useSelector(
    (state) => state.contractModule.contractData
  );
  const account = useSelector((state) => state.userModule.account);
  const [modalStatus, setModalStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const isConnected = localStorage.getItem("isConnected");

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    checkIfConnect();
    setOpen(true);
  };
  const checkIfConnect = () => {
    const isConnected = localStorage.getItem("isConnected");
    if (
      !isConnected ||
      isConnected === "false" ||
      isConnected === false ||
      isConnected === undefined ||
      isConnected === "undefined"
    ) {
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
      await web3service.mint([Math.round(nft.tokenId)]);
      setModalStatus("done");
      dispatch(loadNfts());
    } catch (error) {
      console.error("rejectedd", error);
      setModalStatus("rejected");
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };
  useEffect(() => {
    if (account) {
      setModalStatus("start");
    }
  }, [account]);

  return (
    <div>
      <Button className="mint-main-btn" onClick={handleOpen}>
        MINT
      </Button>
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
                <button
                  className="close-modal-btn flex column"
                  onClick={() => handleClose()}
                >
                  <div class="wrapper">
                    <a href="#" class="close-button">
                      <div class="in">
                        <div class="close-button-block"></div>
                        <div class="close-button-block"></div>
                      </div>
                      <div class="out">
                        <div class="close-button-block"></div>
                        <div class="close-button-block"></div>
                      </div>
                    </a>
                  </div>
                </button>
                You About To Mint {nft.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                For {contractData.cost / 1e18} ETH
                <br></br>
                <button
                  onClick={() => mint()}
                  className="start-btn primery-btn"
                >
                  START
                </button>
              </Typography>
            </div>
          )}
          {modalStatus === "inProcess" && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              LOADING...
            </Typography>
          )}
          {modalStatus === "rejected" && (
            <Typography
              className="flex column"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <button
                className="close-modal-btn flex column"
                onClick={() => handleClose()}
              >
                <div class="wrapper">
                  <a href="#" class="close-button">
                    <div class="in">
                      <div class="close-button-block"></div>
                      <div class="close-button-block"></div>
                    </div>
                    <div class="out">
                      <div class="close-button-block"></div>
                      <div class="close-button-block"></div>
                    </div>
                  </a>
                </div>
              </button>
              rejected<br></br> try again
            </Typography>
          )}
          {modalStatus === "notConnect" && (
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              <button
                className="close-modal-btn flex column"
                onClick={() => handleClose()}
              >
                <div class="wrapper">
                  <a href="#" class="close-button">
                    <div class="in">
                      <div class="close-button-block"></div>
                      <div class="close-button-block"></div>
                    </div>
                    <div class="out">
                      <div class="close-button-block"></div>
                      <div class="close-button-block"></div>
                    </div>
                  </a>
                </div>
              </button>
                Connect youre wallet please
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <UserWallet />
              </Typography>
            </div>
          )}
          {modalStatus === "done" && (
            <Typography
              className="flex column"
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="flex column"
            >
              <button
                className="close-modal-btn flex column"
                onClick={() => handleClose()}
              >
                X
              </button>
              greenv
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
