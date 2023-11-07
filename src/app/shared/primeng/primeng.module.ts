import { NgModule } from '@angular/core';

import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ScrollTopModule,
    TabMenuModule,
  ],
  bootstrap: [],
})
export class PrimengModule {}
