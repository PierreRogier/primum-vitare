import React, { FC } from 'react';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
    return <footer className='mt-6 bg-green-500 py-6'><p className='text-center text-white'>© {new Date().getFullYear()} Primum vitare. Tous droits réservés.</p></footer>
};