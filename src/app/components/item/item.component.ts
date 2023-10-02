import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="item">
    <div class="left">
      <input type="checkbox" name="do" id="doCheckbox">
      <span class="item-text">
         Je suis un nouvel item
      </span>
    </div>
    <div class="icons">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0206 5.82837L17.9703 10.7781M13.0206 5.82837L15.849 2.99994L20.7987 7.94969L17.9703 10.7781L13.0206 5.82837ZM13.0206 5.82837L3.41398 15.435C3.22645 15.6225 3.12109 15.8769 3.12109 16.1421V20.6776H7.65662C7.92184 20.6776 8.17619 20.5723 8.36373 20.3847L17.9703 10.7781L13.0206 5.82837Z" stroke="#21272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="#21272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 17V11" stroke="#21272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 17V11" stroke="#21272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 7H16M21 7H16H21ZM3 7H8H3ZM8 7V3.6C8 3.26863 8.26863 3 8.6 3H15.4C15.7314 3 16 3.26863 16 3.6V7H8Z" stroke="#21272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
</div>
`,
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

}
