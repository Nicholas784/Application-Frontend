import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link> / {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #ffeebb;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-secondary-10);

  a {
    color: var(--clr-secondary-7);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-secondary-10);
  }
  h3 {
    margin-bottom: 0;
  }
`;

export default PageHero;
