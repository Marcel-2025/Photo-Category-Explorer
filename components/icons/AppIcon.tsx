
import React from 'react';
import { WhatsAppIcon, InstagramIcon, TelegramIcon, BankingIcon, MapsIcon, SystemIcon, OtherIcon, PhotoIcon } from './icons';

interface AppIconProps {
  appName: string | null;
  className?: string;
}

export const AppIcon: React.FC<AppIconProps> = ({ appName, className }) => {
  switch (appName) {
    case 'WhatsApp':
      return <WhatsAppIcon className={className} />;
    case 'Instagram':
      return <InstagramIcon className={className} />;
    case 'Telegram':
        return <TelegramIcon className={className} />;
    case 'Banking':
        return <BankingIcon className={className} />;
    case 'Maps':
        return <MapsIcon className={className} />;
    case 'System':
        return <SystemIcon className={className} />;
    case 'Other':
        return <OtherIcon className={className} />;
    default:
      return <PhotoIcon className={className} />;
  }
};
