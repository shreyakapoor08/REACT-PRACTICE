/*
 * ReduxPokemonApp Messages
 *
 * This contains all the text for the ReduxPokemonApp container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ReduxPokemonApp';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ReduxPokemonApp container!',
  },
});
