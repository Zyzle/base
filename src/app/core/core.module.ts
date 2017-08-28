import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleConfig } from './core-module-config';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule {

  static forRoot(config: CoreModuleConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: CoreModuleConfig,
          useValue: config
        },
        AuthService
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module already loaded!');
    }
  }
}
