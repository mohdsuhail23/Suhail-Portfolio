import createImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';

const builder = createImageUrlBuilder(client);

/**
 * Helper function to build Sanity image URLs
 * @param source The Sanity image source object
 * @returns A URL builder object
 */
export function urlFor(source: any) {
  return builder.image(source);
}
