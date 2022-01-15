import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

export const withSuspense = (Component) => {
    const SuspenseComponent = (props) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />
            </Suspense>
        );
    }
    return SuspenseComponent;
}