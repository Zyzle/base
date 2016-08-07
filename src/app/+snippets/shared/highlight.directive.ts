import { AfterViewInit, AfterViewChecked, Directive, ElementRef } from '@angular/core';

import * as hljs from 'highlight.js';

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
