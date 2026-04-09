import { Component, signal, computed } from '@angular/core';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { SampleModalComponent } from './components/sample-modal/sample-modal.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { OFFERS, SAMPLE_DATA } from '@constants/index';
import { SampleData } from '@models/index';

@Component({
  selector: 'app-offer-cards',
  standalone: true,
  imports: [OfferCardComponent, SampleModalComponent, AppFooterComponent],
  templateUrl: './offer-cards.component.html',
  styleUrl: './offer-cards.component.css',
})
export class OfferCardsComponent {
  offers = OFFERS;
  selectedOfferId = signal<string | null>(null);
  modalOpen = signal<boolean>(false);
  modalData = signal<SampleData | null>(null);

  onSelectOffer(id: string): void {
    this.selectedOfferId.set(id);
  }

  onViewSample(offerId: string): void {
    this.modalData.set(SAMPLE_DATA[offerId] || null);
    this.modalOpen.set(true);
  }

  onCloseModal(): void {
    this.modalOpen.set(false);
  }

  onAddToCart(): void {
    this.modalOpen.set(false);
  }
}