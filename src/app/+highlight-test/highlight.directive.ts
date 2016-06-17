import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

import 'highlight';

declare var hljs: any;

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewChecked {

  constructor(public el: ElementRef) {  }

  ngAfterViewChecked() {
    hljs.highlightBlock(this.el.nativeElement);
  }

}
