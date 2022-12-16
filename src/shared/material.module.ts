import { NgModule } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { registerLocaleData } from '@angular/common';

import localeIT from '@angular/common/locales/it';
import { MatDialogModule } from "@angular/material/dialog";
registerLocaleData(localeIT);
@NgModule({
    imports: [
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatSidenavModule,
        MatListModule,
        MatTooltipModule,
        MatTableModule,
        MatDialogModule,
        MatSnackBarModule,
        MatStepperModule,
        MatSlideToggleModule,
        DragDropModule
    ],
    exports: [
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatSidenavModule,
        MatListModule,
        MatTooltipModule,
        MatTableModule,
        MatDialogModule,
        MatSnackBarModule,
        MatStepperModule,
        MatSlideToggleModule,
        DragDropModule
    ],
    providers: []
})
export class MaterialModule {
}