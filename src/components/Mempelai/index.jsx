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
  const { wanita, pria } = useDB((db) => db.wedding.mempelai);
  const { font, color } = useDB((db) => db);
  return (
    <Box>
      <ProfilMempelai mempelai={pria, font, color} />
      <ProfilMempelai mempelai={wanita, font, color} />
    </Box>
  );
};

export default Mempelai;
