import { Component, HostListener } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isOpen = false;

  constructor(private searchModalService: SearchService) {
    this.searchModalService.modalState$.subscribe(state => {
      this.isOpen = state;
    });
  }

  closeModal() {
    this.searchModalService.closeModal();
  }

  // Detectar clic fuera y cerrar modal
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const modalContent = document.getElementById('box_search');
    if (this.isOpen && modalContent && !modalContent.contains(event.target as Node)) {
      this.closeModal();
    }
  }
}
