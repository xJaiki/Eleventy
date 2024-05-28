---
title: JAVA
layout: chapter.njk
---
## Cos'è Java
Java è un linguaggio di programmazione Object-Oriented. Le sue caratteristiche principali sono la portabilità e la robustezza. La portabilità si riferisce all'indipendenza del sistema operativo, resa possibile dalla JVM. La robustezza implica una maggiore capacità di prevenire errori.

## JVM (Java Virtual Machine)
La JVM è un software che esegue i programmi Java. Converte il codice Java in linguaggio macchina e poi lo esegue. La JVM gestisce anche la memoria e la sicurezza dei programmi Java.

## JRE (Java Runtime Environment)
La JRE è un ambiente di esecuzione per i programmi Java. Contiene la JVM, oltre ad altre librerie e strumenti necessari per eseguire i programmi Java.

## JDK (Java Development Kit)
Il JDK è un kit di sviluppo per Java. Contiene la JRE, un compilatore e altri strumenti necessari per sviluppare programmi Java.

## Garbage Collection
Il Garbage Collection (GC) è un meccanismo che libera automaticamente la memoria inutilizzata. Quando un programma Java crea un oggetto, il GC lo memorizza nella memoria heap e lo elimina quando non è più necessario.

## Classi e Oggetti
Una classe è un modello che può essere utilizzato per creare oggetti. Un oggetto è un'entità che ha stato e comportamento. Lo stato di un oggetto è rappresentato dai suoi attributi e il comportamento dai suoi metodi.

### Costruttore
Un costruttore è un metodo speciale che viene chiamato quando viene creato un oggetto. Viene utilizzato per inizializzare gli attributi dell'oggetto e per eseguire altre attività iniziali.

```java
Persona p = new Persona("Mario", "Di Marino"); // Costruttore parametrizzato
Persona p = new Persona(); // Costruttore non parametrizzato
```

## Modificatori
I modificatori forniscono al compilatore informazioni sulla natura del codice.

### Modificatori di Attributi/Metodi/Costruttori
- **public**: Il codice è accessibile a tutte le classi.
- **private**: Il codice è accessibile solo all’interno della stessa classe.
- **protected**: Il codice è accessibile alle classi e alle sottoclassi nello stesso package.
- **default**: Il codice è accessibile a tutte le classi nello stesso package.

### Modificatori di Classi
- **final**: La classe non può essere ereditata da altre classi.
- **abstract**: La classe non può essere istanziata direttamente.

### Modificatori di Attributi/Metodi
- **final**: Non può essere sovrascritto o modificato nelle sottoclassi.
- **static**: Appartiene alla classe, non all'oggetto.

```java
public class Math { 
   static int add(int a, int b) {
      return a + b; 
    } 
}
System.out.println(Math.add(1, 2));
```

## Tipi Primitivi
Java fornisce 8 tipi primitivi: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`.

## Wrapper
I tipi wrapper contengono un valore primitivo, trasformandolo in un oggetto. Esempi: `Integer`, `Double`, `Character`.

## Casting
Il casting consiste nel convertire un tipo di dato in un altro tipo.

```java
int myInt = 9;
double myDouble = myInt; // Casting automatico
double myDouble = 9.78;
int myInt = (int) myDouble; // Casting manuale
```

## Concatenamento di Stringhe
Il concatenamento di stringhe unisce due o più stringhe in una singola stringa.

```java
String str1 = "Hello";
String str2 = "World";
String str3 = str1 + str2;
System.out.println(str3);

String str1 = "Hello";
int number = 10;
String str3 = String.format("Hello, %d!", number);
System.out.println(str3);
```

## Ereditarietà
L'ereditarietà consente alle classi figlie di ereditare i metodi e gli attributi delle classi madri. 

## Polimorfismo
Il polimorfismo è la capacità di un'espressione di assumere diversi significati in base ai tipi di dati.

### Override
L'override consente a una classe figlia di sovrascrivere un metodo di una classe madre.

```java
class Animal {
  public void print() {
    System.out.println("Animal");
  }
}

class Dog extends Animal {
  @Override
  public void print() {
    System.out.println("Dog");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal animal = new Dog();
    animal.print(); // Dog
  }
}
```

### Overload
L'overload consente a una classe di avere più metodi con lo stesso nome ma con diversi parametri.

```java
class Math {
  public int add(int a, int b) {
    return a + b;
  }

  public int add(int a, int b, int c) {
    return a + b + c;
  }
}

public class Main {
  public static void main(String[] args) {
    System.out.println(new Math().add(1, 2)); // 3
    System.out.println(new Math().add(1, 2, 3)); // 6
  }
}
```

## Incapsulamento
L'incapsulamento nasconde i dettagli implementativi di un oggetto agli utenti dell'oggetto utilizzando modificatori di accesso.

```java
public class Person {
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String newName) {
    this.name = newName;
  }
}
```

## Lambda
Le lambda expressions sono funzioni anonime che possono essere utilizzate per scrivere codice più chiaro e meno verboso.

```java
(int x, int y) -> x + y
s -> s.length()
```

## Astrazione
L'astrazione nasconde i dettagli implementativi di un oggetto e mostra solo le informazioni essenziali.

### Classe Astratta
Una classe astratta non può essere utilizzata per creare oggetti e può contenere metodi astratti.

```java
abstract class Animal {
  public abstract void animalSound();
  public void sleep() {
    System.out.println("Zzz");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}
```

### Interfaccia
Un'interfaccia contiene solo metodi astratti e costanti.

```java
interface Animal {
  public void animalSound();
}

class Pig implements Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}
```

## Eccezioni
Le eccezioni sono eventi che interrompono il normale flusso di esecuzione del codice e vengono gestite con i blocchi try-catch.

```java
try {
  int[] myNumbers = {1, 2, 3};
  System.out.println(myNumbers[10]);
} catch (Exception e) {
  System.out.println("Something went wrong.");
}
```

## Collezioni
Le collezioni sono un insieme di classi e interfacce per archiviare e manipolare insiemi di oggetti.

### Tipi di Collezioni
- **List**: Collezione ordinata di oggetti.
- **Set**: Collezione di oggetti unici.
- **Map**: Collezione di coppie chiave-valore.
- **Array**: Struttura dati lineare.
- **ArrayList**: Struttura dati dinamica.
- **HashMap**: Collezione di coppie chiave-valore.

## Java I/O
La classe Java I/O fornisce metodi per leggere e scrivere dati da e verso file, stream e altre risorse.

## Java Multithreading
Il multithreading consente l'esecuzione di più thread contemporaneamente.

## Generics
I generics permettono di scrivere codice indipendente dal tipo di dato.

```java
public class MyList<T> {
  private List<T> list = new ArrayList<>();

  public void add(T object) {
    list.add(object);
  }
}
```

## Annotazioni
Le annotazioni aggiungono informazioni aggiuntive a classi, metodi, variabili e altri elementi di codice.

## Singleton
Un singleton garantisce che di una determinata classe venga creata una sola istanza.

```java
public class Singleton {
    private static Singleton instance;

    private Singleton() {
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

## JSP (JavaServer Pages)
Le JSP consentono di includere codice Java all'interno di pagine HTML per creare pagine web dinamiche.

```java
<%@ page contentType="text/html; charset=UTF-8" %>
<html>
  <head>
    <title>Pagina JSP</title>
  </head>
  <body>
    <p>Questo è un esempio di pagina JSP.</p>
    <%
    System.out.println("Hello, world!");
    %>
  </body>
</html>
```

## JPA (Java Persistence API)
La JPA è una libreria per la persistenza dei dati all'interno di un database relazionale, basata sul modello ORM.

## Servlet
Una servlet è una classe Java che elabora le richieste e risposte HTTP per creare applicazioni web dinamiche.

## JDBC (Java Database Connectivity)
JDBC è una API standard che consente alle applicazioni Java di accedere ai dati in un database.

## DAO (Data Access Object)
Un DAO è un pattern di progettazione che definisce un'interfaccia per l'accesso ai dati.

## CRUD
CRUD sta per Create, Read, Update, Delete, le operazioni fondamentali per la gestione dei dati in un database.

## MVC (Model-View-Controller)
Il pattern MVC separa l'interfaccia utente dalla logica dell'applicazione. È composto da:
- **Model**: Gestisce i dati dell'applicazione.
- **View**: Visualizza i dati dell'applicazione.
- **Controller**: Gestisce l'interazione tra vista e modello.