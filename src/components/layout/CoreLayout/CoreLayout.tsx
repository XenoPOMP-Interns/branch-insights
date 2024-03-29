import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';
import cn from 'classnames';

import Footer from '@/src/components/layout/Footer/Footer';
import Header from '@/src/components/layout/Header/Header';

import styles from './CoreLayout.module.scss';

import type { CoreLayoutProps } from './CoreLayout.props';

/**
 * Wrapper for core layout. Provides access to fully manageable
 * page layout.
 *
 * @param children
 * @constructor
 *
 * @example
 * // Header and footer will be added
 * // automatically
 * <CoreLayout>
 *   <main>
 *     Index page
 *   </main>
 * </CoreLayout>
 */
const CoreLayout: FC<PropsWith<'children', CoreLayoutProps>> = ({
  children,
}) => {
  return (
    <div aria-hidden className={cn(styles.layoutWrapper)}>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default CoreLayout;
