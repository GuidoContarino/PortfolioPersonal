import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" passHref
      style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}>
          <DiCssdeck size="3rem" color="white"/> <Span>Guido Contarino</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>Sobre Mi</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/GuidoContarino">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/guido-contarino-2aa011208/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/guidocontarino/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
