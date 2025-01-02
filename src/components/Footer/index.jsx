import { parentVariants, transition } from "@/animation/transition";
import useDB from "@/hooks/useDB";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";
import KeluargaBesar from "./KeluargaBesar";

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
    originX: 0.5,
  },
  show: {
    scaleX: 1,
    originX: 0.5,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Footer komponen
 */
const Footer = () => {
  const { wedding, font, color } = useDB((db) => db);
  const pria = wedding.mempelai.pria;
  const wanita = wedding.mempelai.wanita;
  const doaRestu =
    "Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.";
  const berbahagia = "Kami Yang Berbahagia";

  return (
    <Box
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      py={18}
    >
      <Container>
        <Grid
          container
          spacing={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontFamily: font.script }}
            >
              {doaRestu.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </Grid>

          <Grid item xs={12} mb={5}>
            <Divider
              sx={{ my: 1 }}
              component={motion.div}
              variants={dividerVariants}
            >
              <FavoriteTwoToneIcon 
                sx={{ 
                  md: { fontSize: 50 },
                  xs: { fontSize: 10 }
                }} 
              />
            </Divider>

            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontFamily: font.script }}
            >
              {berbahagia.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </Grid>

          {/* Mempelai pria */}
          <Grid item md={6} xs={12}>
            <KeluargaBesar
              title="Mempelai Pria"
              orangTuaPria={pria.orangTua.pria}
              orangTuaWanita={pria.orangTua.wanita}
            />
          </Grid>

          {/* Mempelai wanita */}
          <Grid item md={6} xs={12} sx={{ mt: { md: 0, xs: 2 } }}>
            <KeluargaBesar
              title="Mempelai Wanita"
              orangTuaPria={wanita.orangTua.pria}
              orangTuaWanita={wanita.orangTua.wanita}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
