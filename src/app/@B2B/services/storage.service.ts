import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class StorageService {

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  setSession(key: string, value: string) {
    sessionStorage.setItem(key, value);
}

  getSession(key: string) {
    return sessionStorage.getItem(key);
  }

  removeSession(key: string) {
    sessionStorage.removeItem(key);
  }

  clearSession() {
    sessionStorage.clear();
  }
}
