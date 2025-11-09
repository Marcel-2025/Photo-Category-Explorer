import React from 'react';

type IconProps = { className?: string };

export const MenuIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.75 13.96c.25.41.41.86.41 1.36 0 1.25-1.02 2.27-2.27 2.27s-2.27-1.02-2.27-2.27c0-.5.16-1 .41-1.36-.61-.46-1.03-1.2-1.03-2.04 0-1.42 1.15-2.57 2.57-2.57s2.57 1.15 2.57 2.57c0 .84-.42 1.58-1.03 2.04zM21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 1.63.44 3.16 1.22 4.49l-1.22 3.51 3.59-1.25c1.3.77 2.8 1.25 4.41 1.25 4.97 0 9-4.03 9-9zM7.5 12c0-1.25 1.02-2.27 2.27-2.27s2.27 1.02 2.27 2.27c0 .5-.16 1-.41 1.36.61.46 1.03 1.2 1.03 2.04 0 1.42-1.15 2.57-2.57-2.57s-2.57-1.15-2.57-2.57c0-.84.42-1.58 1.03-2.04-.25-.41-.41-.86-.41-1.36z" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const TelegramIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.7,3.3 C21.4,3.1 21,3 20.6,3.1 L3,9.9 C2.3,10.1 2.1,10.9 2.6,11.4 L6.5,14.6 L6.5,14.6 L8,21.5 C8.2,22.1 8.9,22.3 9.4,22 L11.9,20.1 L15.5,23.1 C16,23.5 16.7,23.4 17.1,22.9 L22.4,4.4 C22.6,3.9 22.1,3.4 21.7,3.3 L21.7,3.3 Z M8.1,15.1 L8.1,15.1 L5.3,12.6 L18.4,6 L10.1,16.5 L15,20 L8.1,15.1 L8.1,15.1 Z"></path>
    </svg>
);

export const BankingIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
    </svg>
);

export const MapsIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
    </svg>
);

export const SystemIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);

export const OtherIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
    </svg>
);

export const PhotoIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>
);