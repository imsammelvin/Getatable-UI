import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

export default function Comment() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          sx={{
            display: "flex"
          }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="like">
              <FavoriteIcon />
            </IconButton>
          }
          subheader="@sammelvin"
          title="Shrimp and Chorizo Paella Lorem ipsum dolor sit amet, consectetur"
        />
      </Card>
    </div>
  );
}
