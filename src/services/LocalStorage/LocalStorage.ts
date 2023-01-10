import { LocalStorageItem } from '.'

export class LocalStorageService {
  public static setItem(key: LocalStorageItem, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public static getItem<T>(key: LocalStorageItem): T | null {
    const stored = localStorage.getItem(key)
    if (stored === null) return stored

    return JSON.parse(stored)
  }

  public static removeItem(key: LocalStorageItem): void {
    localStorage.removeItem(key)
  }

  public static clear(): void {
    localStorage.clear()
  }
}
