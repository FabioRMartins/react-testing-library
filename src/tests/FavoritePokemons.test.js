import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';

describe('test page About.js', () => {
  it('testando mensagem inicial da página vazia "Not found"', () => {
    render(<FavoritePokemons />);
    const notFound = screen.getByText(/No favorite pokemon found/i);
    expect(notFound).toBeInTheDocument();
  });

  it('testando o subtítulo da página "Favorite pokémons"', () => {
    render(<FavoritePokemons />);
    const subTitulo = screen.getByRole('heading',
      { name: 'Favorite pokémons', level: 2 });
    expect(subTitulo).toBeInTheDocument();
  });
});
