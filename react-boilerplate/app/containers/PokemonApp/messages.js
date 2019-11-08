/*
 * PokemonApp Messages
 *
 * This contains all the text for the PokemonApp container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.PokemonApp';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the PokemonApp container!',
  },
});
