import React, { lazy, useState, Suspense } from 'react';
import Loading from './Loading';

const Heavy = lazy(() => import('./Heavy'));

export default function LazyMode() {
    const [state, setState] = useState('Mount');
    const [isIt , setIsIt] = useState(true)
    const clickHandler = () => {
        setState(prev => (prev === 'Mount' ? 'On Mount' : 'Mount'));
        setIsIt(!isIt)
    };
    console.log(isIt)

    return (
        <div>
            <h2>LazyMode</h2>
            {/* <Suspense fallback={<p>Loading...</p>}>
        <Heavy />
      </Suspense> */}
            <button onClick={clickHandler}>{state}

            </button>
            {isIt && <Suspense fallback={<Loading />}>
                <Heavy />
            </Suspense>}

            <Suspense fallback={<Loading />}>
                <Heavy />
            </Suspense>
        </div>
    );
}
