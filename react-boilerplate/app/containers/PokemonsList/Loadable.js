/**
 *
 * Asynchronously loads the component for PokemonsList
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
