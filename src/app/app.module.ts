import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressComponent } from './progress/progress.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    ProgressComponent,
    PortfolioCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
