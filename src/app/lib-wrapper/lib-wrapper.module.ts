import { DiscussionEventsService, DiscussionUiModule } from 'discussion-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DiscussionUiModule
  ],
  exports: [
    DiscussionUiModule
  ]
})
export class LibWrapperModule {
  constructor(private discussionEvents: DiscussionEventsService) {
    this.discussionEvents.telemetryEvent.subscribe(event => {
      console.log('telemetryEvent', event);
    });
  }
}
