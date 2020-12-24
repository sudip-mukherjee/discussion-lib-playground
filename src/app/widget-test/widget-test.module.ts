import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetTestRoutingModule } from './widget-test-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { DiscussDetailsComponent } from './discuss-details/discuss-details.component';
import { EntryComponent } from './entry/entry.component';
import { DiscussionEventsService, DiscussionUiModule } from 'discussion-ui';

@NgModule({
  declarations: [CategoriesComponent, DiscussDetailsComponent, EntryComponent],
  imports: [
    CommonModule,
    WidgetTestRoutingModule,
    DiscussionUiModule
  ],
  exports: [EntryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetTestModule {
  constructor(private discussionEvents: DiscussionEventsService) {
    this.discussionEvents.telemetryEvent.subscribe(event => {
      console.log('telemetryEvent', event);
    });
  }
}
