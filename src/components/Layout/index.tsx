import { ReactNode } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const Container = styled.main``;

export const Layout = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
