/**
 *
 * Asynchronously loads the component for TestContainer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
