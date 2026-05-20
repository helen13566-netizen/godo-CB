import { BRAND } from './tokens.css';

export const WIDGET_STYLES = `
:host { position: fixed; inset: auto 21px 72px auto; z-index: 90; }
.trigger { width: 64px; display: flex; flex-direction: column; align-items: stretch; gap: 0; padding: 0; border: 0; border-radius: 28px; background: #fff; box-shadow: 0 18px 40px -10px rgba(11,26,58,0.32), 0 4px 12px -4px rgba(91,200,229,0.18); overflow: hidden; }
.trigger-item { position: relative; width: 64px; height: 64px; border: 0; border-radius: 0; background: transparent; color: ${BRAND.ink}; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; padding: 6px 0 7px; transition: background 160ms ease, transform 120ms ease; }
.trigger-item + .trigger-item::before { content: ''; position: absolute; left: 12px; right: 12px; top: 0; height: 1px; background: rgba(15,23,42,0.1); pointer-events: none; }
.trigger-item:hover { background: ${BRAND.primarySoft}; }
.trigger-item:active { transform: scale(0.96); }
.trigger-item:focus-visible { outline: 3px solid ${BRAND.primarySoft}; outline-offset: 2px; }
.trigger-item.chat::before { content: ''; position: absolute; top: 6px; left: calc(50% - 18px); width: 36px; height: 36px; border-radius: 50%; background: rgba(255,214,94,0.34); box-shadow: 0 0 0 2px rgba(255,214,94,0.72), 0 0 16px 5px rgba(245,158,11,0.72), 0 0 30px 9px rgba(255,229,128,0.5); opacity: 0.98; pointer-events: none; animation: avatarGlowPulse 0.95s ease-in-out infinite alternate; }
.trigger-item.chat:hover { background: transparent; }
.trigger-icon { height: 36px; display: flex; align-items: center; justify-content: center; }
.trigger-item.chat .trigger-icon { width: 36px; height: 36px; border-radius: 50%; overflow: hidden; }
.trigger-icon .chatbot-avatar-img { position: relative; z-index: 1; width: 36px; height: 36px; border: 0; border-radius: 50%; box-shadow: none; display: block; filter: none; object-fit: cover; transform: scale(0.92); transform-origin: center; }
.trigger-item.consult .trigger-icon,
.trigger-item.phone .trigger-icon { height: 28px; }
.trigger-item.consult .trigger-icon svg,
.trigger-item.phone .trigger-icon svg { width: 28px; height: 28px; }
.trigger-label { display: block; font-size: 10.5px; font-weight: 700; color: ${BRAND.ink}; letter-spacing: -0.04em; line-height: 1; white-space: nowrap; }
.panel-wrap { position: fixed; right: 97px; bottom: 10px; width: 430px; height: min(820px, calc(100vh - 20px)); border: 1px solid rgba(17,24,39,0.06); border-radius: 24px; box-shadow: ${BRAND.panelShadow}; overflow: hidden; animation: panelIn 240ms ease-out; }
@keyframes panelIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes avatarGlowPulse { from { opacity: 0.72; transform: scale(0.9); } to { opacity: 1; transform: scale(1.16); } }
@media (prefers-reduced-motion: reduce) {
  .trigger-item.chat::before { animation: none; }
}
@media (max-width: 767px) {
  :host { right: 21px; bottom: 72px; }
  :host([data-open]) { inset: 0 auto auto 0; width: 100vw; height: 100vh; }
  .trigger { width: 60px; gap: 0; padding: 0; transform: none; transform-origin: bottom right; border-radius: 26px; }
  .trigger-item { width: 60px; height: 60px; padding: 5px 0 6px; gap: 2px; }
  .trigger-item.chat::before { top: 5px; left: calc(50% - 17px); width: 34px; height: 34px; }
  .trigger-icon { height: 32px; }
  .trigger-item.chat .trigger-icon { width: 34px; height: 34px; }
  .trigger-icon svg { width: 24px; height: 24px; }
  .trigger-icon .chatbot-avatar-img { width: 34px; height: 34px; transform: scale(0.92); }
  .trigger-item.consult .trigger-icon,
  .trigger-item.phone .trigger-icon { height: 26px; }
  .trigger-item.consult .trigger-icon svg,
  .trigger-item.phone .trigger-icon svg { width: 26px; height: 26px; }
  .trigger-label { font-size: 9.5px; letter-spacing: -0.05em; }
  .panel-wrap { position: absolute; inset: 0; width: 100vw; height: 100vh; border: 0; border-radius: 0; box-shadow: none; transform: none; }
}
`;
