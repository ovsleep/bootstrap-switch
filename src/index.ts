import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapSwitchComponent } from './bootstrap-switch.component';

export * from './bootstrap-switch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BootstrapSwitchComponent,
  ],
  exports: [
    BootstrapSwitchComponent,
  ]
})
export class BootstrapSwitchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BootstrapSwitchModule,
      providers: []
    };
  }
}
