import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 50rem;
  line-height: 6rem;
  margin-top: 8rem;
`;

export const Form = styled.form`
  margin-top: 4rem;
  max-width: 70rem;
  display: flex;

   input {
    flex: 1;
    height: 7rem;
    padding: 0 2.4rem;
    border: none;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
  }

  button {
    width: 21rem;
    height: 7rem;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: none;
    color: #fff;
    font-weight: bold;
    transition: 0.2s;
    &:hover {
      background: #04d130;
    }
  }
`;

export const Repositories = styled.div`
    background-color: #fff;
    border-radius: 5px;
    margin-top: 3rem;
    max-width: 70rem;
    display: flex;
    align-items: center;
    height: 10rem;
    text-decoration: none;

    img{
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      margin-left: 1rem;
    }

    div{
      width: 100%;
      padding: 2.5rem;
      display: flex;
      flex-direction: column;

      p{
        text-decoration: none;
      }

      strong{
        text-decoration: none;
      }

    }

    svg:hover {
      transform: translateX(0.2rem);
    }
`;

