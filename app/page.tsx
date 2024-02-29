import { Metadata } from 'next';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateStaticMetadata } from '@/src/utils/seo';
import cn from 'classnames';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <UiContainer as={'main'} className={cn('flex-center')}>
      index page
    </UiContainer>
  );
}
