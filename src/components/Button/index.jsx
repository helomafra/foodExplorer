import { Container } from './styles';

export function Button({ icon: Icon, title, type, variant, ...rest }) {
  return (
    <Container type={type} variant={variant} {...rest}>
      {Icon && <Icon size={21} />}
      {title}
    </Container>
  );
}
