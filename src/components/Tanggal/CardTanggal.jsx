import { transition } from "@/animation/transition";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import TextMask from "../TextMask";

const parentVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    y: 1,
    opacity: 1,
    transition: {
      ...transition,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
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

// Icons variants
const iconVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Komponent tanggal
 *
 * @returns Reacr.ReactElement
 */
const CardTanggal = ({ title, tanggal, jam, lokasi, alamat, link }) => {
  const { color, font } = useDB((db) => db);
  return (
    <Card
      elevation={0}
      variant="outlined"
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      sx={{ borderRadius: 0 }}
    >
      <CardContent
        sx={{
          pt: 5,
          px: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: color.gradient.light
        }}
      >
        <Typography
          color={color.text.dark}
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          {title.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Box
          component={motion.div}
          variants={iconVariants}
          sx={{
            border: 2,
            borderColor: color.text.light,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
            md: { 
              width: 60,
              height: 60,
              mt: 8
            },
            xs: { 
              width: 30,
              height: 30,
              mt: 4
            }
          }}
        >
          <CalendarMonthTwoToneIcon
            sx={{ 
              md: { fontSize: 60, color: color.text.light },
              xs: { fontSize: 30, color: color.text.light }
            }}
          />
        </Box>

        <Typography
          color={color.text.dark}
          variant="h5"
          component="p"
          sx={{ 
            textAlign: "center", 
            fontWeight: 700,
            md: { mt: 4 },
            xs: { mt: 2 }
          }}
        >
          {tanggal.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Typography
          color={color.text.light}
          variant="body2"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          {jam.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Box
          component={motion.div}
          variants={iconVariants}
          sx={{
            border: 2,
            borderColor: color.text.light,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            md: { 
              width: 60,
              height: 60,
              mt: 8
            },
            xs: { 
              width: 30,
              height: 30,
              mt: 4
            }
          }}
        >
          <MapTwoToneIcon 
            sx={{ 
              md: { fontSize: 60, color: color.text.light },
              xs: { fontSize: 30, color: color.text.light }
            }} 
          />
        </Box>

        <Typography
          color={color.text.dark}
          variant="h5"
          component="p"
          sx={{ 
            textAlign: "center", 
            fontWeight: 700,
            md: { mt: 4 },
            xs: { mt: 2 }
          }}
        >
          {lokasi.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Typography
          color={color.text.light}
          variant="body2"
          sx={{ textAlign: "center", fontWeight: 700, mt: 1 }}
        >
          {alamat.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

/**
 * CardTanggal prop types
 */
CardTanggal.propTypes = {
  title: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  jam: PropTypes.string.isRequired,
  lokasi: PropTypes.string.isRequired,
  alamat: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default React.memo(CardTanggal);
