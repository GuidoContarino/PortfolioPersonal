import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenidos a<br />
          Mi Portfolio Personal
        </SectionTitle>
        <SectionText>
          Hola a todos soy Guido Contarino, Front-End Dev. Un programador
          impulsado por la curiosidad y apasionado por diseñar y crear
          experiencias inclusivas y centradas en el usuario.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/1NhnYGzMR3rRH-042gE3ds4eMCI5YZEYo/view")
          }
        >
          Ver Cv
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
