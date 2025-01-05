import useDB from "@/hooks/useDB";
import { Box, Stack } from "@mui/material";
import React from "react";
import ProfilMempelai from "./ProfilMempelai";

/**
 * Komponent mempelai
 *
 * @returns React.ReactElement
 */
const Mempelai = () => {
  const { wedding, font, color } = useDB((db) => db);
  return (
    <Box>
      <ProfilMempelai mempelai={wedding.mempelai.pria, font, color} />
      <ProfilMempelai mempelai={wedding.mempelai.wanita, font, color} />
    </Box>
  );
};

export default Mempelai;
