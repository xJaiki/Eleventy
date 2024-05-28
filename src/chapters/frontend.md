---
title: MYSQL
layout: chapter.njk
---

## Introduzione a MySQL
MySQL è un sistema di gestione di database relazionale (RDBMS) open-source molto utilizzato per la gestione di grandi quantità di dati in applicazioni web. È noto per le sue prestazioni, affidabilità e facilità d'uso.

## Installazione di MySQL
Per installare MySQL, puoi seguire le istruzioni specifiche per il tuo sistema operativo:

### Windows
1. Scarica l'installer dal sito ufficiale di MySQL.
2. Esegui l'installer e segui le istruzioni per completare l'installazione.
3. Configura le opzioni di installazione, inclusi il tipo di server, la porta, e l'utente root.

### macOS
1. Scarica il pacchetto dmg dal sito ufficiale di MySQL.
2. Esegui il file dmg e segui le istruzioni per l'installazione.
3. Configura il server MySQL utilizzando MySQL Workbench o il terminale.

### Linux
1. Utilizza il gestore di pacchetti del tuo sistema (es. `apt` per Debian/Ubuntu, `yum` per CentOS/Fedora).
2. Esegui i comandi appropriati per installare MySQL, ad esempio:
   ```shell
   sudo apt-get update
   sudo apt-get install mysql-server
   ```
3. Configura MySQL utilizzando il comando `mysql_secure_installation`.

## Concetti di Base
### Database
Un database è una raccolta di dati organizzati. In MySQL, puoi creare un database utilizzando il comando `CREATE DATABASE`.

```sql
CREATE DATABASE nome_database;
```

### Tabelle
Le tabelle sono strutture all'interno di un database che memorizzano i dati. Puoi creare una tabella utilizzando il comando `CREATE TABLE`.

```sql
CREATE TABLE studenti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cognome VARCHAR(255) NOT NULL,
    eta INT
);
```

### Tipi di Dati
MySQL supporta vari tipi di dati, tra cui:
- **INT**: Numeri interi
- **VARCHAR**: Stringhe di caratteri di lunghezza variabile
- **DATE**: Date
- **FLOAT**: Numeri in virgola mobile

### Inserimento di Dati
Puoi inserire dati in una tabella utilizzando il comando `INSERT INTO`.

```sql
INSERT INTO studenti (nome, cognome, eta) VALUES ('Mario', 'Rossi', 20);
```

### Lettura di Dati
Puoi leggere i dati da una tabella utilizzando il comando `SELECT`.

```sql
SELECT * FROM studenti;
```

### Aggiornamento di Dati
Puoi aggiornare i dati in una tabella utilizzando il comando `UPDATE`.

```sql
UPDATE studenti SET eta = 21 WHERE id = 1;
```

### Cancellazione di Dati
Puoi cancellare i dati da una tabella utilizzando il comando `DELETE`.

```sql
DELETE FROM studenti WHERE id = 1;
```

## Comandi Avanzati
### JOIN
I comandi `JOIN` sono utilizzati per combinare righe da due o più tabelle basate su una relazione tra di esse.

```sql
SELECT studenti.nome, corsi.nome_corso
FROM studenti
JOIN iscrizioni ON studenti.id = iscrizioni.studente_id
JOIN corsi ON iscrizioni.corso_id = corsi.id;
```

### Indici
Gli indici migliorano le prestazioni delle query. Puoi creare un indice utilizzando il comando `CREATE INDEX`.

```sql
CREATE INDEX idx_nome ON studenti(nome);
```

### Viste
Le viste sono tabelle virtuali basate sul risultato di una query SQL.

```sql
CREATE VIEW vista_studenti AS
SELECT nome, cognome, eta FROM studenti;
```

### Stored Procedure
Le stored procedure sono insiemi di istruzioni SQL precompilate che possono essere eseguite come un singolo comando.

```sql
DELIMITER //
CREATE PROCEDURE aggiungi_studente (IN nome VARCHAR(255), IN cognome VARCHAR(255), IN eta INT)
BEGIN
    INSERT INTO studenti (nome, cognome, eta) VALUES (nome, cognome, eta);
END //
DELIMITER ;
```

### Trigger
I trigger sono procedure memorizzate che vengono eseguite automaticamente in risposta a determinati eventi sul database.

```sql
CREATE TRIGGER before_studenti_insert
BEFORE INSERT ON studenti
FOR EACH ROW
BEGIN
    SET NEW.eta = IF(NEW.eta < 18, 18, NEW.eta);
END;
```

## Backup e Ripristino
### Backup
Puoi eseguire il backup di un database utilizzando il comando `mysqldump`.

```shell
mysqldump -u root -p nome_database > backup.sql
```

### Ripristino
Puoi ripristinare un database da un file di backup utilizzando il comando `mysql`.

```shell
mysql -u root -p nome_database < backup.sql
```

## Sicurezza
### Autenticazione e Autorizzazione
MySQL utilizza un sistema di utenti e privilegi per controllare l'accesso al database.

### Crittografia
Puoi abilitare la crittografia delle connessioni utilizzando SSL/TLS.

## Ottimizzazione
### Query Optimization
Utilizza indici e analizza le query per migliorarne le prestazioni.

### Cache
MySQL supporta diverse tecniche di caching per migliorare le prestazioni.