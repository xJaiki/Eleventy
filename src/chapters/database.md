---
title: DATABASE
layout: chapter.njk
---
## Cos'è un Database
Un database è una raccolta di dati correlati organizzati in modo strutturato, solitamente in tabelle composte da righe e colonne. Ogni riga rappresenta un record, mentre ogni colonna rappresenta un campo del record. I database sono essenziali per archiviare, gestire e recuperare grandi quantità di dati in modo efficiente.

## A cosa serve un Database
I database sono utilizzati per:
- Memorizzare dati su clienti, prodotti, dipendenti, ecc.
- Tracciare transazioni finanziarie
- Gestire le scorte
- Ricercare informazioni
- Supportare applicazioni aziendali e web

## Tipi di Database
Esistono diversi tipi di database, ciascuno con le proprie caratteristiche e casi d'uso.

### Database Relazionali (RDBMS)
I database relazionali organizzano i dati in tabelle bidimensionali con righe e colonne. Utilizzano SQL (Structured Query Language) per la gestione e l'interrogazione dei dati.

### Database NoSQL
I database NoSQL non utilizzano schemi fissi e sono progettati per gestire grandi volumi di dati non strutturati o semi-strutturati. Esistono vari tipi di database NoSQL:
- **Document Store**: Memorizzano dati come documenti JSON (es. MongoDB).
- **Key-Value Store**: Memorizzano dati come coppie chiave-valore (es. Redis).
- **Column Store**: Memorizzano dati in colonne anziché in righe (es. Apache Cassandra).
- **Graph Database**: Memorizzano dati come nodi e relazioni (es. Neo4j).

### Database ad Oggetti
I database ad oggetti memorizzano i dati sotto forma di oggetti, simili a come sono rappresentati nella programmazione orientata agli oggetti.

### Database Gerarchici
I database gerarchici organizzano i dati in una struttura ad albero, con record genitore-figlio.

### Database Reticolati
I database reticolati sono simili ai database gerarchici, ma i record possono avere più genitori, formando una struttura a rete.

## DBMS (Database Management System)
Un DBMS è un software che consente agli utenti di creare, modificare, archiviare, recuperare e cancellare dati da un database. Offre un'interfaccia per l'interazione con il database e gestisce l'accesso concorrente, la sicurezza e l'integrità dei dati.

### Funzionalità di un DBMS
- **Indipendenza dei Dati**: Consente l'accesso ai dati tramite uno schema logico, indipendentemente dalla loro rappresentazione fisica.
- **Condivisione e Integrazione**: Permette la condivisione e l'integrazione dei dati tra diverse applicazioni.
- **Controllo dell'Accesso Concorrente**: Gestisce l'accesso simultaneo ai dati da parte di più utenti.
- **Sicurezza dei Dati**: Protegge i dati da accessi non autorizzati.
- **Integrità dei Dati**: Mantiene la correttezza e la coerenza dei dati.

### Tipi di DBMS
- **RDBMS (Relational DBMS)**: Utilizza il modello relazionale (es. MySQL, PostgreSQL, Oracle).
- **NoSQL DBMS**: Utilizza vari modelli di dati (es. MongoDB, CouchDB, Redis).
- **ODBMS (Object DBMS)**: Utilizza il modello a oggetti (es. db4o, ObjectDB).

## Schema del Database
Lo schema di un database definisce la struttura e l'organizzazione dei dati, inclusi tabelle, campi, relazioni e vincoli. Lo schema può essere modificato utilizzando comandi DDL (Data Definition Language) come `CREATE`, `ALTER` e `DROP`.

## Normalizzazione
La normalizzazione è il processo di organizzazione dei dati in un database per ridurre la ridondanza e migliorare l'integrità dei dati. Esistono diverse forme normali (1NF, 2NF, 3NF, BCNF) che definiscono livelli di normalizzazione sempre più rigorosi.

### Vantaggi della Normalizzazione
- Riduzione della ridondanza dei dati
- Miglioramento dell'integrità dei dati
- Facilitazione della manutenzione del database

## Denormalizzazione
La denormalizzazione è il processo inverso della normalizzazione e comporta l'aggiunta di ridondanza ai dati per migliorare le prestazioni di alcune query.

### Vantaggi della Denormalizzazione
- Miglioramento delle prestazioni delle query
- Riduzione del numero di join complessi

## ACID
ACID è un insieme di proprietà che garantiscono l'affidabilità delle transazioni del database:
- **Atomicità**: Le transazioni sono tutto o niente.
- **Consistenza**: Le transazioni portano il database da uno stato valido a un altro stato valido.
- **Isolamento**: Le transazioni concorrenti non interferiscono tra loro.
- **Durabilità**: Una volta confermata, una transazione è permanente.

## Backup e Ripristino
Il backup è il processo di copia dei dati del database per proteggerli da perdita o corruzione. Il ripristino è il processo di ripristino dei dati da un backup.

## Sicurezza del Database
La sicurezza del database protegge i dati da accessi non autorizzati. Include tecniche come l'autenticazione degli utenti, il controllo degli accessi e la crittografia dei dati.

## Indici
Gli indici migliorano le prestazioni delle query consentendo un accesso più rapido ai dati. Tuttavia, possono aumentare il tempo di inserimento e aggiornamento dei dati.

## Transazioni
Una transazione è una sequenza di operazioni eseguite come un'unica unità logica di lavoro. Le transazioni devono rispettare le proprietà ACID per garantire l'affidabilità dei dati.

## Trigger
I trigger sono procedure memorizzate che vengono eseguite automaticamente in risposta a determinati eventi sul database, come l'inserimento, l'aggiornamento o l'eliminazione di dati.

## Stored Procedure
Le stored procedure sono insiemi di istruzioni SQL precompilate memorizzate nel database che possono essere eseguite per eseguire operazioni complesse e ripetitive.

## Viste
Le viste sono tabelle virtuali basate sul risultato di una query SQL. Le viste possono semplificare la complessità delle query e migliorare la sicurezza limitando l'accesso ai dati.
