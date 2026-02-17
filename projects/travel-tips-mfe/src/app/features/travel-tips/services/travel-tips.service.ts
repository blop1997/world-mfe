// travel-tips-mfe/src/app/services/travel-tips.service.ts
import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TravelTip } from '../models/travel-Tip';

@Injectable({
  providedIn: 'root'
})
export class TravelTipsService {
  // Signal para los tips
  private tipsSignal = signal<TravelTip[]>([
    {
      id: '1',
      countryCode: 'mx',
      countryName: 'México',
      countryFlag: '🇲🇽',
      title: 'Los mejores tacos al pastor',
      description: 'No te pierdas los tacos al pastor en la Ciudad de México. Busca las taquerías con cola de gente, ¡esa es la señal de calidad!',
      category: 'gastronomía',
      author: 'María González',
      date: '2024-01-15',
      likes: 42,
      image: 'https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2025/01/tacos-pastor-mexicanos-yezmin.webp'
    },
    {
      id: '2',
      countryCode: 'pe',
      countryName: 'Perú',
      countryFlag: '🇵🇪',
      title: 'Consejos para visitar Machu Picchu',
      description: 'Reserva con meses de anticipación, lleva ropa para lluvia y sol, y aclimátate en Cusco al menos 2 días antes.',
      category: 'cultura',
      author: 'Carlos Pérez',
      date: '2024-02-20',
      likes: 38,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg/500px-Machu_Picchu%2C_Peru_%282018%29.jpg'
    },
    {
      id: '3',
      countryCode: 'cr',
      countryName: 'Costa Rica',
      countryFlag: '🇨🇷',
      title: 'Guía para el avistamiento de tortugas',
      description: 'La mejor época para ver tortugas en Tortuguero es de julio a octubre. Contrata guías locales certificados.',
      category: 'cultura',
      author: 'Ana Rodríguez',
      date: '2024-03-10',
      likes: 27,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbQqFzvLNoEz_uIEOv6NdGF6GX-Y9gN_KSQ&s'
    },
    {
      id: '4',
      countryCode: 'ar',
      countryName: 'Argentina',
      countryFlag: '🇦🇷',
      title: 'Mejor época para visitar la Patagonia',
      description: 'De octubre a marzo para clima templado. No olvides ropa térmica incluso en verano, el viento es muy fuerte.',
      category: 'clima',
      author: 'Juan Martín',
      date: '2024-04-05',
      likes: 56,
      image: 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt62bc7a7c8a62316e/67e2b331faad4153298882ce/torres-del-paine-patagonia-chile-torres-12cd68d6f5579793b07c87dc03e3e5ef_-_Header_Mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart'
    },
    {
      id: '5',
      countryCode: 'co',
      countryName: 'Colombia',
      countryFlag: '🇨🇴',
      title: 'Transporte en el Eje Cafetero',
      description: 'Usa los "jeeps Willys" para moverte entre pueblos cafeteros. Son económicos y una experiencia auténtica.',
      category: 'transporte',
      author: 'Laura Sánchez',
      date: '2024-05-12',
      likes: 31,
      image: 'https://siemprecolombia.com/wp-content/uploads/2023/10/Collage-con-actividades-y-destinos-del-Eje-Cafetero-en-Colombia.webp'
    }
  ]);

  // Señal pública de solo lectura
  readonly tips = this.tipsSignal.asReadonly();

  constructor() {
    // Cargar tips del localStorage al iniciar
    this.loadFromStorage();
  }

  getTipsByCountry(countryCode: string): Observable<TravelTip[]> {
    const filteredTips = this.tipsSignal().filter(tip => tip.countryCode === countryCode);
    return of(filteredTips);
  }

  getTipsByCategory(category: string): Observable<TravelTip[]> {
    const filteredTips = this.tipsSignal().filter(tip => tip.category === category);
    return of(filteredTips);
  }

  getTipById(id: string): Observable<TravelTip | undefined> {
    const tip = this.tipsSignal().find(t => t.id === id);
    return of(tip);
  }

  likeTip(id: string): void {
    this.tipsSignal.update(tips =>
      tips.map(tip =>
        tip.id === id ? { ...tip, likes: tip.likes + 1 } : tip
      )
    );
    this.saveToStorage();
  }

  addTip(tip: TravelTip): void {
    this.tipsSignal.update(tips => [...tips, tip]);
    this.saveToStorage();
  }

  private saveToStorage(): void {
    localStorage.setItem('travel-tips', JSON.stringify(this.tipsSignal()));
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem('travel-tips');
    if (stored) {
      try {
        const tips = JSON.parse(stored);
        this.tipsSignal.set(tips);
      } catch (e) {
        console.error('Error loading travel tips from storage', e);
      }
    }
  }
}
