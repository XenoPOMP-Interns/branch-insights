import { Metadata } from 'next';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateStaticMetadata } from '@/src/utils/seo';
import cn from 'classnames';
import { ShipWheel } from 'lucide-react';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <UiContainer as={'main'} className={cn('flex-center')}>
      <ShipWheel size={150} />
    </UiContainer>
  );
}
