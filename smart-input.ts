import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-SmartInput',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SmartInput)
    }],
  template: `
<div class="input-wrapper">
    <label [for]="inputName" class="mb-1 text-gray-700 font-medium text-sm">{{ label }}</label>
    <div class="input-content">
        <input
            [type]="type"
            [placeholder]="placeholder"
            [value]="value"
            (input)="onInput($event)"
            class="border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
        />
    </div>
</div> `
})


export class SmartInput implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = ''
  onChange: any = () => { }
  onTouched: any = () => { }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void { }
}
