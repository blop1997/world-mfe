import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { TravelTip } from '../../../models/travel-Tip';

@Component({
  selector: 'app-travel-tip-card-pst',
  imports: [CommonModule],
  templateUrl: './travel-tip-card-pst.component.html',
  styleUrl: './travel-tip-card-pst.component.css',
})
export class TravelTipCardPstComponent {
  tip = input.required<TravelTip>();

  like = output<TravelTip>();
  view = output<TravelTip>();
  save = output<TravelTip>();

  onLike() {
    this.like.emit(this.tip());
  }

  onView() {
    this.view.emit(this.tip());
  }

  onSave() {
    this.save.emit(this.tip());
  }
}
