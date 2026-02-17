import { CommonModule } from '@angular/common';
import { Component,  inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { MFEvents } from 'library-mfe';
import { CartStoreSharedService } from 'library-mfe';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent /* implements OnInit*/{
  activeMenu: string | null = null;
  toggleState: boolean = false;
  favoritesCount: number = 0;
  private cartStoreSharedService=inject(CartStoreSharedService)

  count = this.cartStoreSharedService.count;


  public headerSerive=inject(HeaderService)

  openMiniCar() {
    console.log('openMiniCar')
    this.headerSerive.toggleCart();
    window.dispatchEvent(
        new CustomEvent(MFEvents.REFRESH_CART_ITEMS, {})
    );
  }

  // Datos de países de América (solo este continente)
  countries = {
    northAmerica: [
      { name: 'Estados Unidos', flag: '🇺🇸', code: 'us' },
      { name: 'Canadá', flag: '🇨🇦', code: 'ca' },
      { name: 'México', flag: '🇲🇽', code: 'mx' }
    ],
    southAmerica: [
      { name: 'Argentina', flag: '🇦🇷', code: 'ar' },
      { name: 'Brasil', flag: '🇧🇷', code: 'br' },
      { name: 'Chile', flag: '🇨🇱', code: 'cl' },
      { name: 'Colombia', flag: '🇨🇴', code: 'co' },
      { name: 'Perú', flag: '🇵🇪', code: 'pe' },
      { name: 'Venezuela', flag: '🇻🇪', code: 've' },
      { name: 'Ecuador', flag: '🇪🇨', code: 'ec' },
      { name: 'Bolivia', flag: '🇧🇴', code: 'bo' },
      { name: 'Paraguay', flag: '🇵🇾', code: 'py' },
      { name: 'Uruguay', flag: '🇺🇾', code: 'uy' },
      { name: 'Guyana', flag: '🇬🇾', code: 'gy' },
      { name: 'Surinam', flag: '🇸🇷', code: 'sr' },
      { name: 'Guayana Francesa', flag: '🇬🇫', code: 'gf' }
    ],
    centralAmerica: [
      { name: 'Guatemala', flag: '🇬🇹', code: 'gt' },
      { name: 'Belice', flag: '🇧🇿', code: 'bz' },
      { name: 'Honduras', flag: '🇭🇳', code: 'hn' },
      { name: 'El Salvador', flag: '🇸🇻', code: 'sv' },
      { name: 'Nicaragua', flag: '🇳🇮', code: 'ni' },
      { name: 'Costa Rica', flag: '🇨🇷', code: 'cr' },
      { name: 'Panamá', flag: '🇵🇦', code: 'pa' },
      { name: 'Cuba', flag: '🇨🇺', code: 'cu' },
      { name: 'Jamaica', flag: '🇯🇲', code: 'jm' },
      { name: 'Haití', flag: '🇭🇹', code: 'ht' },
      { name: 'República Dominicana', flag: '🇩🇴', code: 'do' },
      { name: 'Puerto Rico', flag: '🇵🇷', code: 'pr' },
      { name: 'Bahamas', flag: '🇧🇸', code: 'bs' },
      { name: 'Trinidad y Tobago', flag: '🇹🇹', code: 'tt' },
      { name: 'Barbados', flag: '🇧🇧', code: 'bb' }
    ]
  };

  constructor(){
    this.headerSerive.toggleMenu$.subscribe(state => {
      this.toggleState = state;
    });
  }

  toggleMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

    menuMovil() {
    this.headerSerive.toggleMenu();
  }

  openSearch() {
    console.log('Abrir búsqueda de países');
  }

  openFavorites() {
    console.log('Abrir favoritos');
  }

}

