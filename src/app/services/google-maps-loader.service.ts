import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsLoaderService {
  private scriptLoaded = false

  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.scriptLoaded) {
        resolve()
        return
      }

      if (typeof document !== 'undefined') {
        if (document.querySelector('script[src*="maps.googleapis.com"]')) {
          this.scriptLoaded = true
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-Kg1YcGHYnJc3FUbx3YnW3XA3eYJgdLU'
        script.async = true
        script.defer = true

        script.onload = () => {
          this.scriptLoaded = true
          resolve()
        }

        script.onerror = () => reject('Erro ao carregar Google Maps API')
        document.head.appendChild(script)
      }
    })
  }
}
