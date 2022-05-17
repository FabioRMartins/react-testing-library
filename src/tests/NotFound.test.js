import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('test page NotFound.js', () => {
  it('testando o subtítulo da página "Page requested not found 😭"', () => {
    render(<NotFound />);
    const subTitulo = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji' });
    expect(subTitulo).toBeInTheDocument();

    const emoji = screen.getByText('😭');
    expect(emoji).toBeInTheDocument();
  });

  it('testando se a imagem aparece na tela', () => {
    render(<NotFound />);
    const src = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const imagem = screen.getAllByRole('img');
    expect(imagem[1]).toBeInTheDocument();
    expect(imagem[1]).toHaveAttribute('src', src);
  });
});
