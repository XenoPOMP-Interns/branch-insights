import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';
import cn from 'classnames';

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <UiContainer className={cn('flex justify-between')}>
        <section>
          <strong>Наумов Александр</strong>
        </section>

        <section>
          <strong className={cn('font-normal')}>ИС1-45</strong>
        </section>
      </UiContainer>
    </header>
  );
};

export default Header;
