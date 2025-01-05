import { transition, parentVariants } from "@/animation/transition";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import TextMask from "../TextMask";

const fotoVariants = {
  hidden: {
    scale: 1.3,
  },
  show: {
    scale: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
    y: "80%",
    skewY: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Komponen profil mempelai
 *
 * @param {object} props
 * @returns React.ReactElement
 */
const ProfilMempelai = ({ mempelai, font, color }) => {
  const { namaDepan, namaBelakang, orangTua } = mempelai;

  const namaLengkap = `${namaDepan} ${namaBelakang}`;
  const namaOrangTua = `${orangTua.pria} & ${orangTua.wanita}`;

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: color.bg.dark }}
    >
      <Grid
        component={motion.div}
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: true }}
        item
        md={6}
        xs={12}
        order={{ md: 1, xs: 2 }}
        sx={{
          minHeight: { md: "100vh" },
          height: { xs: "50vh" },
          backgroundColor: color.bg.dark,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            color={color.text.light}
            variant="h3"
            component="h2"
            sx={{
              mb: { md: "10em", xs: "1em" },
              textAlign: "center",
              fontSize: { md: "40px", xs: "32px" },
            }}
          >
            {namaLengkap.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>

          <Typography
            color={color.text.light}
            variant="h6"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {orangTua.keterangan.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>

          <Typography
            color={color.text.light}
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {namaOrangTua.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>
        </Container>
      </Grid>

      <Grid
        item
        md={6}
        xs={12}
        order={{ md: 2, xs: 1 }}
        sx={{
          overflow: "hidden",
          height: {
            md: "100vh",
            xs: "50vh",
          },
        }}
      >
        <Box
          component={motion.img}
          alt={namaLengkap}
          variants={fotoVariants}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true }}
          src={mempelai.foto}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Grid>
    </Grid>
  );
};

ProfilMempelai.propTypes = {
  mempelai: PropTypes.object.isRequired,
};

export default React.memo(ProfilMempelai);
