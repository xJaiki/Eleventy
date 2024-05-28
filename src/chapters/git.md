---
title: GIT
layout: chapter.njk
---
## Cos'è Git
Git è un sistema di controllo di versione distribuito utilizzato per tracciare le modifiche nel codice sorgente durante lo sviluppo del software. Permette a più sviluppatori di lavorare simultaneamente sullo stesso progetto senza conflitti e consente di mantenere una cronologia dettagliata di tutte le modifiche effettuate.

## Perché usare Git
Git offre numerosi vantaggi per lo sviluppo del software, tra cui:
- **Collaborazione**: Permette a più sviluppatori di lavorare sullo stesso progetto contemporaneamente.
- **Storico delle modifiche**: Mantiene una cronologia dettagliata di tutte le modifiche, consentendo di ripristinare versioni precedenti.
- **Branching e merging**: Supporta la creazione di rami (branches) per sviluppare nuove funzionalità isolatamente e successivamente unirli (merge) nel ramo principale.
- **Distribuzione**: Ogni sviluppatore ha una copia completa del repository, migliorando la sicurezza e l'affidabilità.

## Terminologia di Base
### Repository
Un repository (repo) è un archivio di codice sorgente gestito da Git. Può essere locale (sul computer dello sviluppatore) o remoto (su un server Git come GitHub, GitLab, Bitbucket).

### Commit
Un commit rappresenta un'istantanea del codice in un momento specifico. Contiene un messaggio descrittivo e le modifiche apportate.

### Branch
Un branch è una linea di sviluppo indipendente. Il branch principale è solitamente chiamato `master` o `main`, ma è possibile creare branch separati per lavorare su nuove funzionalità o correzioni di bug.

### Merge
Il merge è il processo di unione di un branch con un altro, integrando le modifiche apportate.

### Clone
Il clone è una copia di un repository remoto scaricato sul computer locale dello sviluppatore.

### Pull
Il pull aggiorna il repository locale con le modifiche dal repository remoto.

### Push
Il push invia le modifiche dal repository locale al repository remoto.

## Flusso di Lavoro di Base con Git
1. **Clonazione del Repository**
   - Clona il repository remoto sul tuo computer locale.
   
   ```shell
   git clone <url-del-repository>
   ```

2. **Creazione di un Branch**
   - Crea un nuovo branch per lavorare su una nuova funzionalità o correzione.
   
   ```shell
   git checkout -b nome-branch
   ```

3. **Aggiunta e Commit delle Modifiche**
   - Aggiungi le modifiche al prossimo commit e crea un commit con un messaggio descrittivo.
   
   ```shell
   git add .
   git commit -m "Descrizione delle modifiche"
   ```

4. **Push delle Modifiche**
   - Invia le modifiche al repository remoto.
   
   ```shell
   git push origin nome-branch
   ```

5. **Merge delle Modifiche**
   - Unisci le modifiche dal branch al branch principale (di solito `main` o `master`).
   
   ```shell
   git checkout main
   git merge nome-branch
   ```

6. **Aggiornamento del Repository Locale**
   - Aggiorna il repository locale con le modifiche dal repository remoto.
   
   ```shell
   git pull
   ```

## Gestione dei Conflitti
Quando più sviluppatori lavorano sullo stesso file, possono verificarsi conflitti. Git notifica i conflitti durante il merge, e questi devono essere risolti manualmente.

### Risoluzione dei Conflitti
1. **Identificazione dei Conflitti**
   - Git segnala i conflitti nei file con indicatori speciali.

2. **Risoluzione dei Conflitti**
   - Modifica manualmente i file per risolvere i conflitti.
   
   ```shell
   git add file-conflitto-risolto
   git commit -m "Risolto il conflitto nel file X"
   ```

## Strumenti e Piattaforme di Git
### GitHub
GitHub è una piattaforma di hosting per repository Git. Offre strumenti per la collaborazione, il code review e l'integrazione continua (CI/CD).

### GitLab
GitLab è una piattaforma DevOps completa che fornisce repository Git, gestione dei progetti, integrazione continua e molto altro.

### Bitbucket
Bitbucket è una piattaforma di hosting per repository Git con un forte focus sull'integrazione con altri strumenti di sviluppo Atlassian, come Jira.

## Comandi Utili
- **git status**: Mostra lo stato del repository.
- **git log**: Mostra la cronologia dei commit.
- **git branch**: Elenca i branch esistenti.
- **git checkout**: Passa a un altro branch o ripristina file specifici.
- **git fetch**: Recupera le modifiche dal repository remoto senza unirle.
- **git rebase**: Riapplica i commit da un branch su un altro.
