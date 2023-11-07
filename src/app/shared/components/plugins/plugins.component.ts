import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
})
export class PluginsComponent {
  @Output() public socialPlugins = [
    {
      id: 1,
      name: 'Facebook',
      iconStyle: 'primary-600 pi pi-facebook',
      backgroundColor: '#1877f2',
    },
    {
      id: 2,
      name: 'Twitter',
      iconStyle: 'pi pi-twitter',
      backgroundColor: '#1da1f2',
    },
    {
      id: 3,
      name: 'Instagram',
      iconStyle: 'pi pi-instagram',
      backgroundGradient:
        'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
    },
    {
      id: 4,
      name: 'LinkedIn',
      iconStyle: 'pi pi-linkedin',
      backgroundColor: '#0077b5',
    },
    {
      id: 6,
      name: 'YouTube',
      iconStyle: 'pi pi-youtube',
      backgroundColor: '#ff0000',
    },
    {
      id: 8,
      name: 'WhatsApp',
      iconStyle: 'pi pi-whatsapp',
      backgroundColor: '#25d366',
    },
    {
      id: 10,
      name: 'Reddit',
      iconStyle: 'pi pi-reddit',
      backgroundColor: '#ff4500',
    },
  ];
}
