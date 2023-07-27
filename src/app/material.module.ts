import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';

export const MATERIAL_MODULES = [
	MatButtonModule,
	MatIconModule,
	MatListModule,
	MatTabsModule,
	MatTooltipModule,
];

@NgModule({
	imports: MATERIAL_MODULES,
	exports: MATERIAL_MODULES,
})
export class MaterialModule {}
