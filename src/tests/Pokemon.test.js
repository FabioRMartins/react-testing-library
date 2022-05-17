import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('test page Pokemon.js', () => {
  it('testando  se o nome do pokémon na tela está correto', () => {
    renderWithRouter(<App />);
    const name = screen.getByTestId('pokemon-name');
    expect(name.textContent).toBe('Pikachu');
    const type = screen.getByTestId('pokemon-type');
    expect(type).toBeInTheDocument();
    expect(type.textContent).toBe('Electric');
    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toBeInTheDocument();
    expect(weight.textContent).toBe('Average weight: 6.0 kg');
    const src = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imagem = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', src);
  });

  it('testando se o card do pokémon indicado na Pokédex contém um link de navegação',
    () => {
      renderWithRouter(<App />);
      const linkDetails = screen.getByRole('link', { name: /More details/i });
      expect(linkDetails).toBeInTheDocument();
      expect(linkDetails).toHaveAttribute('href', '/pokemons/25');
    });

  it('testando se ao clicar no link de navegação do pokémon é feito o redirecionamento',
    () => {
      renderWithRouter(<App />);
      const redirecionamento = screen.getByRole('link', { name: /More details/i });
      expect(redirecionamento).toBeInTheDocument();
      userEvent.click(redirecionamento);
      const redirecionando = screen.getByRole('heading', { name: 'Summary', level: 2 });
      expect(redirecionando).toBeInTheDocument();
    });

  it('testando se a URL exibida no navegador muda para "/pokemon/<id>"',
    () => {
      const { history } = renderWithRouter(<App />);
      const url = screen.getByRole('link', { name: 'More details' });
      userEvent.click(url);
      const { pathname } = history.location;
      expect(pathname).toBe('/pokemons/25');
    });

  it('testando se existe um ícone de estrela nos pokémons favoritados',
    () => {
      renderWithRouter(<App />);
      const redirecionamento = screen.getByRole('link', { name: /More details/i });
      userEvent.click(redirecionamento);
      const checked = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
      userEvent.click(checked);
      const src = '/star-icon.svg';
      const favoritePokemon = screen.getByRole('img',
        { name: /is marked as favorite/i });
      expect(favoritePokemon).toBeInTheDocument();
      expect(favoritePokemon).toHaveAttribute('src', src);
    });
});
