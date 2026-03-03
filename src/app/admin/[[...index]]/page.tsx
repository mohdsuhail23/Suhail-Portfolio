'use client';

/**
 * This route is responsible for the built-in Sanity Studio.
 * Visit /admin to manage your content.
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
