import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { transition, parentVariants } from "@/animation/transition";
import { motion } from "framer-motion";
import useDB from "@/hooks/useDB";
import TextMask from "../TextMask";

/**
 * Animasi gambar
 */
const imageVariants = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
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
 * Text variant
 */
const dividerVariants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  show: {
    scaleX: 1,
    originX: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Hero element
 *
 * @returns React.ReactElement
 */
const Hero = () => {
  const { hero, wedding } = useDB((db) => db);

  const mempelaiPria = wedding.mempelai.pria.namaPanggilan;
  const mempelaiWanita = wedding.mempelai.wanita.namaPanggilan;
  const mempelai = `${mempelaiWanita} & ${mempelaiPria}`;
  const tanggal = wedding.akad.tanggal;
  const sapaan = "Kepada Yth. Bapak/Ibu/Saudara/i";
  const tamu = "Mas XXX"
  const { font } = useDB((db) => db);
  const { color } = useDB((db) => db);

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
    >
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component={motion.img}
          alt="Hero background"
          variants={imageVariants}
          src={hero.banner}
          sx={{
            objectFit: "cover",
            objectPosition: "bottom center",
            width: "100%",
            height: "100vh",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundImage: ({ palette }) => {
              return `linear-gradient(to bottom, transparent, ${palette.background.default})`;
            },
          }}
        >
          <Container>
            <Typography
              variant="h1"
              sx={{
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: "40vw",
                textShadow: "5px 5px rgba(60, 42, 33, 0.6)",
                fontFamily: "Arizonia",
                color: color.text.dark,
              }}
            >
              {mempelai.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>

            <Typography
              variant="h4"
              component="p"
              sx={{
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: "18vw",
                textShadow: "3px 3px rgba(60, 42, 33, 0.6)",
                fontFamily: font.box,
                color: color.text.dark,
              }}
            >
              {tanggal.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>

            <Box
              component={motion.div}
              variants={dividerVariants}
              sx={{ my: 4, borderBottom: 3, borderColor: "divider" }}
            />

            <Typography
              variant="h4"
              component="p"
              sx={{
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: "10vw",
                textShadow: "3px 3px rgba(60, 42, 33, 0.6)",
                fontFamily: font.normal,
                color: color.text.dark,
              }}
            >
              {sapaan.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>

            <Typography
              variant="h3"
              component="p"
              sx={{
                textAlign: {
                  md: "left",
                  xs: "center",
                },
                fontSize: "18vw",
                fontWeight: "bold",
                textShadow: "3px 3px rgba(60, 42, 33, 0.6)",
                fontFamily: font.normal,
                color: color.text.dark,
              }}
            >
              {tamu.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
            
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Hero;
