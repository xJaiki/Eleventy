---
title: DOCKER
layout: chapter.njk
---
## Introduzione a Docker
Docker è una piattaforma di containerizzazione open-source che automatizza il deployment di applicazioni all'interno di container leggeri e portabili. Docker permette agli sviluppatori di creare, distribuire ed eseguire applicazioni in ambienti isolati, garantendo che funzionino in modo coerente su qualsiasi sistema.

## Concetti Fondamentali di Docker
### Container
Un container è un'istanza leggera e portabile di un ambiente di runtime che include l'applicazione e tutte le sue dipendenze. I container condividono il kernel del sistema operativo, ma sono isolati l'uno dall'altro.

### Immagine
Un'immagine Docker è un pacchetto immutabile che contiene tutto il necessario per eseguire un'applicazione, inclusi il codice dell'applicazione, le librerie, le dipendenze e il sistema operativo di base. Le immagini sono la base per la creazione dei container.

### Dockerfile
Un Dockerfile è un file di testo con una serie di istruzioni che Docker utilizza per costruire un'immagine. Esso specifica il sistema operativo di base, le dipendenze, i file da includere e i comandi da eseguire.

### Registri
I registri sono repository dove le immagini Docker possono essere memorizzate e distribuite. Docker Hub è il registro pubblico più popolare, ma esistono anche registri privati come Amazon ECR, Google Container Registry e altri.

## Installazione di Docker
### Windows e macOS
1. Scarica Docker Desktop dal sito ufficiale di Docker.
2. Esegui il file di installazione e segui le istruzioni.
3. Dopo l'installazione, Docker sarà disponibile tramite l'interfaccia grafica e la linea di comando.

### Linux
1. Aggiorna il gestore di pacchetti:
   ```shell
   sudo apt-get update
   ```
2. Installa i pacchetti necessari:
   ```shell
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   ```
3. Aggiungi il repository Docker GPG:
   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```
4. Aggiungi il repository Docker APT:
   ```shell
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```
5. Installa Docker:
   ```shell
   sudo apt-get update
   sudo apt-get install docker-ce
   ```
6. Verifica l'installazione:
   ```shell
   sudo docker --version
   ```

## Comandi di Base di Docker
### Esecuzione di un Container
Il comando `docker run` crea e avvia un nuovo container.
   ```shell
   docker run hello-world
   ```

### Elenco dei Container
Il comando `docker ps` mostra i container in esecuzione.
   ```shell
   docker ps
   ```
   Il comando `docker ps -a` mostra tutti i container, inclusi quelli fermati.
   ```shell
   docker ps -a
   ```

### Gestione delle Immagini
- **Elenco delle Immagini**: Il comando `docker images` elenca tutte le immagini disponibili localmente.
  ```shell
  docker images
  ```
- **Rimozione di un'Immagine**: Il comando `docker rmi` rimuove un'immagine.
  ```shell
  docker rmi nome-immagine
  ```

### Costruzione di un'Immagine
Il comando `docker build` costruisce un'immagine da un Dockerfile.
   ```shell
   docker build -t nome-immagine .
   ```

### Gestione dei Container
- **Avvio di un Container**: Il comando `docker start` avvia un container esistente.
  ```shell
  docker start nome-container
  ```
- **Arresto di un Container**: Il comando `docker stop` arresta un container in esecuzione.
  ```shell
  docker stop nome-container
  ```
- **Rimozione di un Container**: Il comando `docker rm` rimuove un container.
  ```shell
  docker rm nome-container
  ```

## Dockerfile
### Struttura di un Dockerfile
Un Dockerfile contiene una serie di istruzioni che definiscono come costruire un'immagine Docker.

Esempio di Dockerfile:
   ```dockerfile
   # Utilizza un'immagine di base
   FROM ubuntu:latest

   # Imposta il maintainer dell'immagine
   LABEL maintainer="tuoemail@example.com"

   # Installa le dipendenze
   RUN apt-get update && apt-get install -y nginx

   # Copia i file nella directory di lavoro
   COPY . /usr/share/nginx/html

   # Espone la porta
   EXPOSE 80

   # Comando per avviare il server Nginx
   CMD ["nginx", "-g", "daemon off;"]
   ```

### Costruzione di un'Immagine da un Dockerfile
   ```shell
   docker build -t nome-immagine .
   ```

## Docker Compose
Docker Compose è uno strumento per definire ed eseguire applicazioni Docker multi-container. Utilizza un file YAML per configurare i servizi dell'applicazione.

### Installazione di Docker Compose
Docker Compose è incluso in Docker Desktop per Windows e macOS. Su Linux, può essere installato tramite pip:
   ```shell
   sudo apt-get install python3-pip
   sudo pip3 install docker-compose
   ```

### File docker-compose.yml
Esempio di file `docker-compose.yml`:
   ```yaml
   version: '3'
   services:
     web:
       image: nginx
       ports:
         - "80:80"
     database:
       image: mysql
       environment:
         MYSQL_ROOT_PASSWORD: esempio
   ```

### Utilizzo di Docker Compose
- **Avvio dei Servizi**: Il comando `docker-compose up` avvia tutti i servizi definiti nel file `docker-compose.yml`.
  ```shell
  docker-compose up
  ```
- **Arresto dei Servizi**: Il comando `docker-compose down` arresta e rimuove tutti i container, le reti e i volumi creati da `docker-compose up`.
  ```shell
  docker-compose down
  ```

## Best Practices per l'Uso di Docker
1. **Utilizzare Immagini Ufficiali e Minimali**: Utilizzare immagini ufficiali e minimali per ridurre la superficie di attacco e migliorare la sicurezza.
2. **Gestione dei Segreti**: Utilizzare strumenti come Docker Secrets per gestire le credenziali in modo sicuro.
3. **Monitoraggio e Logging**: Implementare strumenti di monitoraggio e logging per tracciare le performance e il comportamento dei container.
4. **Network Segmentation**: Utilizzare reti Docker per isolare i container e limitare l'accesso non autorizzato.
5. **Scansione delle Immagini**: Utilizzare strumenti di scansione delle immagini per rilevare vulnerabilità e garantire la sicurezza.
