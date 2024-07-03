---
title: MongoDB
layout: chapter.njk
---

## Cos'è MongoDB
MongoDB è un database NoSQL orientato ai documenti. Utilizza documenti simili a JSON con schemi dinamici, il che lo rende facile da usare e scalare. MongoDB è ideale per applicazioni che richiedono un'alta disponibilità e una gestione flessibile dei dati.

## Creazione di un Database

### Avvio della Shell di MongoDB
Per avviare la shell di MongoDB, usa il comando:
```bash
mongosh
```

### Creazione di un Database
In MongoDB, il database viene creato automaticamente quando inserisci il primo documento. Per esempio, per creare un database chiamato `testdb`, seleziona il database:
```javascript
use testdb
```

## Gestione dei Documenti

### Inserimento di Documenti
Inserisci un documento in una collezione chiamata `users`:
```javascript
db.users.insertOne({ name: "John Doe", age: 30, email: "johndoe@example.com" })
```

### Lettura di Documenti
Per leggere i documenti dalla collezione `users`:
```javascript
db.users.find()
```

### Aggiornamento di Documenti
Per aggiornare un documento nella collezione `users`:
```javascript
db.users.updateOne({ name: "John Doe" }, { $set: { age: 31 } })
```

### Cancellazione di Documenti
Per cancellare un documento dalla collezione `users`:
```javascript
db.users.deleteOne({ name: "John Doe" })
```

## Struttura dei Documenti
I documenti in MongoDB sono simili a JSON e possono avere strutture nidificate. Ecco un esempio di documento complesso:
```json
{
  "name": "Jane Doe",
  "age": 28,
  "email": "janedoe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY"
  },
  "hobbies": ["reading", "traveling", "swimming"]
}
```

## Indici
Gli indici migliorano le prestazioni delle query. Per creare un indice sulla colonna `email`:
```javascript
db.users.createIndex({ email: 1 })
```

## Query Avanzate
### Filtro
Per trovare tutti gli utenti con età superiore a 25:
```javascript
db.users.find({ age: { $gt: 25 } })
```

### Proiezione
Per ottenere solo i nomi e le email degli utenti:
```javascript
db.users.find({}, { name: 1, email: 1 })
```

### Ordinamento
Per ordinare gli utenti per età in ordine crescente:
```javascript
db.users.find().sort({ age: 1 })
```

## Aggregazioni
L'aggregazione permette di eseguire operazioni di calcolo sui dati. Per esempio, per ottenere l'età media degli utenti:
```javascript
db.users.aggregate([
  { $group: { _id: null, averageAge: { $avg: "💡age" } } }
])
```

## Relazioni tra Documenti
In MongoDB, le relazioni tra documenti possono essere rappresentate attraverso riferimenti o documenti nidificati.

### Documenti Nidificati
Esempio di documento con struttura nidificata:
```json
{
  "name": "John Doe",
  "contact": {
    "email": "john.doe@example.com",
    "phone": "123-456-7890"
  }
}
```

### Riferimenti
Esempio di relazione tramite riferimento:
```javascript
db.orders.insertOne({
  productId: ObjectId("60c72b2f9af1f2a0c8f2f7b2"),
  quantity: 2,
  customerId: ObjectId("60c72b2f9af1f2a0c8f2f7b3")
})
```

## Transazioni
Le transazioni in MongoDB permettono di eseguire operazioni su più documenti in modo atomico.

### Inizio di una Transazione
```javascript
const session = client.startSession();
session.startTransaction();
```

### Commit di una Transazione
```javascript
session.commitTransaction();
session.endSession();
```

### Rollback di una Transazione
```javascript
session.abortTransaction();
session.endSession();
```

## Backup e Ripristino
### Backup
Per fare un backup di un database MongoDB, utilizza il comando:
```bash
mongodump --db testdb --out /backup/
```

### Ripristino
Per ripristinare un database MongoDB da un backup, utilizza il comando:
```bash
mongorestore --db testdb /backup/testdb
```

## Sicurezza
### Creazione di un Utente Amministratore
```javascript
use admin
db.createUser({
  user: "admin",
  pwd: "securepassword",
  roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
})
```

### Autenticazione
Abilita l'autenticazione nel file di configurazione di MongoDB (mongod.conf):
```yaml
security:
  authorization: "enabled"
```

## Monitoraggio e Ottimizzazione
### Monitoraggio delle Prestazioni
Utilizza il comando `mongotop` per monitorare le prestazioni del database:
```bash
mongotop
```

### Analisi delle Query
Utilizza il comando `explain` per analizzare le prestazioni delle query:
```javascript
db.users.find({ age: { $gt: 25 } }).explain("executionStats")
```
