/*
 * MyPokemonApp Messages
 *
 * This contains all the text for the MyPokemonApp container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MyPokemonApp';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MyPokemonApp container!',
  },
});
