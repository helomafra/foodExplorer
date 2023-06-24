import { Container, Logo } from './styles';

import GrayLogoType from '../../assets/gray_logotype.svg';

export function Footer() {
  return (
    <Container>
      <div className="content">
        <Logo>
          <img src={GrayLogoType} />
        </Logo>

        <p>© 2022 - Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}
