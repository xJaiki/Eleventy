---
title: FONDAMENTI DEL TESTING
layout: chapter.njk
---

## Fondamenti del Testing

### Definizione dei Termini
- **Test**: Il test nel contesto dello sviluppo software è il processo di verifica e validazione di un'applicazione o di un sistema, volto a garantire che il software funzioni come previsto. Questo processo include l'esecuzione di un software con l'intento di individuare bug, errori o difetti.
- **Tester**: Un tester è una persona che esegue i test su un software per garantire la qualità del prodotto. Il suo ruolo è identificare difetti che possano influenzare l'esperienza dell'utente finale, concentrandosi su vari scenari e casi limite che potrebbero non essere stati considerati durante lo sviluppo.
- **Testing**: Il testing è l'insieme di tutte le attività coinvolte nel rilevamento dei difetti in un software, dalla pianificazione dei casi di test, alla loro esecuzione, fino alla documentazione dei risultati e alla segnalazione dei problemi.

### Obiettivo del Testing
L'obiettivo principale del testing è assicurarsi che il software soddisfi i requisiti definiti e sia privo di difetti prima di essere consegnato all'utente finale. Il testing cerca di scoprire bug o errori nel sistema e di garantire che l'utente finale non incontri problemi. Avere un processo di testing robusto è essenziale per evitare che il software malfunzionante causi problemi, perdite di dati o insoddisfazione degli utenti.

---

## Tipi di Test

### Unit Test
Il **unit testing** si concentra su singole parti del software, come funzioni o metodi, e verifica che ogni unità funzioni correttamente in isolamento. Questi test sono spesso automatizzati e vengono eseguiti dagli sviluppatori durante la fase di sviluppo del codice. L'obiettivo è garantire che ogni unità del sistema faccia esattamente ciò che è stato progettato per fare.

### Component Testing
Il **component testing** riguarda la verifica di singoli componenti del software, ma a un livello più alto rispetto al unit testing. Un componente potrebbe essere un modulo o una classe, e il test verifica che il componente, inteso come parte di un sistema più grande, funzioni come previsto, interagendo correttamente con i suoi sottosistemi o dipendenze.

### System Integration Testing
Il **system integration testing** verifica che i vari moduli o componenti di un sistema funzionino correttamente insieme. Spesso, un sistema software è costituito da più parti che devono essere integrate e comunicate correttamente per garantire il funzionamento complessivo del sistema. Questo tipo di test è essenziale per assicurarsi che, una volta integrate, le parti individualmente testate funzionino correttamente come un tutto.

### End-to-End Testing (E2E)
L'**End-to-End testing** simula l'esperienza utente completa di un'applicazione, verificando che tutte le funzionalità del sistema funzionino come previsto dall'inizio alla fine. Questo tipo di test copre tutte le fasi operative di un'applicazione, dall'interfaccia utente fino al database e ai servizi di backend. Si simula l'intero flusso operativo del software, assicurando che le integrazioni e le funzionalità principali siano correttamente implementate.

### User Acceptance Testing (UAT)
L'**User Acceptance Testing** è l'ultima fase di test prima che il software venga rilasciato agli utenti finali. Questo test viene eseguito dagli utenti stessi o dai rappresentanti del cliente per verificare se il software soddisfa i requisiti specificati. Il test si concentra sulle funzionalità pratiche e sull'esperienza dell'utente, ed è essenziale per assicurarsi che il software risponda alle aspettative dell'utente reale.

### Regression Testing
Il **Regression Testing** è eseguito per garantire che le funzionalità esistenti di un sistema continuino a funzionare correttamente dopo che sono state introdotte modifiche al software, come correzioni di bug o l'aggiunta di nuove funzionalità. L'obiettivo è verificare che le nuove modifiche non abbiano introdotto nuovi bug o rotto funzionalità precedenti.

### Smoke Testing
Lo **Smoke Testing** è un tipo di test rapido e iniziale eseguito su una build software per verificare se le funzionalità principali funzionano. È un test superficiale ma cruciale per determinare se una build è stabile abbastanza da permettere test più approfonditi.

### Sanity Testing
Il **Sanity Testing** è un test rapido e mirato per verificare se una piccola parte del software funziona correttamente dopo una modifica o una correzione di bug. Viene eseguito per evitare di perdere tempo a testare funzionalità più complesse se un difetto fondamentale è ancora presente.

---

## Strategie di Test

### Functional Testing
Il **Functional Testing** si concentra sulla verifica che il software risponda correttamente ai requisiti funzionali specificati. Si basa sui casi d'uso e sui requisiti del sistema e verifica che ogni funzionalità faccia ciò che è stato definito. Ad esempio, se un requisito richiede che un utente possa registrarsi al sistema, un test funzionale verificherà che il processo di registrazione funzioni correttamente.

### Non-Functional Testing
Il **Non-Functional Testing** si concentra su aspetti del software che non riguardano direttamente la funzionalità, ma altri attributi come le prestazioni, la scalabilità, la sicurezza, e l'usabilità. Questi test assicurano che il sistema non solo funzioni correttamente, ma sia anche efficiente, sicuro e user-friendly.

### Manual Testing
Il **Manual Testing** comporta l'esecuzione di test manualmente, senza l'uso di strumenti di automazione. I tester eseguono scenari di test specifici, verificando le funzionalità del sistema come farebbe un utente finale. Sebbene più lento rispetto ai test automatizzati, il manual testing è cruciale per esplorare nuove aree o scenari complessi che richiedono giudizio umano.

### Automated Testing
Il **Automated Testing** utilizza script e strumenti per eseguire test su funzionalità software in modo automatico. I test automatici sono particolarmente utili per scenari ripetitivi e per la verifica di grandi volumi di dati, riducendo il tempo necessario per eseguire test manuali.

---

## Exit and Entry Criteria

### Entry Criteria
Gli **Entry Criteria** definiscono le condizioni che devono essere soddisfatte prima di iniziare un test. Ad esempio, il test può iniziare solo se tutti i requisiti sono stati documentati, se l'ambiente di test è stato configurato correttamente e se la build è stabile.

### Exit Criteria
Gli **Exit Criteria** definiscono le condizioni che devono essere soddisfatte per considerare il test completo. Ad esempio, il test può considerarsi completo quando tutti i casi di test sono stati eseguiti, una certa percentuale di successo è stata raggiunta, e tutti i bug critici sono stati risolti.

---

## Approcci di Testing (Box)

### White Box Testing
Il **White Box Testing** richiede la conoscenza del codice sorgente del sistema. Il tester verifica non solo la funzionalità del sistema, ma anche la struttura interna del codice, assicurandosi che le funzioni siano implementate correttamente. Questo tipo di test è utile per verificare l'efficienza e l'accuratezza delle singole unità di codice.

### Black Box Testing
Nel **Black Box Testing**, il tester non ha accesso al codice sorgente e si concentra esclusivamente sull'output rispetto agli input forniti. Si basa sui requisiti funzionali del sistema e verifica che le funzionalità visibili all'utente finale funzionino correttamente.

### Grey Box Testing
Il **Grey Box Testing** è una combinazione di Black e White Box Testing, in cui il tester ha una conoscenza limitata del sistema e utilizza una combinazione di test basati sui requisiti e una certa conoscenza della struttura interna del sistema.

---

## Alpha e Beta Testing

### Alpha Testing
L'**Alpha Testing** viene eseguito internamente all'azienda che sviluppa il software, solitamente dai dipendenti stessi. Si tratta di un test condotto in un ambiente controllato per identificare bug o problemi nel software prima che venga rilasciato al pubblico.

### Beta Testing
Il **Beta Testing** viene eseguito da un gruppo di utenti reali o selezionati prima del rilascio ufficiale del software. L'obiettivo è ottenere feedback sul funzionamento del software in condizioni reali, correggendo eventuali bug o migliorando l'esperienza utente in base ai suggerimenti ricevuti.

---
## I 7 Principi del Testing (continua)

2. **Il testing esaustivo è impossibile.** Testare tutte le combinazioni possibili di input, output, e percorsi nel software è praticamente impossibile, soprattutto per i sistemi complessi. Per questo motivo, il testing deve essere mirato a coprire le aree più critiche e a rischio del software.

3. **Il testing precoce è essenziale.** Prima si inizia a testare, meglio è. Identificare difetti nelle prime fasi del ciclo di sviluppo è più economico e meno rischioso rispetto a scoprirli nelle fasi avanzate. Coinvolgere i tester nelle fasi di analisi dei requisiti e design può aiutare a prevenire difetti anziché scoprirli solo dopo la loro introduzione nel codice.

4. **I difetti tendono a raggrupparsi.** È un fenomeno comune che un piccolo numero di moduli o funzioni nel software contenga la maggior parte dei difetti rilevati. Questo principio, noto come "accumulo dei difetti", suggerisce che il testing dovrebbe essere concentrato maggiormente su queste aree ad alto rischio.

5. **Il paradosso del pesticida.** Se si eseguono ripetutamente gli stessi test, questi perdono efficacia nel trovare nuovi difetti. Per affrontare questo paradosso, i casi di test devono essere regolarmente rivisti e aggiornati, e nuovi test devono essere sviluppati per esplorare nuove aree del software.

6. **Il testing dipende dal contesto.** Non esiste un approccio unico al testing che vada bene per tutte le situazioni. La strategia di testing deve essere adattata al tipo di software, agli obiettivi del progetto e al contesto specifico. Ad esempio, un'applicazione critica per la sicurezza richiederà test molto più approfonditi rispetto a una semplice app di intrattenimento.

7. **L'assenza di errori non implica un prodotto utile.** Anche se il software è privo di difetti tecnici, ciò non significa necessariamente che sia utilizzabile o utile. Un software deve soddisfare le esigenze degli utenti e risolvere il problema per cui è stato progettato. Il testing deve quindi concentrarsi non solo sull'identificazione di bug, ma anche sulla verifica che il prodotto soddisfi le aspettative degli utenti.

---

## Strumenti di Gestione e Collaboration

### Jira
**Jira** è uno strumento utilizzato principalmente per la gestione dei progetti Agile e per il tracciamento dei bug. Permette ai team di sviluppo di tenere traccia delle attività, dei difetti e delle storie utente in modo organizzato e collaborativo. Jira consente di creare backlog, pianificare sprint e visualizzare lo stato di avanzamento del lavoro tramite board Kanban o Scrum.

### TestRail
**TestRail** è una piattaforma di gestione dei casi di test. Consente ai team di documentare e organizzare i casi di test, eseguire suite di test e monitorare l'esecuzione dei test. Inoltre, TestRail permette di tracciare i risultati e di generare report dettagliati sull'efficacia e la copertura dei test.

---

## Metodologie di Sviluppo Software

### Agile
**Agile** è una metodologia di sviluppo software che promuove la consegna iterativa e incrementale del prodotto. Si concentra sulla collaborazione tra team interfunzionali, sulla risposta rapida ai cambiamenti e sul miglioramento continuo. Agile utilizza cicli di lavoro brevi chiamati **sprint**, durante i quali si sviluppano piccole porzioni del software che possono essere rilasciate frequentemente.

### Scrum
**Scrum** è un framework Agile che suddivide il lavoro in sprint. All'inizio di ogni sprint, il team pianifica quali attività dovranno essere completate, e alla fine dello sprint si consegna un incremento funzionante del prodotto. Scrum prevede ruoli definiti come il **Product Owner**, il **Scrum Master**, e il **Development Team**, che lavorano insieme per raggiungere gli obiettivi del progetto.

### Waterfall
**Waterfall** è un modello di sviluppo software sequenziale in cui ogni fase del progetto (come requisiti, design, implementazione, testing, e manutenzione) deve essere completata prima che la successiva possa iniziare. Questo approccio è più rigido rispetto ad Agile ed è più adatto a progetti con requisiti ben definiti e stabili.

---

## Criteri di un Test Ben Scritto

### Chiarezza
Un buon caso di test deve essere scritto in modo semplice e comprensibile, utilizzando un linguaggio privo di ambiguità. Ogni passo del test deve essere chiaro per chiunque lo esegua, anche se non è l'autore del caso di test.

### Ripetibilità
Il test deve poter essere eseguito più volte, producendo sempre lo stesso risultato. Questo è fondamentale per assicurarsi che il comportamento del software sia coerente e stabile nel tempo.

### Completezza
Un caso di test deve coprire uno scenario specifico e verificare ogni possibile combinazione di input e condizioni per quel particolare scenario. Deve essere abbastanza completo da non lasciare spazio a incertezze sull'esito del test.

### Tracciabilità
Ogni caso di test deve essere collegato ai requisiti che è destinato a verificare. Questo permette di garantire che tutti i requisiti del sistema siano coperti dai test e che eventuali modifiche ai requisiti siano riflessi nei casi di test.

### Step di Esecuzione
Le istruzioni su come eseguire il test devono essere precise e dettagliate. Ogni passo deve descrivere chiaramente cosa fare, quali dati inserire e quali risultati aspettarsi.

---

## Testing Automation e Framework

### Selenium
**Selenium** è uno dei framework più popolari per l'automazione dei test delle applicazioni web. Supporta diversi linguaggi di programmazione (come Java, Python, C#) e permette di simulare l'interazione dell'utente con l'interfaccia web, eseguendo test funzionali e di regressione.

### JUnit/TestNG
**JUnit** e **TestNG** sono framework di testing per applicazioni Java. Questi strumenti permettono di scrivere test unitari e di integrare i test nel processo di sviluppo. Supportano l'esecuzione automatizzata dei test e forniscono funzionalità come l'annotazione di test, l'organizzazione delle suite di test e la generazione di report.

### Cypress
**Cypress** è un framework moderno per l'automazione dei test end-to-end di applicazioni web. È facile da configurare e fornisce un'esperienza integrata per il testing di applicazioni front-end, rendendo possibile l'esecuzione di test funzionali, di integrazione e di regressione.

---

## Gestione dei Difetti (Bug Management)

### Severity e Priority
- **Severity**: Indica la gravità di un difetto in termini di impatto sul sistema. Ad esempio, un crash dell'applicazione potrebbe essere considerato di severità alta, mentre un errore minore nel layout dell'interfaccia utente potrebbe essere considerato di severità bassa.
- **Priority**: Rappresenta l'urgenza con cui il difetto deve essere risolto. Un bug critico potrebbe avere priorità alta, richiedendo una correzione immediata, mentre un difetto meno grave potrebbe essere risolto in una fase successiva.

### Ciclo di Vita di un Bug
Il **ciclo di vita di un bug** rappresenta tutte le fasi che un difetto attraversa, dal momento in cui viene rilevato fino alla sua chiusura. Le fasi principali includono:
- **Nuovo**: Il bug viene segnalato.
- **Assegnato**: Il bug viene assegnato a uno sviluppatore per essere risolto.
- **In Correzione**: Lo sviluppatore sta lavorando alla risoluzione del bug.
- **Risolto**: Il bug è stato corretto, ma non ancora verificato.
- **Chiuso**: Il bug è stato verificato e risolto correttamente.
- **Riaperto**: Se il bug non è stato risolto correttamente, viene riaperto per ulteriori correzioni.

---

## Metriche di Testing

### Test Coverage
**Test Coverage** misura la percentuale di codice coperta dai test. È un'indicazione di quanto del software sia stato testato e può includere la copertura delle linee di codice, dei rami decisionali e dei percorsi logici.

### Defect Density
**Defect Density** calcola il numero di difetti presenti per modulo o linea di codice. È una metrica utile per identificare le aree del software che presentano più problemi e richiedono attenzione.

### Test Pass Rate
Il **Test Pass Rate** rappresenta la percentuale di casi di test che sono stati eseguiti con successo rispetto al totale. Un alto tasso di passaggio indica che la maggior parte delle funzionalità testate funziona come previsto.

---

## Conoscenza del Dominio e Abilità Trasversali

### Comunicazione
Una delle abilità più importanti per un tester è la capacità di comunicare chiaramente e in modo efficace i problemi rilevati al team di sviluppo. Questo include la capacità di descrivere bug e difetti in modo dettagliato e comprensibile, evidenziando l'impatto del problema sul sistema.

### Attenzione ai Dettagli
Essere attenti ai dettagli è cruciale nel testing. I tester devono essere in grado di individuare piccoli difetti che potrebbero passare inosservati e di comprendere il comportamento del sistema in scenari complessi.

### Pensiero Critico
I tester devono essere capaci di pensare oltre i requisiti formali e immaginare scenari di test non convenzionali per scoprire difetti che potrebbero essere stati trascurati. Il **pensiero critico** aiuta a valutare il sistema da diverse prospettive e a identificare le aree a rischio.

---

## Gestione dei Test Case

### Scrittura di Test Case
Scrivere un test case significa descrivere in dettaglio cosa si deve testare, quali sono i passi da seguire e quali sono i risultati attesi. Un buon test case è quello che copre uno scenario specifico, è chiaro nei suoi obiettivi, e fornisce risultati prevedibili e ripetibili.

### Test Scenario
Il **Test Scenario** è una descrizione di una situazione di test reale che verifica una funzionalità specifica o un flusso dell'applicazione. È importante creare scenari che coprano una varietà di percorsi nell'applicazione, inclusi quelli che potrebbero non essere ovvi al primo sguardo.

---
