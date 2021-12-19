import { Component } from '@angular/core';
import { Hero, Zero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Zero(18, 'Dr IQ', this.powers[0], 'Chunk Overstreet');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
