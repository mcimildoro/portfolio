import React from "react";
import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

// Component to test
import Navbar from './navbar';
import { itemsNavbar } from "@/data";

describe('Navbar', () => {
    it('should render the navbar', () => {
        render(<Navbar />);
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });

    it('should render all navigation links', () => {
        render(<Navbar />);

        itemsNavbar.forEach(item => {
            // Obtiene todos los elementos con el aria-label correcto
            const links = screen.getAllByLabelText(item.title);
    
            // Filtra el <a> correcto (descarta <svg> u otros elementos)
            const link = links.find(el => el.tagName.toLowerCase() === 'a');
    
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', item.link);
        }); // ✅ CIERRE CORRECTO DEL TEST
    });

    it('should toggle theme on button click', async () => {
        render(<Navbar />);
        
        // Obtener todos los botones y filtrar el correcto por clase o ID si lo tiene
        const buttons = screen.getAllByRole('button');
        const toggleButton = buttons.find(btn => btn.textContent?.includes('Toggle theme'));
    
        expect(toggleButton).toBeInTheDocument();
        
        await userEvent.click(toggleButton!); // El "!" asegura que no es undefined antes de hacer click
        
        // Aquí podrías comprobar si el tema cambia en tu estado global
    });
    
});
