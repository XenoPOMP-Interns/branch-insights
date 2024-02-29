'use client';

import type { AnimationProps } from './Animation.props';
import { ShipWheel } from 'lucide-react';
import { VariableFC } from '@xenopomp/advanced-types';
import { motion } from 'framer-motion';

const Animation: VariableFC<typeof ShipWheel, AnimationProps> = ({
  size = 150,
  ...props
}) => {
  return (
    <motion.div
      aria-hidden
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 2.5,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <ShipWheel size={size} {...props} />
    </motion.div>
  );
};

export default Animation;
