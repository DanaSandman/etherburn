import * as React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import ETHlogo from "../../assets/img/ethLogo.svg";
import { MintModal } from "../util/MintModal.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(34, 34, 34, 0.966)",
  border: "1px solid rgb(229, 232, 235)",
  border: "1px solid rgb(23, 23, 24)",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export function PreviewModal({ nft }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contractData = useSelector(
    (state) => state.contractModule.contractData
  );
  const openSeaLink = `https://opensea.io/assets/${contractData.contractAddress}/${nft.tokenId}`;

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="content-img-card">
          {nft.image ? (
            <img className="nft-img" src={nft.image} alt={nft.name} />
          ) : (
            <div className="nft-video">
              <video loop autoPlay muted>
                <source src={nft.video} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="content-img-modal">
              <Button className="close-modal-box-btn" onClick={handleClose}>
                x
              </Button>
              {nft.image ? (
                <img className="nft-img-modal" src={nft.image} alt={nft.name} />
              ) : (
                <div className="nft-video-modal">
                  <video loop autoPlay muted>
                    <source src={nft.video} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="content-card flex column">
              <div className="flex space-between">
                <h4 className="nft-title">{nft.name}</h4>
                <span>1/1</span>
              </div>
              <h6>Price</h6>
              <h4>
                <img className="eth-logo" src={ETHlogo} alt="eth-logo" />
                {contractData.cost / 1e18}
              </h4>
              {nft.isMinted === "false" ? (
                <MintModal nft={nft} />
              ) : (
                <button
                  onClick={() => window.open(`${openSeaLink}`)}
                  className="mint-btn minted"
                >
                  OPENSEA{" "}
                </button>
              )}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
