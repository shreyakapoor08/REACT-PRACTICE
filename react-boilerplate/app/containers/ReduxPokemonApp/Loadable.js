/**
 *
 * Asynchronously loads the component for ReduxPokemonApp
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
