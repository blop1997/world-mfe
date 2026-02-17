import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CryptoService {

  private readonly secret = 'super-secret-key';
  private async getKey(): Promise<CryptoKey> {
    const enc = new TextEncoder().encode(this.secret);
    const hash = await crypto.subtle.digest('SHA-256', enc);

    return crypto.subtle.importKey(
      'raw',
      hash,
      { name: 'AES-GCM' },
      false,
      ['encrypt', 'decrypt']
    );
  }

  async encrypt(data: any): Promise<string> {
    const key = await this.getKey();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encoded = new TextEncoder().encode(JSON.stringify(data));

    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encoded
    );

    const result = new Uint8Array([...iv, ...new Uint8Array(encrypted)]);
    return btoa(String.fromCharCode(...result));
  }

  async decrypt(cipherText: string): Promise<any> {
    const key = await this.getKey();

    const data = Uint8Array.from(atob(cipherText), c => c.charCodeAt(0));
    const iv = data.slice(0, 12);
    const encrypted = data.slice(12);

    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      encrypted
    );

    const decoded = new TextDecoder().decode(decrypted);
    return JSON.parse(decoded);
  }
}
