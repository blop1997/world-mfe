import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { TravelTipListPstComponent } from '../../presentation/travel-tip-list-pst/travel-tip-list-pst.component';
import { TravelTipsService } from '../../../services/travel-tips.service';
import { TravelTip } from '../../../models/travel-Tip';
import { MFEvents } from '../../../../../../../../library-mfe/src/lib/events/events-enums';

@Component({
  selector: 'app-travel-tips-ctn',
  imports: [CommonModule, TravelTipListPstComponent],
  templateUrl: './travel-tips-ctn.component.html',
  styleUrl: './travel-tips-ctn.component.css',
})
export class TravelTipsCtnComponent {
  private travelTipsService = inject(TravelTipsService);

  // Señales
  allTips = this.travelTipsService.tips;
  filteredTips = signal<TravelTip[]>([]);
  currentFilter = signal<string>('all');

  ngOnInit() {
    this.filterTips('all');
  }

  filterTips(filter: string) {
    if (filter === 'all') {
      this.filteredTips.set(this.allTips());
    } else {
      const filtered = this.allTips().filter(tip => tip.category === filter);
      this.filteredTips.set(filtered);
    }
  }

  onFilterChange(filter: string) {
    this.currentFilter.set(filter);
    this.filterTips(filter);
  }

  onLike(tip: TravelTip) {
    console.log('Like:', tip.title);
    this.travelTipsService.likeTip(tip.id);

    window.dispatchEvent(
      new CustomEvent(MFEvents.TIP_LIKED, {
        detail: {
          tipId: tip.id,
          countryCode: tip.countryCode,
          likes: tip.likes + 1
        }
      })
    );
  }

  onView(tip: TravelTip) {
    console.log('View:', tip.title);

    window.dispatchEvent(
      new CustomEvent(MFEvents.TIP_VIEWED, {
        detail: {
          tipId: tip.id,
          countryCode: tip.countryCode,
          title: tip.title
        }
      })
    );
  }

  onSave(tip: TravelTip) {
    console.log('Save to favorites:', tip.title);

    window.dispatchEvent(
      new CustomEvent(MFEvents.TIP_SAVED, {
        detail: {
          tip,
          countryCode: tip.countryCode
        }
      })
    );
  }

  // Escuchar eventos externos
  @HostListener('window:' + MFEvents.ADD_TO_CART, ['$event'])
  onAddToFavorites(event: any) {
    console.log('País añadido a favoritos:', event.detail);
    // Aquí podrías filtrar tips del país favorito
    if (event.detail.country?.code) {
      // Lógica para destacar tips del país favorito
    }
  }
}
