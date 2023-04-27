import styled from "@emotion/styled";

export const Tablet = styled.div`
  @media (min-width: 768px) and (max-width: 991px) {
    display: block;
  }
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
