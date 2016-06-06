import { Directive, ElementRef } from '@angular/core';

import 'highlight';

declare var hljs: any;

@Directive({
  selector: '[highlight]'
})
export class Highlight {

  constructor(public el: ElementRef) {  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.el.nativeElement);
  }

}
