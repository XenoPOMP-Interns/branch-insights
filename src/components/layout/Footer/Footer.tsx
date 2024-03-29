import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={cn(styles.appFooter)}>
      <UiContainer>This is a footer</UiContainer>
    </footer>
  );
};

export default Footer;
