import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';
import cn from 'classnames';

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <UiContainer className={cn('flex justify-between')}>
        <section>
          <b>Наумов Александр</b>
        </section>

        <section>
          <div>ИС1-45</div>
        </section>
      </UiContainer>
    </header>
  );
};

export default Header;
