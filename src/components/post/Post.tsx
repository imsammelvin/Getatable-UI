import * as React from "react";
import { useState } from "react";
import "../../styles.css";
/*material ui*/
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { deepPurple, lightBlue } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";

import PostContent from "./PostContent";
import Tags from "../common/Tags";
import CommentPage from "../../pages/feed/CommentPage";

import "./post.css";

export default function Post() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card
          sx={{
            borderRadius: "5%",
            border: 4,
            borderColor: lightBlue[500],
            marginTop: "60px",
            display: "inline-block"
          }}
          elevation={2}
        >
          <React.Fragment>
            <CardHeader
              alignItems="center"
              className="card-header"
              component="div"
              sx={{
                display: "inline-block"
              }}
              avatar={
                <Avatar
                  sx={{
                    bgcolor: deepPurple[500],
                    width: 48,
                    height: 48,
                    fontSize: 24
                  }}
                  aria-label="post"
                  component="div"
                  className="name-avatar-post"
                >
                  S
                </Avatar>
              }
              title={
                <Typography sx={{ fontWeight: "bold" }} variant="h5">
                  {" "}
                  Sam Melvin
                </Typography>
              }
              subheader={
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                  {" "}
                  a few months ago
                </Typography>
              }
            />
            <CardContent>
              <Typography component="div">
                <PostContent />
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
              <div className="bottom-icons">
                <div className="left-icon">
                  <IconButton aria-label="like">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon onClick={handleOpen} />
                  </IconButton>
                </div>
                <div className="right-icon">
                  <IconButton aria-label="send" className="right-icon">
                    <SendIcon />
                  </IconButton>
                </div>
              </div>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
      <CommentPage open={open} handleClose={handleClose} />
    </div>
  );
}
