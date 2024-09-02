---
title: ANGULAR
layout: chapter.njk
---
## Introduzione a Angular
Angular è un framework front-end open-source sviluppato e mantenuto da Google, utilizzato per creare applicazioni web dinamiche e single-page applications (SPA). Angular offre un set completo di strumenti per lo sviluppo di applicazioni client-side moderne, con un forte supporto per TypeScript.

## Component-Based Architecture
Angular utilizza un'architettura basata su componenti, dove ogni parte dell'interfaccia utente è suddivisa in componenti riutilizzabili. Ogni componente ha il proprio template HTML, stile CSS e logica TypeScript.

## Dependency Injection
La **Dependency Injection (DI)** è un design pattern utilizzato in Angular per gestire le dipendenze tra le classi in modo efficiente. In Angular, le dipendenze, come i servizi, vengono iniettate nei componenti piuttosto che essere create manualmente all'interno di essi. Questo migliora la modularità, la testabilità e la manutenibilità del codice.

### Come Funziona
Angular utilizza un injector per mantenere e fornire le istanze dei servizi e di altre dipendenze richieste dai componenti. Quando un componente richiede una dipendenza, l'injector di Angular fornisce l'istanza appropriata.

### Esempio di Dependency Injection
- **Creazione di un servizio:**

  ```typescript
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })
  export class ExampleService {
    constructor() { }

    getServiceData() {
      return 'Dati del servizio';
    }
  }
  ```

- **Iniezione del servizio in un componente:**

  ```typescript
  import { Component } from '@angular/core';
  import { ExampleService } from './example.service';

  @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
  })
  export class ExampleComponent {
    data: string;

    constructor(private exampleService: ExampleService) {
      this.data = this.exampleService.getServiceData();
    }
  }
  ```

### Vantaggi della Dependency Injection
- **Modularità:** I componenti e i servizi sono disaccoppiati, rendendo il codice più modulare.
- **Testabilità:** I servizi possono essere facilmente mockati nei test unitari.
- **Manutenibilità:** Le dipendenze sono gestite centralmente, facilitando l'aggiornamento e la gestione del codice.

### Data Binding
Il Data Binding in Angular è il meccanismo che consente di collegare i dati tra la logica dell'applicazione (componenti) e il template (vista). Esistono quattro tipi principali di data binding in Angular:
- **Interpolation (Interpolazione):**
{% raw %}
  - Consente di inserire espressioni nel template utilizzando le doppie parentesi graffe `{{ }}`. Viene utilizzato per legare i dati di una proprietà del componente alla vista in modo unidirezionale (dal componente al template).
  - Esempio: `<h1>{{ titolo }}</h1>` dove titolo è una proprietà del componente.
  {% endraw %}
- **Property Binding:**
  - Lega i valori delle proprietà del componente agli attributi del DOM. Si utilizza la sintassi `[attributo]` nel template. È un binding unidirezionale (dal componente al template).
  - Esempio: `<img [src]="urlImmagine">`, dove urlImmagine è una proprietà del componente.
- **Event Binding:**
  - Consente al template di rispondere agli eventi del DOM. Si utilizza la sintassi `(evento)` nel template. È un binding unidirezionale (dal template al componente).
  - Esempio: `<button (click)="onClick()">Cliccami</button>`, dove `onClick()` è un metodo del componente.
- **Two-Way Data Binding:**
  - Permette di sincronizzare i dati tra il componente e il template in entrambe le direzioni, in modo che quando uno cambia, l'altro venga aggiornato automaticamente. Si ottiene combinando Property Binding e Event Binding insieme con la direttiva `ngModel`.
  - Esempio: `<input [(ngModel)]="nome">`, dove nome è una proprietà del componente. Se l'utente modifica il valore nel campo di input, la proprietà nome viene aggiornata, e viceversa.

### Differenza tra unidirezionale e bidirezionale

**Unidirezionale (One-Way Binding)**
- **Flusso dei dati:** I dati fluiscono in una sola direzione.
- **Component → Template:** Il valore di una proprietà del componente viene legato a un elemento del template. Se la proprietà cambia nel componente, il template si aggiorna automaticamente. Tuttavia, se l'utente interagisce con il template, la proprietà del componente non viene aggiornata.  
  - **Esempio:** {% raw %}`<p>{{ messaggio }}</p>` {% endraw %}
- **Template → Component:** In Event Binding, il template può inviare dati o notifiche al componente tramite eventi (ad esempio, un click di un pulsante che chiama una funzione nel componente). In questo caso, il flusso di dati va dal template al componente.
  - **Esempio:** `<button (click)="onClick()">Clicca</button>`

**Bidirezionale (Two-Way Binding)**
- **Flusso dei dati:** I dati fluiscono in entrambe le direzioni, dal componente al template e viceversa.
- **Component ↔ Template:** Il valore di una proprietà del componente e il valore di un elemento nel template (come un campo di input) sono sincronizzati. Se l'utente modifica il valore nel template, la proprietà del componente viene aggiornata automaticamente. Allo stesso modo, se il valore della proprietà cambia nel componente, il template viene aggiornato.
  - **Esempio:** `<input [(ngModel)]="nome">`
  - Se l'utente digita qualcosa nell'input, il valore della proprietà `nome` nel componente viene aggiornato in tempo reale. Se il componente cambia il valore di `nome`, il campo di input rifletterà automaticamente questa modifica.

## Direttive
Le direttive in Angular sono marker su un elemento DOM (come attributi, elementi, o classi) che indicano ad Angular di associare un comportamento specifico a quell'elemento. Esistono tre tipi principali di direttive in Angular:

### Structural Directives
Le direttive strutturali cambiano la struttura del DOM aggiungendo, rimuovendo o manipolando elementi del DOM. Queste direttive iniziano con un asterisco (`*`).

- **ngIf:**
  - Mostra o nasconde un elemento in base a una condizione booleana.
  - Esempio: `<div *ngIf="isVisible">Questo elemento è visibile</div>`

- **ngFor:**
  - Ripete un elemento per ogni voce in una lista.
  - Esempio:{% raw %} `<div *ngFor="let item of items">{{ item }}</div>`{% endraw %}

- **ngSwitch:**
  - Alterna tra diverse viste basate su una condizione.
  - Esempio:
    ```html
    <div [ngSwitch]="color">
      <p *ngSwitchCase="'red'">Rosso</p>
      <p *ngSwitchCase="'blue'">Blu</p>
      <p *ngSwitchDefault>Altro colore</p>
    </div>
    ```

### Attribute Directives
Le direttive attributo alterano l'aspetto o il comportamento degli elementi esistenti nel DOM senza cambiarne la struttura.

- **ngClass:**
  - Aggiunge o rimuove classi CSS basate su condizioni.
  - Esempio: `<div [ngClass]="{ 'classe-attiva': isActive }">Elemento con classe condizionale</div>`

- **ngStyle:**
  - Aggiunge o rimuove stili CSS basati su condizioni.
  - Esempio: `<div [ngStyle]="{ 'color': isRed ? 'red' : 'blue' }">Testo colorato</div>`

- **ngModel:**
  - Lega i valori di input o selezione a una proprietà del componente, supportando il data binding bidirezionale.
  - Esempio: `<input [(ngModel)]="nome">`

### Custom Directives
È possibile creare direttive personalizzate per estendere il comportamento degli elementi HTML esistenti.

- **Creazione di una direttiva personalizzata:**
  ```typescript
  import { Directive, ElementRef, Renderer2 } from '@angular/core';

  @Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    }
  }
  ```

  - **Utilizzo nel template:**
    ```html
    <p appHighlight>Questo testo è evidenziato in giallo</p>
    ```
## Routing in Angular
Il routing in Angular permette di navigare tra le diverse viste della tua applicazione senza ricaricare la pagina intera, rendendo possibile la creazione di single-page applications (SPA). Angular offre un potente sistema di routing che consente di definire le rotte, passare parametri e gestire la navigazione tra componenti.

### Configurazione del Routing
Per configurare il routing, bisogna definire le rotte dell'applicazione in un modulo di routing. Questo modulo importerà `RouterModule` e configurerà le rotte utilizzando `Routes`.

- **Esempio di configurazione del routing:**

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
Una volta configurate le rotte, è possibile navigare tra le diverse viste utilizzando `routerLink` nei template HTML e `Router` nelle logiche dei componenti.

- **Navigazione tra le viste:**

  ```html
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <router-outlet></router-outlet>
  ```

- **Gestione della navigazione nel componente:**

  ```typescript
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-nome-componente',
    templateUrl: './nome-componente.component.html',
    styleUrls: ['./nome-componente.component.css']
  })
  export class NomeComponente {
    constructor(private router: Router) {}

    navigaHome() {
      this.router.navigate(['/']);
    }

    navigaAbout() {
      this.router.navigate(['/about']);
    }
  }
  ```

### Passaggio di Parametri nel Routing
Angular consente di passare parametri tramite le rotte, permettendo una maggiore flessibilità nella navigazione.

- **Definizione di una rotta con parametri:**

  ```typescript
  const routes: Routes = [
    { path: 'user/:id', component: UserComponent }
  ];
  ```

- **Accesso ai parametri nella logica del componente:**

  ```typescript
  import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })
  export class UserComponent {
    userId: string;

    constructor(private route: ActivatedRoute) {
      this.userId = this.route.snapshot.paramMap.get('id');
    }
  }
  ```

### Lazy Loading
Il **Lazy Loading** in Angular è una tecnica utilizzata per caricare i moduli dell'applicazione solo quando sono necessari, anziché caricarli tutti all'inizio. Questo migliora le prestazioni dell'applicazione riducendo il tempo di caricamento iniziale e ottimizzando l'uso delle risorse. Ad esempio, un modulo di amministrazione può essere caricato solo quando l'utente naviga verso l'area di amministrazione, riducendo così il carico iniziale dell'applicazione.

- **Configurazione di una rotta con lazy loading:**

  ```typescript
  const routes: Routes = [
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
  ];
  ```

  Con questa configurazione, il modulo `AdminModule` sarà caricato solo quando l'utente naviga verso la rotta `/admin`.

## Pipes
I **Pipes** in Angular sono utilizzati per trasformare i dati nel template. Permettono di formattare i dati direttamente nella vista senza modificare il modello o la logica del componente. Angular offre una serie di pipe integrate, ma è possibile anche crearne di personalizzate.

{%raw%}
### Pipes Integrate
Alcune delle pipe integrate più comuni includono:

- **DatePipe:**
  - Formatta le date in vari formati.
  - Esempio: `{{ data | date:'dd/MM/yyyy' }}`

- **CurrencyPipe:**
  - Formatta i numeri come valute.
  - Esempio: `{{ prezzo | currency:'EUR' }}`

- **UpperCasePipe e LowerCasePipe:**
  - Convertono il testo in maiuscolo o minuscolo.
  - Esempio: `{{ testo | uppercase }}`
  
- **DecimalPipe:**
  - Formatta i numeri con un numero specifico di cifre decimali.
  - Esempio: `{{ numero | number:'1.2-2' }}`

- **JsonPipe:**
  - Converte un oggetto in una stringa JSON formattata.
  - Esempio: `{{ oggetto | json }}`
{%endraw%}

### Creazione di un Pipe Personalizzato
È possibile creare pipe personalizzate per soddisfare esigenze specifiche.

- **Esempio di pipe personalizzato:**

  ```typescript
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'reverse'
  })
  export class ReversePipe implements PipeTransform {
    transform(value: string): string {
      return value.split('').reverse().join('');
    }
  }
  ```

  - **Utilizzo nel template:**

    ```html
    <p>{{ 'Angular' | reverse }}</p> 
    <!-- Output: ralugnA -->
    ```

## Lifecycle Hooks
I **Lifecycle Hooks** in Angular sono metodi speciali che vengono chiamati in momenti specifici del ciclo di vita di un componente. Questi hook permettono di eseguire codice in risposta a cambiamenti nello stato del componente o delle sue dipendenze.

### Principali Lifecycle Hooks

- **ngOnInit:**
  - Viene chiamato una volta che l'input del componente è stato inizializzato. È comunemente utilizzato per inizializzare i dati del componente.
  - Esempio: 
    ```typescript
    ngOnInit() {
      // Inizializzazione del componente
    }
    ```

- **ngOnChanges:**
  - Viene chiamato ogni volta che uno degli input del componente cambia. Riceve un oggetto `SimpleChanges` che contiene le proprietà modificate.
  - Esempio:
    ```typescript
    ngOnChanges(changes: SimpleChanges) {
      // Risposta ai cambiamenti negli input
    }
    ```

- **ngDoCheck:**
  - Viene chiamato durante ogni ciclo di rilevamento delle modifiche di Angular, permettendo di intercettare e rispondere a cambiamenti che Angular potrebbe non rilevare automaticamente.
  - Esempio:
    ```typescript
    ngDoCheck() {
      // Rilevamento manuale delle modifiche
    }
    ```

- **ngAfterViewInit:**
  - Viene chiamato dopo che la vista del componente (e le viste figlie) sono state inizializzate. Utile per il codice che dipende dalla vista completa.
  - Esempio:
    ```typescript
    ngAfterViewInit() {
      // Operazioni da eseguire dopo l'inizializzazione della vista
    }
    ```

- **ngOnDestroy:**
  - Viene chiamato appena prima che il componente venga distrutto. È utilizzato per pulire risorse come subscription, timer, o altre risorse che devono essere liberate per evitare memory leak.
  - Esempio:
    ```typescript
    ngOnDestroy() {
      // Pulizia del componente prima della distruzione
    }
    ```

### Utilizzo dei Lifecycle Hooks
Questi metodi sono implementati nelle classi dei componenti per reagire a diversi eventi nel ciclo di vita del componente, garantendo un controllo granulare su come e quando il codice viene eseguito.

## RxJS e Observables
**RxJS (Reactive Extensions for JavaScript)** è una libreria per la programmazione reattiva utilizzata in Angular per gestire flussi di dati asincroni. Gli **Observables** sono una delle principali caratteristiche di RxJS e rappresentano flussi di dati che possono essere osservati e su cui si può reagire.

### Che Cos'è un Observable?
Un **Observable** è una rappresentazione di un flusso di eventi o valori futuri. Gli Observables emettono valori nel tempo, che possono essere osservati e gestiti attraverso **subscription**. Gli Observables sono utilizzati per gestire operazioni asincrone come richieste HTTP, eventi di input utente, o sequenze temporali.

### Creazione di un Observable
- **Esempio di creazione di un Observable:**

  ```typescript
  import { Observable } from 'rxjs';

  const myObservable = new Observable(observer => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });
  ```

### Sottoscrizione a un Observable
Per ricevere i valori emessi da un Observable, è necessario sottoscriversi ad esso utilizzando il metodo `subscribe`.

- **Esempio di sottoscrizione:**

  ```typescript
  myObservable.subscribe({
    next(value) { console.log(value); },
    error(err) { console.error('Error: ' + err); },
    complete() { console.log('Completed'); }
  });
  ```

### Operatori RxJS
RxJS fornisce una vasta gamma di operatori per trasformare, filtrare e combinare flussi di dati. Alcuni operatori comuni includono:

- **map:** Trasforma i valori emessi da un Observable.
  - Esempio: `observable.pipe(map(value => value * 2))`
  
- **filter:** Filtra i valori in base a una condizione.
  - Esempio: `observable.pipe(filter(value => value > 10))`
  
- **mergeMap:** Mappa ciascun valore a un Observable e ne unisce i risultati.
  - Esempio: `observable.pipe(mergeMap(value => http.get('/api/' + value)))`

### Utilizzo degli Observables in Angular
In Angular, gli Observables sono ampiamente utilizzati con il modulo `HttpClient` per gestire richieste HTTP asincrone, e con form controls per rispondere ai cambiamenti degli input.

- **Esempio di utilizzo di HttpClient con Observables:**

  ```typescript
  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
  })
  export class ExampleComponent implements OnInit {
    constructor(private http: HttpClient) {}

    ngOnInit() {
      this.http.get('/api/data').subscribe(data => {
        console.log(data);
      });
    }
  }
  ```

## Forms in Angular
Angular offre due approcci principali per la gestione dei form: **Template-driven forms** e **Reactive forms**. Entrambi gli approcci forniscono strumenti potenti per gestire e validare i dati degli input dell'utente.

### Template-driven Forms
I **Template-driven forms** si basano principalmente sul template HTML per definire la logica del form. Sono più semplici da configurare e utilizzano le direttive di Angular come `ngModel` per il data binding.

- **Esempio di Template-driven Form:**

  ```html
  <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
    <label for="name">Nome:</label>
    <input id="name" name="name" ngModel required>
    
    <label for="email">Email:</label>
    <input id="email" name="email" type="email" ngModel required>
    
    <button type="submit" [disabled]="userForm.invalid">Invia</button>
  </form>
  ```

  ```typescript
  onSubmit(form: NgForm) {
    console.log('Form Data:', form.value);
  }
  ```

### Reactive Forms
I **Reactive forms** sono più strutturati e potenti rispetto ai Template-driven forms. Utilizzano una programmazione esplicita e si basano su `FormControl`, `FormGroup`, e `FormBuilder` per gestire lo stato e la validazione del form.

- **Esempio di Reactive Form:**

  ```typescript
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
  })
  export class UserFormComponent implements OnInit {
    userForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    onSubmit() {
      if (this.userForm.valid) {
        console.log('Form Data:', this.userForm.value);
      }
    }
  }
  ```

  ```html
  <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
    <label for="name">Nome:</label>
    <input id="name" formControlName="name">
    <div *ngIf="userForm.get('name').invalid && userForm.get('name').touched">
      Il nome è obbligatorio.
    </div>
    
    <label for="email">Email:</label>
    <input id="email" formControlName="email" type="email">
    <div *ngIf="userForm.get('email').invalid && userForm.get('email').touched">
      Inserisci un'email valida.
    </div>
    
    <button type="submit" [disabled]="userForm.invalid">Invia</button>
  </form>
  ```

### Validazione dei Forms
Angular supporta la validazione dei forms sia in modo sincrono che asincrono. Puoi definire validatori direttamente nei form template (per i Template-driven forms) o nel codice TypeScript (per i Reactive forms).

- **Validatori comuni:**
  - `required`: Campo obbligatorio.
  - `minlength` e `maxlength`: Lunghezza minima e massima.
  - `pattern`: Confronta il valore con un'espressione regolare.
  - `email`: Controlla che il valore sia un'email valida.

- **Esempio di validazione in un Reactive Form:**

  ```typescript
  this.userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]
  });
  ```

## Decoratori
I **Decoratori** in Angular sono funzioni speciali che possono essere applicate a classi, metodi, proprietà o parametri per aggiungere metadati e comportamenti specifici. In Angular, i decoratori sono utilizzati per definire le caratteristiche di componenti, servizi, moduli e altre entità.

### Decoratori Comuni in Angular

- **@Component:**
  - Utilizzato per definire una classe come un componente Angular. Fornisce metadati come il selettore, il template, e gli stili associati al componente.
  - Esempio:
    ```typescript
    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent {}
    ```

- **@NgModule:**
  - Utilizzato per definire una classe come un modulo Angular. Fornisce metadati su componenti, direttive, servizi e altri moduli inclusi nel modulo.
  - Esempio:
    ```typescript
    @NgModule({
      declarations: [ExampleComponent],
      imports: [BrowserModule],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    ```

- **@Injectable:**
  - Utilizzato per definire una classe come un servizio che può essere iniettato in altre classi tramite il meccanismo di Dependency Injection di Angular.
  - Esempio:
    ```typescript
    @Injectable({
      providedIn: 'root',
    })
    export class ExampleService {}
    ```

- **@Input e @Output:**
  - **@Input:** Utilizzato per definire una proprietà di un componente come input, consentendo al componente genitore di passare dati a questo componente.
  - **@Output:** Utilizzato per definire una proprietà come un evento che il componente figlio può emettere e a cui il componente genitore può rispondere.
  - Esempio:
    ```typescript
    @Component({
      selector: 'app-child',
      template: `<button (click)="notifyParent()">Click me</button>`
    })
    export class ChildComponent {
      @Input() childData: string;
      @Output() notify: EventEmitter<string> = new EventEmitter<string>();

      notifyParent() {
        this.notify.emit('Data from child');
      }
    }
    ```

- **@HostListener e @HostBinding:**
  - **@HostListener:** Utilizzato per ascoltare eventi emessi dall'elemento host del componente.
  - **@HostBinding:** Utilizzato per legare una proprietà dell'elemento host a una proprietà del componente.
  - Esempio:
    ```typescript
    @Directive({
      selector: '[appHighlight]'
    })
    export class HighlightDirective {
      @HostBinding('style.backgroundColor') bgColor: string;

      @HostListener('mouseenter') onMouseEnter() {
        this.bgColor = 'yellow';
      }

      @HostListener('mouseleave') onMouseLeave() {
        this.bgColor = 'white';
      }
    }
    ```

### Vantaggi dei Decoratori
- **Chiarezza:** I decoratori aiutano a chiarire l'intento del codice aggiungendo metadati direttamente nelle definizioni delle classi.
- **Modularità:** Permettono di modularizzare e riutilizzare il codice in modo efficiente.
- **Testabilità:** Migliorano la testabilità separando le configurazioni dal comportamento effettivo della classe.



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