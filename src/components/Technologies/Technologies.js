import React from "react";
import {
  DiBootstrap,
  DiCss3,
  DiFirebase,
  DiGithub,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiResponsive,
  DiSass,
  DiVisualstudio,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Container } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      Una de mis cosas favoritas desde que comencé a aprender a programar es
      descubrir todas las increíbles herramientas, que los desarrolladores han
      creado para facilitar su vida y la de otros desarrolladores. Estas son
      algunas de las herramientas que uso con más frecuencia.
    </SectionText>
    <Container>
      <DiHtml5 size="8rem" />
      <DiCss3 size="8rem" />
      <DiSass size="8rem" />
      <DiBootstrap size="8rem" />
      <DiJavascript1 size="8rem" />
      <DiReact size="8rem" />
      <DiFirebase size="8rem" />
      <DiGithub size="8rem" />
      <DiResponsive size="8rem" />
      <DiVisualstudio size="8rem" />
    </Container>
    <br />
    <SectionDivider />
  </Section>
);

export default Technologies;
