import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('test page Pokedex.js', () => {
  it('testando o subtítulo da página "Encountered pokémons', () => {
    renderWithRouter(<App />);
    const subTitulo = screen.getByRole('heading',
      { name: 'Encountered pokémons', level: 2 });
    expect(subTitulo).toBeInTheDocument();
  });

  it('testando próximo pokemon quando clica no botão "Próximo pokémon"', () => {
    renderWithRouter(<App />);
    const btnProximoPokemon = screen.getByRole('button', { name: 'Próximo pokémon' });
    let pokemon = screen.getByText('Pikachu');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnProximoPokemon);
    pokemon = screen.getByText('Charmander');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnProximoPokemon);
    pokemon = screen.getByText('Caterpie');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnProximoPokemon);
    pokemon = screen.getByText('Ekans');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnProximoPokemon);
    pokemon = screen.getByText('Alakazam');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnProximoPokemon);
    pokemon = screen.getByText('Mew');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnProximoPokemon);
    pokemon = screen.getByText('Rapidash');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnProximoPokemon);
    pokemon = screen.getByText('Snorlax');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnProximoPokemon);
    pokemon = screen.getByText('Dragonair');
    expect(pokemon).toBeInTheDocument();
    userEvent.click(btnProximoPokemon);

    pokemon = screen.getByText('Pikachu');
    expect(pokemon).toBeInTheDocument();
  });

  it('testando se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const pikachu = screen.getByText('Pikachu');
    const snorlax = screen.queryByText('Snorlax');

    expect(pikachu).toBeInTheDocument();
    expect(snorlax).not.toBeInTheDocument();
  });

  it('testando se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const quantidadeFiltros = 7;
    const filterName = screen.getAllByTestId('pokemon-type-button');
    expect(filterName.length).toBe(quantidadeFiltros);
    expect(filterName[0].innerHTML).toBe('Electric');
    expect(filterName[1].innerHTML).toBe('Fire');
    expect(filterName[2].innerHTML).toBe('Bug');
    expect(filterName[3].innerHTML).toBe('Poison');
    expect(filterName[4].innerHTML).toBe('Psychic');
    expect(filterName[5].innerHTML).toBe('Normal');
    expect(filterName[6].innerHTML).toBe('Dragon');
  });

  it('testando se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: 'All' });
    expect(btnAll).toBeInTheDocument();

    let pokemon = screen.getByText('Pikachu');
    expect(pokemon).toBeInTheDocument();

    const btnNormal = screen.getByRole('button', { name: 'Normal' });
    userEvent.click(btnNormal);
    pokemon = screen.getByText('Snorlax');
    expect(pokemon).toBeInTheDocument();

    userEvent.click(btnAll);
    pokemon = screen.getByText('Pikachu');
    expect(pokemon).toBeInTheDocument();
  });
});
