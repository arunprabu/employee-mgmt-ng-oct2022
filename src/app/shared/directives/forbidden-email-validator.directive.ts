import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenEmailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenEmail: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenEmailValidatorDirective, multi: true }]
})
export class ForbiddenEmailValidatorDirective implements Validator {
  @Input('appForbiddenEmail') forbiddenEmail = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenEmail ? forbiddenEmailValidator(new RegExp(this.forbiddenEmail, 'i'))(control)
      : null;
  }
}