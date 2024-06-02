import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-examples',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './examples.component.html',
	styleUrl: './examples.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesComponent {}
