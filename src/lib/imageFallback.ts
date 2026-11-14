import React from 'react';

export const FALLBACK_PRODUCT_IMAGE = '/assets/products/image-fallback_f05e1109.jpg';

export function resolveSafeAssetUrl(src?: string): string {
  if (!src || typeof src !== 'string') return FALLBACK_PRODUCT_IMAGE;
  let cleaned = src.trim();
  if (!cleaned) return FALLBACK_PRODUCT_IMAGE;
  if (cleaned.startsWith('blob:') || cleaned.startsWith('file:') || /^[a-zA-Z]:\\/.test(cleaned)) {
    return FALLBACK_PRODUCT_IMAGE;
  }
  if (cleaned.includes('/src/assets/images/')) {
    cleaned = cleaned.replace('/src/assets/images/', '/assets/');
  } else if (cleaned.includes('/public/assets/')) {
    cleaned = cleaned.replace('/public/assets/', '/assets/');
  } else if (cleaned.includes('/public/')) {
    cleaned = cleaned.replace('/public/', '/');
  } else if (cleaned.startsWith('/images/')) {
    cleaned = cleaned.replace('/images/', '/assets/');
  }
  return cleaned;
}

export function handleProductImageError(
  e: React.SyntheticEvent<HTMLImageElement>,
  alternateSources: string[] = [],
) {
  const img = e.currentTarget;
  const step = Number(img.dataset.fallbackStep || '0');
  const currentPath = img.getAttribute('src') || '';

  if (step === 0) {
    img.dataset.fallbackStep = '1';
    const normalized = resolveSafeAssetUrl(currentPath);
    if (normalized && normalized !== currentPath) {
      img.src = normalized;
      return;
    }
  }

  if (step <= 1) {
    img.dataset.fallbackStep = '2';
    const nextValid = alternateSources
      .map((s) => resolveSafeAssetUrl(s))
      .find((s) => s && s !== currentPath && s !== FALLBACK_PRODUCT_IMAGE);
    if (nextValid) {
      img.src = nextValid;
      return;
    }
  }

  if (step <= 2 && currentPath !== FALLBACK_PRODUCT_IMAGE) {
    img.dataset.fallbackStep = '3';
    img.src = FALLBACK_PRODUCT_IMAGE;
  }
}
