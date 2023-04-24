import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Esto creará tres columnas iguales */
  grid-gap: 30px;
  margin-left: 5px; /* Agrega un espacio de 10px entre cada imagen */

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
