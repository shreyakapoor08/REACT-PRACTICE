/**
 *
 * Asynchronously loads the component for PokemonApp
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
