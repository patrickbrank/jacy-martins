import { useEffect } from 'react';
import { BASE_SITE_URL } from '@/data/content';

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  image?: string;
}

function updateMeta(selector: string, content: string, attr: 'content' | 'href' = 'content') {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!element) {
    if (selector.startsWith('link[')) {
      element = document.createElement('link');
      const relMatch = selector.match(/rel="([^"]+)"/);
      if (relMatch) element.setAttribute('rel', relMatch[1]);
      document.head.appendChild(element);
    } else if (selector.startsWith('meta[')) {
      element = document.createElement('meta');
      const nameMatch = selector.match(/name="([^"]+)"/);
      const propMatch = selector.match(/property="([^"]+)"/);
      if (nameMatch) element.setAttribute('name', nameMatch[1]);
      if (propMatch) element.setAttribute('property', propMatch[1]);
      document.head.appendChild(element);
    }
  }
  element?.setAttribute(attr, content);
}

export function PageMeta({
  title,
  description,
  path = '',
  type = 'website',
  image = `${BASE_SITE_URL}/imagens/jacy logo 2.png`,
}: PageMetaProps) {
  useEffect(() => {
    const currentUrl = `${BASE_SITE_URL}${path.startsWith('/') ? path : path ? `/${path}` : ''}`;

    document.title = title;
    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:type"]', type);
    updateMeta('meta[property="og:url"]', currentUrl);
    updateMeta('meta[property="og:image"]', image);
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
    updateMeta('meta[name="twitter:image"]', image);
    updateMeta('link[rel="canonical"]', currentUrl, 'href');
  }, [title, description, path, type, image]);

  return null;
}
