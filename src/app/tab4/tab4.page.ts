import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonTextarea, IonImg, IonItem, 
  IonSegment, IonSegmentButton, IonLabel, IonSelectOption, IonSelect, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonModal, IonicModule } from '@ionic/angular';
import { SelectProvinceComponent } from '../components/select-province/select-province.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [SelectProvinceComponent,IonicModule],
    
})
export class Tab4Page {

  @ViewChild('modal', { static: true }) modal!: IonModal;

  selectedProvinceText = '0 Items';
  selectedProvinces: string[] = [];

  provinces = [
    { 'text': 'A Coruña', 'value': 'A_CORUÑA' },
    { 'text': 'Álava', 'value': 'ÁLAVA' },
    { 'text': 'Albacete', 'value': 'ALBACETE' },
    { 'text': 'Alicante', 'value': 'ALICANTE' },
    { 'text': 'Almería', 'value': 'ALMERÍA' },
    { 'text': 'Asturias', 'value': 'ASTURIAS' },
    { 'text': 'Ávila', 'value': 'ÁVILA' },
    { 'text': 'Badajoz', 'value': 'BADAJOZ' },
    { 'text': 'Baleares', 'value': 'BALEARES' },
    { 'text': 'Barcelona', 'value': 'BARCELONA' },
    { 'text': 'Burgos', 'value': 'BURGOS' },
    { 'text': 'Cáceres', 'value': 'CÁCERES' },
    { 'text': 'Cádiz', 'value': 'CÁDIZ' },
    { 'text': 'Cantabria', 'value': 'CANTABRIA' },
    { 'text': 'Castellón', 'value': 'CASTELLÓN' },
    { 'text': 'Ciudad Real', 'value': 'CIUDAD_REAL' },
    { 'text': 'Córdoba', 'value': 'CÓRDOBA' },
    { 'text': 'Cuenca', 'value': 'CUENCA' },
    { 'text': 'Girona', 'value': 'GIRONA' },
    { 'text': 'Granada', 'value': 'GRANADA' },
    { 'text': 'Guadalajara', 'value': 'GUADALAJARA' },
    { 'text': 'Gipuzkoa', 'value': 'GIPUZKOA' },
    { 'text': 'Huelva', 'value': 'HUELVA' },
    { 'text': 'Huesca', 'value': 'HUESCA' },
    { 'text': 'Jaén', 'value': 'JAÉN' },
    { 'text': 'La Rioja', 'value': 'LA_RIOJA' },
    { 'text': 'Las Palmas', 'value': 'LAS_PALMAS' },
    { 'text': 'León', 'value': 'LEÓN' },
    { 'text': 'Lérida', 'value': 'LÉRIDA' },
    { 'text': 'Lugo', 'value': 'LUGO' },
    { 'text': 'Madrid', 'value': 'MADRID' },
    { 'text': 'Málaga', 'value': 'MÁLAGA' },
    { 'text': 'Murcia', 'value': 'MURCIA' },
    { 'text': 'Navarra', 'value': 'NAVARRA' },
    { 'text': 'Ourense', 'value': 'OURENSE' },
    { 'text': 'Palencia', 'value': 'PALENCIA' },
    { 'text': 'Pontevedra', 'value': 'PONTEVEDRA' },
    { 'text': 'Salamanca', 'value': 'SALAMANCA' },
    { 'text': 'Segovia', 'value': 'SEGOVIA' },
    { 'text': 'Sevilla', 'value': 'SEVILLA' },
    { 'text': 'Soria', 'value': 'SORIA' },
    { 'text': 'Tarragona', 'value': 'TARRAGONA' },
    { 'text': 'Santa Cruz de Tenerife', 'value': 'SANTA_CRUZ_DE_TENERIFE' },
    { 'text': 'Teruel', 'value': 'TERUEL' },
    { 'text': 'Toledo', 'value': 'TOLEDO' },
    { 'text': 'Valencia', 'value': 'VALENCIA' },
    { 'text': 'Valladolid', 'value': 'VALLADOLID' },
    { 'text': 'Vizcaya', 'value': 'VIZCAYA' },
    { 'text': 'Zamora', 'value': 'ZAMORA' },
    { 'text': 'Zaragoza', 'value': 'ZARAGOZA' }
]

  private formatData(data: string[]) {
    if (data.length === 1) {
      const prov = this.provinces.find((p) => p.value === data[0]);
      return prov?.text;
    }

    return `${data.length} items`;
  }

  provinceSelectionChanged(fruits: any) {
    this.selectedProvinces = fruits;
    this.selectedProvinceText = this.formatData(this.selectedProvinces) || '0 Provinces';
    this.modal.dismiss();
  }

}
