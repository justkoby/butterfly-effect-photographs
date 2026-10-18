import { useEffect, useRef, useState } from 'react';
import './PhotoLightbox.css';

function LightboxImage({ image }) {
  const [failed, setFailed] = useState(false);
  return failed
    ? <p className="photo-viewer-error" role="status">This photograph couldn’t load. Try another image or close and reopen the viewer.</p>
    : <img src={image.src} alt={image.alt} draggable="false" onError={() => setFailed(true)} />;
}

export default function PhotoLightbox({ images, title, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef(null);
  const touchRef = useRef(null);
  const image = images[index];
  const hasMultiple = images.length > 1;
  const move = step => setIndex(current => (current + step + images.length) % images.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    if (!hasMultiple) return;
    // Warm only the adjacent photographs, rather than downloading the full collection.
    const adjacent = [images[(index + 1) % images.length], images[(index - 1 + images.length) % images.length]];
    adjacent.forEach(img => { const preload = new Image(); preload.src = img.src; });
  }, [index, images, hasMultiple]);

  function keyDown(event) {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      if (event.key === 'ArrowLeft') move(-1);
      else if (event.key === 'ArrowRight') move(1);
      else setIndex(event.key === 'Home' ? 0 : images.length - 1);
    }
    if (event.key === 'Tab') {
      const buttons = [...dialogRef.current.querySelectorAll('button:not(:disabled)')];
      const first = buttons[0]; const last = buttons.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  }
  function touchEnd(event) {
    if (!touchRef.current || !hasMultiple) return;
    const end = event.changedTouches[0];
    const dx = end.clientX - touchRef.current.x;
    const dy = end.clientY - touchRef.current.y;
    touchRef.current = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1);
  }
  return <dialog ref={dialogRef} className="photo-viewer" aria-labelledby="photo-viewer-title" aria-describedby="photo-viewer-help" onKeyDown={keyDown} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <header className="photo-viewer-toolbar"><div><span>Butterfly Effect Photographs</span><h2 id="photo-viewer-title">{title}</h2></div><button type="button" autoFocus className="photo-viewer-close" onClick={onClose} aria-label="Close photo viewer"><span aria-hidden="true">×</span></button></header>
    <div className="photo-viewer-stage" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <figure className="photo-viewer-frame" onTouchStart={event => { touchRef.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; }} onTouchEnd={touchEnd} onTouchCancel={() => { touchRef.current = null; }}><LightboxImage key={image.src} image={image} /></figure>
      {hasMultiple && <><button type="button" className="photo-viewer-prev" onClick={() => move(-1)} aria-label="Previous photograph"><span aria-hidden="true">←</span></button><button type="button" className="photo-viewer-next" onClick={() => move(1)} aria-label="Next photograph"><span aria-hidden="true">→</span></button></>}
    </div>
    <footer className="photo-viewer-footer"><div aria-live="polite" aria-atomic="true"><p className="photo-viewer-count">{index + 1} / {images.length}</p><p className="photo-viewer-caption">{image.alt}</p></div><p id="photo-viewer-help">Swipe or use arrow keys to explore. Esc to close.</p></footer>
  </dialog>;
}
