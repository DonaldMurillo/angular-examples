import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-pipes',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './pipes.component.html',
	styleUrl: './pipes.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipesComponent {}
