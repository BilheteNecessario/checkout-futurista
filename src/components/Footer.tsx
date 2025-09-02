import React from "react";
import { SETTINGS } from "../settings";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-sm text-gray-600 py-6 text-center">
      <p>© {new Date().getFullYear()} {SETTINGS.brand}. Todos os direitos reservados.</p>
      <p>
        Suporte: <a href={`mailto:${SETTINGS.supportEmail}`} className="underline">{SETTINGS.supportEmail}</a>
      </p>
    </footer>
  );
}