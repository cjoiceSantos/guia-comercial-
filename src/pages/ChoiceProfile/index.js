
import React from 'react';
import { Container } from 'react-bootstrap';

import './choice-profile.css'
import { NavLink } from 'react-router-dom';

function ChoiceProfile() {
  return (
    <Container className="d-flex justify-content-md-center">
      <section className="choiceprofile__container">
        <h3 className="choiceprofile__title">
          Cadastre-se agora
        </h3>
        <div className="choiceprofile__body">
          <NavLink to="/register-user">
            <button>
              Para você que quer apenas fazer comentários, avaliações e estar por dentro de todas as promoções
              e novidades sobre as lojas e comércios em sua região.
            </button>
          </NavLink>
          <NavLink to="/plans">
            <button >
              Para você que quer aumentar a visibilidade de sua Empresa, ser achado facilmente pelos consumidores
              de sua região, poder vender online e muito mais!
            </button>
          </NavLink>
        </div>
        <div className="choiceprofile__footer">
          Você já é cadastrado? <NavLink to="/login"> <a href="#">Entrar</a ></NavLink>
        </div>
      </section>
    </Container>
  );
}

export default ChoiceProfile;
