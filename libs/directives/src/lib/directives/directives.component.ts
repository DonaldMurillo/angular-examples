import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-directives',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './directives.component.html',
	styleUrl: './directives.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivesComponent {}
