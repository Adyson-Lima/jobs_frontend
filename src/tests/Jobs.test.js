import {render, screen} from '@testing-library/react';
import Jobs from '../pages/Jobs';
import { BrowserRouter } from 'react-router-dom';

describe('Testes da tela Jobs', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Jobs/>
      </BrowserRouter>
    );
  });

  it('Existe card em Jobs?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe o link Novo em Jobs?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Jobs?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe o botão editar em Jobs?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Jobs?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

}); 