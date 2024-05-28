---
title: ANGULAR
layout: chapter.njk
---
## Introduzione a Angular
Angular è un framework front-end open-source sviluppato e mantenuto da Google, utilizzato per creare applicazioni web dinamiche e single-page applications (SPA). Angular offre un set completo di strumenti per lo sviluppo di applicazioni client-side moderne, con un forte supporto per TypeScript.

## Caratteristiche Principali
### Component-Based Architecture
Angular utilizza un'architettura basata su componenti, dove ogni parte dell'interfaccia utente è suddivisa in componenti riutilizzabili. Ogni componente ha il proprio template HTML, stile CSS e logica TypeScript.

### Dependency Injection
Angular incorpora un meccanismo di dependency injection che facilita la gestione delle dipendenze tra i vari componenti e servizi, migliorando la modularità e la testabilità del codice.

### Data Binding
Angular supporta vari tipi di data binding:
- **One-Way Data Binding**: Permette di sincronizzare i dati dal modello alla vista.
- **Two-Way Data Binding**: Permette di sincronizzare i dati tra il modello e la vista bidirezionalmente.

### Directives
Le directives sono marker su un elemento DOM (come attributi, elementi, classi) che indicano ad Angular di associare un comportamento specifico a quell'elemento.

### Services and Dependency Injection
I servizi in Angular sono utilizzati per condividere dati e logica tra diversi componenti. Grazie alla dependency injection, è possibile iniettare servizi nei componenti in modo semplice ed efficace.

### Routing
Angular offre un potente sistema di routing che permette di navigare tra le diverse viste dell'applicazione senza ricaricare la pagina intera, supportando le single-page applications.

## Creazione di un Progetto Angular
### Installazione di Angular CLI
Angular CLI (Command Line Interface) è uno strumento per inizializzare, sviluppare, mantenere e testare applicazioni Angular.

```shell
npm install -g @angular/cli
```

### Creazione di un Nuovo Progetto
```shell
ng new nome-progetto
cd nome-progetto
ng serve
```

## Struttura di un Progetto Angular
Un tipico progetto Angular contiene le seguenti directory e file:
- **src/app**: Contiene i componenti, servizi, moduli e altri file di sorgente dell'applicazione.
- **src/assets**: Contiene risorse statiche come immagini e file CSS.
- **src/environments**: Contiene file di configurazione per diversi ambienti (es. sviluppo, produzione).
- **angular.json**: File di configurazione del progetto Angular.
- **package.json**: File di configurazione delle dipendenze del progetto.

## Componenti Angular
### Creazione di un Componente
```shell
ng generate component nome-componente
```

### Struttura di un Componente
Un componente Angular è costituito da tre file principali:
- **nome-componente.component.ts**: Contiene la logica del componente.
- **nome-componente.component.html**: Contiene il template HTML del componente.
- **nome-componente.component.css**: Contiene gli stili CSS del componente.

## Data Binding in Angular
### One-Way Data Binding
Permette di legare i dati dal modello alla vista.

```html
<p>{ messaggio }</p>
```

### Two-Way Data Binding
Permette di legare i dati bidirezionalmente tra il modello e la vista utilizzando `ngModel`.

```html
<input [(ngModel)]="nome">
<p>Ciao, { nome }!</p>
```

## Directives
Le directives estendono il comportamento degli elementi del DOM.

### Structural Directives
Modificano la struttura del DOM aggiungendo o rimuovendo elementi.

```html
<div *ngIf="isVisible">Questo elemento è visibile</div>
```

### Attribute Directives
Modificano l'aspetto o il comportamento degli elementi esistenti.

```html
<div [ngClass]="{ 'classe-attiva': isActive }">Elemento con classe condizionale</div>
```

## Servizi e Dependency Injection
I servizi condividono dati o logica tra diversi componenti.

### Creazione di un Servizio
```shell
ng generate service nome-servizio
```

### Utilizzo di un Servizio in un Componente
```typescript
import { NomeServizio } from './nome-servizio.service';

@Component({
  selector: 'app-nome-componente',
  templateUrl: './nome-componente.component.html',
  styleUrls: ['./nome-componente.component.css']
})
export class NomeComponente {
  constructor(private nomeServizio: NomeServizio) {}
}
```

## Routing in Angular
### Configurazione del Routing
Definisci le rotte dell'applicazione nel modulo di routing.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Utilizzo del Router
Naviga tra le viste utilizzando il routerLink.

```html
<a routerLink="/">Home</a>
<a routerLink="/about">About</a>
<router-outlet></router-outlet>
```

## Testing in Angular
### Test di Unità
Angular supporta i test di unità utilizzando Karma e Jasmine.

### Test End-to-End
I test end-to-end (E2E) sono supportati utilizzando Protractor.