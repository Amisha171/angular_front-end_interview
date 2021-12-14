import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {
  @Input() onlyNumbers = '';
  regex = /[^0-9]*/g;
  constructor(private elRef: ElementRef) { }

  @HostListener('input', ['$event']) onChange(event: { stopPropagation: () => void; }) {
    const value = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = value.replace(this.regex, '');
    if (value !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
