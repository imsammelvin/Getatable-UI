import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Fab from "@mui/material/Fab";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PublishIcon from "@mui/icons-material/Publish";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "50%",
  bgcolor: "background.paper",
  borderRadius: "24px",
  boxShadow: 24,
  p: 4
};

export default function PostForm({ open, handleClose }) {
  const [text, setText] = useState("");
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
              marginBottom: 1,
              right: "8%",
              borderRadius: "50%",
              height: "24px",
              width: "24px"
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
          <Switch
            color="primary"
            size="medium"
            sx={{ marginBottom: 1, left: "60%" }}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={9}
            maxRows={9}
            value={text}
            style={{ width: "98%", marginBottom: 10 }}
          />
          <Typography>
            <Fab
              variant="extended"
              color="error"
              size="small"
              sx={{ textTransform: "lowercase" }}
            >
              #Hashtag
            </Fab>
          </Typography>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Write Something..."
            sx={{ width: "100%", marginTop: 2, marginBottom: 3 }}
            onChange={(e) => setText(e.target.value)}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="small"
              endIcon={<PublishIcon />}
              sx={{ borderRadius: "24px", left: "70%" }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
