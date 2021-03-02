/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Video = ({ videoSrcURL, ...props }) => (
  <video
      sx={{ width: `100% !important`, height: `auto !important` }}
      loop
      autoPlay
      muted
      preload="auto"
    >
    <source src={videoSrcURL} type="video/mp4"></source>
  </video>
)

export default Video;