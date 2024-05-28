---
title: BACK-END BASE KNOWLEDGE
layout: chapter.njk
---
## Cos'è lo Sviluppo Web?
Lo sviluppo web è il processo di creazione e manutenzione di siti web. Comprende diversi aspetti come la progettazione web, lo sviluppo lato client (front-end), lo sviluppo lato server (back-end) e la gestione dei database.

## HTML (HyperText Markup Language)
HTML è il linguaggio standard per la creazione di pagine web. Esso definisce la struttura del contenuto web attraverso una serie di elementi e tag.

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titolo della Pagina</title>
</head>
<body>
    <h1>Benvenuto nel Sito</h1>
    <p>Questo è un paragrafo di esempio.</p>
</body>
</html>
```

## CSS (Cascading Style Sheets)
CSS è utilizzato per descrivere l'aspetto e la formattazione di un documento scritto in HTML. Permette di separare il contenuto dalla presentazione.

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
}

p {
    font-size: 16px;
    line-height: 1.5;
}
```

## JavaScript
JavaScript è un linguaggio di programmazione utilizzato per creare contenuti web dinamici e interattivi. Viene eseguito sul lato client, il che significa che il codice viene eseguito direttamente nel browser dell'utente.

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('h1').textContent = 'Benvenuto nel Sito Dinamico';
});
```

## HTTP (HyperText Transfer Protocol)
HTTP è il protocollo utilizzato per trasferire dati sul web. È la base della comunicazione tra client (browser) e server. Le richieste HTTP sono di solito fatte con metodi come GET, POST, PUT e DELETE.

### Metodi HTTP
- **GET**: Richiede dati da un server (es. scaricare una pagina web).
- **POST**: Invia dati al server (es. inviare un modulo).
- **PUT**: Aggiorna dati esistenti sul server.
- **DELETE**: Elimina dati dal server.

```http
GET /index.html HTTP/1.1
Host: www.example.com

POST /form HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

name=John&age=30&city=New+York
```

## JSON (JavaScript Object Notation)
JSON è un formato di interscambio dati leggero e facile da leggere e scrivere per gli esseri umani e facile da analizzare e generare per le macchine. È spesso usato per scambiare dati tra client e server.

```json
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
```

## Backend Development
Il backend è la parte del sito web che non è visibile all'utente. Gestisce la logica dell'applicazione, l'autenticazione degli utenti, l'interazione con il database e le chiamate API. I linguaggi di programmazione comuni per il backend includono PHP, Python, Ruby, Java e Node.js.

### Database
I database sono utilizzati per memorizzare dati in modo strutturato. I tipi di database includono:
- **SQL**: Database relazionali come MySQL, PostgreSQL e SQLite.
- **NoSQL**: Database non relazionali come MongoDB e Redis.

### API (Application Programming Interface)
Le API permettono ai vari componenti del software di comunicare tra loro. Le API web usano tipicamente HTTP per le richieste e le risposte.

```api
GET /api/users HTTP/1.1
Host: api.example.com

{
    "users": [
        {"id": 1, "name": "John Doe"},
        {"id": 2, "name": "Jane Doe"}
    ]
}
```

## REST (REpresentational State Transfer)
REST è uno stile architettonico che fornisce standard tra sistemi informatici sul web, facilitando la comunicazione tra sistemi. È stateless, il che significa che il server non deve sapere in che stato si trova il client e viceversa. Ciò consente modifiche indipendenti sul lato client e server.

### Componenti di una Richiesta REST
- **Verbo HTTP**: Definisce il tipo di operazione da eseguire.
    - **GET**: Recupera una risorsa specifica.
    - **POST**: Crea una nuova risorsa.
    - **PUT**: Aggiorna una risorsa specifica.
    - **DELETE**: Rimuove una risorsa specifica.
- **Header**: Consente al client di trasmettere informazioni sulla richiesta.
- **Percorso**: Identifica la risorsa su cui deve essere eseguita l'operazione.
- **Corpo del messaggio** (opzionale): Contiene dati da inviare al server.

### Tipi di Contenuto
Nell'intestazione, il client invia il tipo di contenuto che è in grado di ricevere dal server, chiamato campo Accept. Le opzioni per i tipi di contenuto sono le MIME (Multipurpose Internet Mail Extensions).

### Percorso
Una richiesta deve contenere il percorso di una risorsa su cui deve essere eseguita l'operazione. Convenzionalmente, la prima parte del percorso deve essere la forma plurale della risorsa.

```rest
GET /customers/223/orders/12 HTTP/1.1
Host: www.example.com
Accept: application/json
```

### Risposta
Quando il server invia un carico di dati al client, deve includere un tipo di contenuto nell'intestazione della risposta. Il campo dell'intestazione `content-type` segnala al client il tipo di dati che sta inviando nel corpo della risposta.

### Codici di Risposta
Le risposte del server contengono codici di stato per avvisare il client di informazioni sul successo (o meno) dell'operazione.

- **200 (OK)**: La richiesta è stata elaborata con successo.
- **400 (BAD REQUEST)**: La richiesta non può essere elaborata a causa di una sintassi errata.
- **404 (NOT FOUND)**: La risorsa non può essere trovata in questo momento.
- **500 (INTERNAL SERVER ERROR)**: Risposta generica per un guasto inatteso.

## Differenza tra REST e SOAP
### REST
- È uno stile architetturale.
- Richiede il protocollo HTTP.
- Supporta molti formati come JSON, XML, HTML, CSV.
- Ha una documentazione facile da capire.
- È efficiente e veloce.
- Meno sicuro di SOAP.

### SOAP
- Funziona solo con XML.
- Può funzionare con protocolli HTTP, SMTP (Simple Mail Transfer Protocol) e FTP (File Transfer Protocol).
- Documentazione più complessa.
- Più lento di REST ma più sicuro.
- È indipendente dal linguaggio di programmazione.