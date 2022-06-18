import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavContext } from "../context/nav-context";

const ErrorPage = () => {
  const { isPromobarOpen } = useNavContext();
  return (
    <Wrapper className={isPromobarOpen ? "page" : "page pg"}>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-grey-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
