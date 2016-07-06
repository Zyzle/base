import { AfterViewInit, AfterViewChecked, Directive, ElementRef } from '@angular/core';

import 'highlight';

declare var hljs: any;

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit, AfterViewChecked {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    hljs.highlightBlock(this.el.nativeElement);
  }

  ngAfterViewChecked() {
    hljs.highlightBlock(this.el.nativeElement);
  }

}
