import { Component, OnInit } from '@angular/core';
import { ThemeService, SubPalette } from '../theme.service';
import { FormGroup, FormControl } from '@angular/forms';

export interface Palette {
  primary: SubPalette;
  accent: SubPalette;
  warn: SubPalette;
  textLight: string;
  textDark: string;
}

@Component({
  selector: 'app-palette-picker',
  templateUrl: './palette-picker.component.html',
  styleUrls: ['./palette-picker.component.scss']
})
export class PalettePickerComponent implements OnInit {

  form: FormGroup;

  constructor(private service: ThemeService) {
    this.form = new FormGroup({
      primary: new FormGroup({
        main: new FormControl(''),
        lighter: new FormControl(''),
        darker: new FormControl('')
      }),
      accent: new FormGroup({
        main: new FormControl(''),
        lighter: new FormControl(''),
        darker: new FormControl('')
      }),
      warn: new FormGroup({
        main: new FormControl(''),
        lighter: new FormControl(''),
        darker: new FormControl('')
      }),
      textLight: new FormControl(''),
      textDark: new FormControl(''),
    });
  }

  ngOnInit() {

    this.form.patchValue({
      primary: { main: '#cc33ca' },
      accent: { main: '#797979' },
      warn: { main: '#ff0000' },
      textLight: '#ffffff',
      textDark: '#000000'
    });

    this.form.valueChanges.subscribe(x => {
      this.service.palette = x;
    });

    this.service.$palette
      .subscribe(x => {
        if (x) {
          this.form.patchValue(x);
        }
      });
  }
}