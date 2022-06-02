import styled from "styled-components";
import welcomeImg from "../images/welcome-img.jpg";

const Welcome = () => {
  return (
    <Wrapper className="section">
      <div className="section-center welcome-center">
        <article className="welcome-img">
          <img
            src={welcomeImg}
            alt="Country Manager"
            className="welcome-photo"
          />
        </article>
        <article className="welcome-msg">
          <div className="section-title welcome-title">
            <h2>welcome</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            nulla doloribus quia quae aliquam sapiente quo ea ad quidem neque
            ipsam dolore perferendis nam sunt illo odit omnis! Porro dolore iure
            assumenda cupiditate illo quibusdam aliquam dolor quasi voluptates
            labore delectus harum error magni, unde modi voluptas expedita ad.
            Sint necessitatibus voluptatibus ut excepturi quisquam recusandae
            earum, veritatis enim alias sit! Iusto ea beatae esse tenetur in
            autem sapiente amet voluptates possimus. Quos, optio inventore illo
            corporis, minus aut recusandae incidunt deserunt quaerat
            voluptatibus, iste magnam consequatur molestias sapiente in.
            Temporibus vero itaque repudiandae eligendi laboriosam iure quis
            necessitatibus provident.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .welcome-title {
    text-align: left;
    margin-bottom: 2rem;
    .underline {
      margin-left: 0;
    }
  }
  .welcome-center {
    display: grid;
    gap: 3rem 2rem;
  }
  .welcome-img {
    justify-self: center;
    img {
      border-radius: var(--radius);
    }
  }
  @media screen and (min-width: 992px) {
    .welcome-center {
      grid-template-columns: 1fr 1fr;
    }

    .welcome-img {
      position: relative;
    }

    .welcome-img::before {
      left: -2rem;
    }

    .welcome-msg {
      align-self: center;
    }

    .welcome-img::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--clr-primary);
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);
      z-index: -1;
    }
  }
`;

export default Welcome;
