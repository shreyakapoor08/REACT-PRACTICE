/*
 * TestContainer Messages
 *
 * This contains all the text for the TestContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.TestContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TestContainer container!',
  },
});
