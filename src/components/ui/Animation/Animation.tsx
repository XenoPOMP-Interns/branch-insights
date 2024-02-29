'use client';

import type { AnimationProps } from './Animation.props';
import { ShipWheel } from 'lucide-react';
import { VariableFC } from '@xenopomp/advanced-types';

const Animation: VariableFC<typeof ShipWheel, AnimationProps> = ({
  size = 150,
  ...props
}) => {
  return (
    <div aria-hidden>
      <ShipWheel size={size} {...props} />
    </div>
  );
};

export default Animation;
