import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <h3>Join our newsletter to benefit from our online deals</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero odio
            aut impedit quidem illum minima voluptate unde aspernatur nisi
            vitae!
          </p>
          <form className="newsletter-form">
            <input type="email" className="form-input" placeholder="email" />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .newsletter-form {
    width: 90vw;
    max-width: 300px;
    display: grid;
    grid-template-columns: auto auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    border: 2px solid var(--clr-grey-1);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-5);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-grey-1);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
    .newsletter-form {
      max-width: 500px;
    }
  }

  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default NewsLetter;
