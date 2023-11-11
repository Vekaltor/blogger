import { NgModule } from '@angular/core';

import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DialogModule,
    InputTextareaModule,
    ScrollTopModule,
    SidebarModule,
    SkeletonModule,
    TabMenuModule,
    MessagesModule,
  ],
  bootstrap: [],
})
export class PrimengModule {}
