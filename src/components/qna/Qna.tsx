import * as React from "react";

/*material ui*/
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";

import "./qna.css";

import QnaContent from "./QnaContent";
import Tags from "../common/Tags";
import CommentPage from "../../pages/feed/CommentPage";

export default function Post() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card
          sx={{
            borderRadius: "5%",
            border: 4,
            borderColor: red[500],
            marginTop: "60px"
          }}
          elevation={2}
        >
          <React.Fragment>
            <CardHeader
              className="card-header"
              component="div"
              sx={{
                display: "inline-block"
              }}
              avatar={
                <Avatar
                  sx={{
                    bgcolor: red["A200"],
                    width: 48,
                    height: 48,
                    fontSize: 24
                  }}
                  aria-label="post"
                  component="div"
                  className="name-avatar"
                >
                  C
                </Avatar>
              }
              title={
                <Typography sx={{ fontWeight: "bold" }} variant="h5">
                  {" "}
                  Cristiano Ronaldo
                </Typography>
              }
              subheader={
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                  {" "}
                  a few weeks ago
                </Typography>
              }
            />

            <CardContent>
              <Typography component="div">
                <QnaContent />
              </Typography>
              <Typography
                sx={{ fontSize: 12 }}
                component="div"
                className="post-tag"
              >
                <Tags />
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton aria-label="like">
                <UnarchiveIcon />
              </IconButton>
              <IconButton aria-label="comment">
                <CommentIcon onClick={handleOpen} />
              </IconButton>
              <IconButton aria-label="send">
                <SendIcon />
              </IconButton>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
      <CommentPage open={open} handleClose={handleClose} />
    </div>
  );
}
