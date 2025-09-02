import React from "react";
import { SETTINGS } from "../settings";

export function PixModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h4 className="font-bold text-lg">Pagamento via Pix</h4>
        <p className="mt-2 text-sm text-gray-700">Use a chave Pix abaixo ou escaneie o QR Code:</p>

        <div className="mt-4 flex flex-col items-center gap-3">
          <img src={SETTINGS.pixQrCode} alt="QR Code Pix" className="w-40 h-40" />
          <p className="text-xs break-all text-gray-600">{SETTINGS.pixKey}</p>
          <button
            onClick={() => navigator.clipboard.writeText(SETTINGS.pixKey)}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Copiar chave Pix
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
        >
          Já paguei
        </button>
      </div>
    </div>
  );
}