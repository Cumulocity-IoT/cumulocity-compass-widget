import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, HOOK_COMPONENTS } from '@c8y/ngx-components';
import {
  DashboardUpgradeModule,
  UpgradeModule,
  HybridAppModule,
  UPGRADE_ROUTES
} from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { CockpitDashboardModule } from '@c8y/ngx-components/context-dashboard';
import { ReportsModule } from '@c8y/ngx-components/reports';
import { SensorPhoneModule } from '@c8y/ngx-components/sensor-phone';
import { CompassWidget } from "./src/compass-widget/compass-widget.component";
import { CompassWidgetConfig } from "./src/compass-widget/compass-widget.config.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NgRouterModule.forRoot([...UPGRADE_ROUTES], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    ReportsModule,
    NgUpgradeModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    UpgradeModule
  ],
  declarations: [CompassWidget, CompassWidgetConfig],
  entryComponents: [CompassWidget, CompassWidgetConfig],
  providers: [{
    provide: HOOK_COMPONENTS,
    multi: true,
    useValue: [
      {
        id: 'global.presales.compass.widget',
        label: 'Compass',
        description: 'Displays an animated compass direction based on the measurement data provided',
        component: CompassWidget,
        configComponent: CompassWidgetConfig,
        previewImage: require("./styles/previewImage.png")
      }
    ]
  }],
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
