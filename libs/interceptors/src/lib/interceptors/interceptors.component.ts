import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-interceptors',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './interceptors.component.html',
	styleUrl: './interceptors.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterceptorsComponent {}
