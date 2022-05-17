import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('test component App.js', () => {
  it('deveria renderizar link Home', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();
  });

  it('deveria renderizar link About', () => {
    renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
  });

  test('deveria renderizar link Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavorite).toBeInTheDocument();
  });
});
