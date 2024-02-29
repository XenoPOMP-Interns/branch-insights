import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';
import cn from 'classnames';

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <UiContainer className={cn('')}>Header</UiContainer>
    </header>
  );
};

export default Header;
