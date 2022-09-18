import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Comment from "../../components/common/Comment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 270,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "24px",
  p: 4
};

export default function CommentPage({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            sx={{
              marginBottom: 2,
              right: "8%",
              borderRadius: "50%",
              height: "24px",
              width: "24px"
            }}
            onClick={handleClose}
          >
            <ArrowBackIosIcon />
          </Button>
          <Comment />
          <Comment />
          <Comment />
        </Box>
      </Modal>
    </div>
  );
}
