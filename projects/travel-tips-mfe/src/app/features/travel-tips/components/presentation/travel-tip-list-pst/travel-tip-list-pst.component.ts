import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { TravelTipCardPstComponent } from '../travel-tip-card-pst/travel-tip-card-pst.component';
import { TravelTip } from '../../../models/travel-Tip';

@Component({
  selector: 'app-travel-tip-list-pst',
  imports: [CommonModule, TravelTipCardPstComponent],
  templateUrl: './travel-tip-list-pst.component.html',
  styleUrl: './travel-tip-list-pst.component.css',
})
export class TravelTipListPstComponent {
  tips = input<TravelTip[]>([]);
  activeFilter = 'all';

  filterChange = output<string>();
  like = output<TravelTip>();
  view = output<TravelTip>();
  save = output<TravelTip>();

  filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Cultura', value: 'cultura' },
    { label: 'Gastronomía', value: 'gastronomía' },
    { label: 'Seguridad', value: 'seguridad' },
    { label: 'Transporte', value: 'transporte' },
    { label: 'Clima', value: 'clima' }
  ];

  onFilterChange(filter: string) {
    this.activeFilter = filter;
    this.filterChange.emit(filter);
  }

  onLike(tip: TravelTip) {
    this.like.emit(tip);
  }

  onView(tip: TravelTip) {
    this.view.emit(tip);
  }

  onSave(tip: TravelTip) {
    this.save.emit(tip);
  }
}
