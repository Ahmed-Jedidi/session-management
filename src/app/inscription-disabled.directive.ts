import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appInscriptionDisabled]',
  standalone: true
})
export class InscriptionDisabledDirective {

  constructor() { }

@HostBinding('class.link-is-disabled') status!: boolean;
@Input()
set appInscriptionDisabled(value : boolean) {
this.status = value;

}
}
