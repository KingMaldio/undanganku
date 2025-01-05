import { parentVariants, transition } from "@/animation/transition";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";
import useDB from "@/hooks/useDB";

/**
 * Text variant
 */
const textVariants = {
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
 * Komponent kata-kata pembuka
 *
 * @returns React.ReactElement
 */
const Words = () => {
  const { font, color } = useDB((db) => db);
  const isi =
    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.";
  const ayat = "(Qs. Ar-Rum: 21)";

  return (
    <Container
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my: 10,
        fontFamily: font.script,
        color: color.text.dark,
        fontStyle: "italic",
        fontSize: {
          md: "20px",
          xs: "6px",
        },
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", mt: 5 }}
      >
        {isi.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
      
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", mt: 5 }}
      >
        {ayat.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
    </Container>
  );
};

export default Words;
