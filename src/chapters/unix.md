---
title: UNIX
layout: chapter.njk
---
## Introduzione a Unix
Unix è un sistema operativo potente e versatile, utilizzato prevalentemente nei server e nei sistemi avanzati. Sviluppato originariamente negli anni '70, Unix ha influenzato molti altri sistemi operativi, inclusi Linux e macOS. Unix è noto per la sua stabilità, sicurezza e un ambiente di sviluppo robusto.

## Caratteristiche Principali
### Multiutente
Unix supporta più utenti contemporaneamente, permettendo l'accesso simultaneo e la condivisione delle risorse del sistema senza interferenze tra gli utenti.

### Multitasking
Unix può eseguire più processi contemporaneamente, permettendo di gestire numerose operazioni e applicazioni allo stesso tempo.

### Sicurezza
Unix offre un sistema di permessi robusto che protegge i file e le risorse del sistema da accessi non autorizzati.

### Portabilità
Unix è altamente portabile, permettendo di essere eseguito su una vasta gamma di hardware, dai microcomputer ai supercomputer.

## Shell di Unix
La shell è un'interfaccia a riga di comando che permette agli utenti di interagire con il sistema operativo. Alcune delle shell più comuni includono:
- **Bash (Bourne Again Shell)**
- **Zsh (Z Shell)**
- **Ksh (Korn Shell)**
- **Tcsh (TENEX C Shell)**
## Componenti di un Sistema Unix
Un sistema Unix è composto da varie componenti essenziali, ognuna delle quali svolge un ruolo cruciale nel funzionamento del sistema. Di seguito, esploreremo ciascuna di queste componenti in dettaglio.

### Bootloader
Il bootloader è il processo che entra in esecuzione ogni volta che il dispositivo viene acceso e si preoccupa di effettuare tutte le azioni necessarie per avviare il sistema operativo. Se sul PC sono installati due sistemi operativi, il bootloader permette di scegliere tra i due. 

### Kernel
Il kernel è il cuore pulsante del sistema Unix. Esso consente ai processi in esecuzione di accedere in modo sicuro e controllato all'hardware. Le applicazioni interagiscono con il kernel per funzionare, ottenendo l'accesso alle risorse hardware come il processore, la memoria e i dispositivi di input/output.

### Shell
La shell, detta anche linea di comando, è l'interfaccia utente più esterna del sistema. Permette agli utenti di interagire con il kernel tramite comandi testuali. Esistono diverse shell, tra cui Bash, Zsh, e Tcsh, ognuna con le proprie caratteristiche e funzionalità.

### Daemons
I daemons sono processi che girano in background, non sotto il controllo diretto dell'utente, e vengono attivati al verificarsi di determinati eventi. Solitamente vengono eseguiti a partire dall'avvio del sistema per attivare servizi essenziali come scheduling, gestione del suono e altri servizi di sistema.

### Server Grafico
Il server grafico è responsabile della visualizzazione dell'interfaccia grafica sul monitor. Disegna il desktop e gestisce le finestre delle applicazioni. In Unix, il server grafico più comune è il Server X.

### Desktop Environment
Il desktop environment gestisce il tema e rende l'interfaccia grafica accattivante. Sebbene l'uso della linea di comando sia una caratteristica affascinante di Unix, l'interfaccia grafica ha reso Unix popolare anche tra gli utenti meno esperti. Alcuni dei desktop environment più diffusi includono KDE, GNOME, Cinnamon, e MATE.

## Comandi di Base di Unix
### Navigazione del File System
- **pwd (Print Working Directory)**: Mostra la directory corrente.
  `shell
  pwd
  `

- **ls (List)**: Elenca i file e le directory.
  `shell
  ls
  `

- **cd (Change Directory)**: Cambia la directory corrente.
  `shell
  cd /percorso/della/directory
  `

### Gestione dei File
- **touch**: Crea un nuovo file vuoto.
  `shell
  touch nomefile.txt
  `

- **cp (Copy)**: Copia file o directory.
  `shell
  cp origine.txt destinazione.txt
  `

- **mv (Move)**: Sposta o rinomina file o directory.
  `shell
  mv vecchionome.txt nuovonome.txt
  `

- **rm (Remove)**: Rimuove file o directory.
  `shell
  rm nomefile.txt
  `

- **mkdir (Make Directory)**: Crea una nuova directory.
  `shell
  mkdir nuovadirectory
  `

- **rmdir (Remove Directory)**: Rimuove una directory vuota.
  `shell
  rmdir nomedirectory
  `

### Visualizzazione e Modifica dei File
- **cat (Concatenate)**: Visualizza il contenuto di un file.
  `shell
  cat nomefile.txt
  `

- **less**: Visualizza il contenuto di un file una pagina alla volta.
  `shell
  less nomefile.txt
  `

- **head**: Mostra le prime righe di un file.
  `shell
  head nomefile.txt
  `

- **tail**: Mostra le ultime righe di un file.
  `shell
  tail nomefile.txt
  `

- **nano**: Un editor di testo semplice per la modifica dei file.
  `shell
  nano nomefile.txt
  `

- **vi/vim**: Un potente editor di testo per la modifica avanzata dei file.
  `shell
  vi nomefile.txt
  `

### Gestione dei Processi
- **ps (Process Status)**: Mostra una lista dei processi attualmente in esecuzione.
  `shell
  ps
  `

- **top**: Mostra i processi attualmente in esecuzione in tempo reale.
  `shell
  top
  `

- **kill**: Termina un processo specifico.
  `shell
  kill PID
  `

- **killall**: Termina tutti i processi con un dato nome.
  `shell
  killall nomeprocesso
  `

### Permessi dei File
- **chmod (Change Mode)**: Modifica i permessi dei file o delle directory.
  `shell
  chmod 755 nomefile.txt
  `

- **chown (Change Owner)**: Modifica il proprietario di un file o di una directory.
  `shell
  chown utente:gruppo nomefile.txt
  `

- **chgrp (Change Group)**: Modifica il gruppo proprietario di un file o di una directory.
  `shell
  chgrp gruppo nomefile.txt
  `

### Networking
- **ping**: Verifica la connettività di rete con un host.
  `shell
  ping www.google.com
  `

- **ifconfig**: Configura le interfacce di rete.
  `shell
  ifconfig
  `

- **netstat**: Mostra le connessioni di rete, le tabelle di routing e altro.
  `shell
  netstat
  `

### Shell Scripting
I shell script sono file che contengono una serie di comandi che possono essere eseguiti in sequenza. Sono utili per automatizzare compiti ripetitivi.

`shell
#!/bin/bash
echo "Ciao, mondo!"
`

### Esecuzione di uno Script
Rendi lo script eseguibile e poi eseguilo.

`shell
chmod +x script.sh
./script.sh
`

## Strumenti e Utilità di Unix
### Cron
Cron è un demone che permette di eseguire comandi o script a intervalli di tempo regolari.

### SSH (Secure Shell)
SSH è un protocollo per la connessione sicura a macchine remote.

### Tar
Tar è un'utilità per archiviare file e directory.

### Grep
Grep è un comando per cercare stringhe all'interno di file.
