import { Metadata } from 'next';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateStaticMetadata } from '@/src/utils/seo';
import cn from 'classnames';
import Animation from '@/src/components/ui/Animation/Animation';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <UiContainer as={'main'} className={cn('flex-center')}>
      <Animation />
    </UiContainer>
  );
}
