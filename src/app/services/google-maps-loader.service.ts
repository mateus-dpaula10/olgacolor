import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsLoaderService {
  private scriptLoaded = false
  private loadPromise!: Promise<void>

  load(): Promise<void> {
    if (this.scriptLoaded) {
      return this.loadPromise
    }

    this.loadPromise = new Promise((resolve, reject) => {
      if (typeof document !== 'undefined') {
        if (document.querySelector('script[src*="maps.googleapis.com"]')) {
          this.scriptLoaded = true
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places`
        script.async = true
        script.defer = true

        script.onload = () => {
          this.scriptLoaded = true
          resolve()
        }

        script.onerror = (error) => {
          reject('Erro ao carregar Google Maps API')
        }

        document.head.appendChild(script)
      }
    })

    return this.loadPromise
  }
}
