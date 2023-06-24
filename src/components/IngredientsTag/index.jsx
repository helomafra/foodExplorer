import { Container } from './styles';

import { Plus, X } from '@phosphor-icons/react';

export function IngredientsTag({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        list="ingredientName"
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <Plus /> : <X />}
      </button>
    </Container>
  );
}
