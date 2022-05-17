import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('test page About.js', () => {
  it('testando o subtítulo da página "About Pokédex"', () => {
    render(<About />);
    const subTitulo = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(subTitulo).toBeInTheDocument();
  });

  it('testando primeiro parágrafo de informação', () => {
    render(<About />);
    const primeiroParagrafo = screen.getByText(/simulates a Pokédex, a digital/i);
    expect(primeiroParagrafo).toBeInTheDocument();
  });

  it('testando segundo parágrafo de informação', () => {
    render(<About />);
    const segundoParagrafo = screen.getByText(/filter Pokémons by type, and see/i);
    expect(segundoParagrafo).toBeInTheDocument();
  });

  it('testando se a imagem do aparelho aparece na tela', () => {
    render(<About />);
    const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imagem = screen.getByRole('img');
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', src);
  });
});
