import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) document.title = title + ' · Semestre 1';
    else document.title = 'Semestre 1';
  }, [title]);
}
