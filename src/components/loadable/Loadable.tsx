/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import { Suspense } from 'react';
import Loader from '../atoms/loader';

const Loadable =
  (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
