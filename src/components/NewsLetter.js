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

const Wrapper = styled.section``;

export default NewsLetter;
