import * as React from "react";
import { useSelector } from "react-redux";
//MeterialUi
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 378,
  height: 650,
  padding: 4,
  bgcolor: "#1c1c1d",
  border: "1px solid rgba(255, 255, 255, 0.19)",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export function PreviewModal({ nft, page }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="preview-modal">
      <Button onClick={handleOpen}>
        <div className="content-img-card">
          {nft.image ? (
            <img className="nft-img" src={nft.image} alt={nft.name} />
          ) : (
            <div className="nft-video">
              <video
                className={page === "collection" ? " card-width" : ""}
                loop
                autoPlay
                preload="auto"
                playsinline
                muted
              >
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
              <button className="close-modal-btn" onClick={handleClose}>
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
        </Box>
      </Modal>
    </div>
  );
}
