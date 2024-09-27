title: JAKARTA ENTERPRISE EDITION
layout: chapter.njk
---
## Cos'è Java EE
Jakarta Enterprise Edition (ex Java Enterprise Edition), è una piattaforma per sviluppare applicazioni aziendali su larga scala. Essa fornisce un insieme di API e un runtime per lo sviluppo di applicazioni server-side, come applicazioni web, microservizi, servizi RESTful, e molto altro.

---

## Architettura di Java EE
Java EE è costruito attorno a un'architettura a più livelli:
- **Client Layer**: Il front-end dell'applicazione, può essere un browser, una mobile app o un'applicazione desktop.
- **Business Logic Layer**: Contiene la logica di business, eseguita su un server.
- **Persistence Layer (Data Access Layer)**: Gestisce l'accesso e la manipolazione dei dati in un database relazionale.

---

## Servlet
### Cos'è una Servlet?
Una servlet è una classe Java che gestisce richieste HTTP in un'applicazione web. Le servlet elaborano le richieste del client e restituiscono una risposta (spesso sotto forma di HTML).

### Ciclo di vita delle Servlet
Il ciclo di vita di una servlet include i seguenti metodi:
- **`init()`**: Viene chiamato una volta, quando la servlet viene caricata in memoria.
- **`service()`**: Viene chiamato per ogni richiesta HTTP e decide se chiamare `doGet()`, `doPost()`, ecc.
- **`destroy()`**: Viene chiamato quando la servlet viene rimossa dalla memoria, per pulire risorse.

### Esempio di Servlet

```
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

    @Override
    public void init() throws ServletException {
        System.out.println("Servlet initialized");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Hello, Java EE!</h1>");
    }

    @Override
    public void destroy() {
        System.out.println("Servlet destroyed");
    }
}
```

---

## JSP (JavaServer Pages)
Le **JSP** consentono di includere codice Java all'interno di una pagina HTML per creare contenuti dinamici. Viene spesso utilizzato per generare interfacce web con contenuti dinamici basati sui dati ricevuti dal backend.

### Esempio di una pagina JSP

```jsp
<%@ page contentType="text/html; charset=UTF-8" %>
<html>
  <head>
    <title>Hello JSP</title>
  </head>
  <body>
    <h1>Hello, JSP!</h1>
    <p>The current date is: <%= new java.util.Date() %></p>
  </body>
</html>
```

---

## JPA (Java Persistence API)
La **Java Persistence API (JPA)** fornisce un'API standard per la persistenza dei dati in un database relazionale, basata sul modello Object-Relational Mapping (ORM). JPA mappa oggetti Java a tabelle di database.

### Esempio di una classe Entity con JPA

```
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    private Long id;
    private String name;

    // Getter e setter
}
```

---

## JDBC (Java Database Connectivity)
**JDBC** è una API standard per interagire con i database relazionali. Consente di eseguire query SQL da un'applicazione Java e di ottenere i risultati in modo strutturato.

### Esempio di utilizzo di JDBC

```
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCExample {

    public static void main(String[] args) {
        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydatabase", "user", "password");

            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");

            while (rs.next()) {
                System.out.println(rs.getString(1) + " " + rs.getString(2));
            }

            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## RESTful Web Services con JAX-RS
JAX-RS è l'API Java per la creazione di servizi RESTful. Con JAX-RS, puoi creare web service che rispondono a richieste HTTP con dati strutturati, spesso in formato JSON o XML.

### Esempio di un servizio REST con JAX-RS

```
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/hello")
public class HelloResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello, REST!";
    }
}
```

---

## CDI (Contexts and Dependency Injection)
**CDI** è un'API per l'iniezione delle dipendenze e la gestione dei cicli di vita dei componenti in un'applicazione Java EE.

### Esempio di CDI

```
import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

@Named
@RequestScoped
public class UserBean {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

---

## EJB (Enterprise JavaBeans)
Gli **Enterprise JavaBeans (EJB)** sono componenti server-side che semplificano lo sviluppo di applicazioni distribuite. Possono essere utilizzati per gestire transazioni, sicurezza, e concorrenza.

### Esempio di un Session Bean

```
import javax.ejb.Stateless;

@Stateless
public class CalculatorBean {

    public int add(int a, int b) {
        return a + b;
    }
}
```

---

## JMS (Java Message Service)
**JMS** è un'API per la comunicazione asincrona tra applicazioni attraverso messaggi. Permette l'invio di messaggi da un'applicazione a un'altra, anche se non sono connesse nello stesso momento.

---

## Servizi di Sicurezza in Java EE
Java EE include diverse API per gestire la sicurezza delle applicazioni:
- **JAAS (Java Authentication and Authorization Service)**: Per autenticazione e autorizzazione.
- **Declarative Security**: Si configura direttamente nel file `web.xml` o tramite annotazioni.

---

## DAO (Data Access Object)
Il pattern **DAO** è utilizzato per separare la logica di business dalla logica di accesso ai dati. Fornisce un'interfaccia per eseguire operazioni CRUD (Create, Read, Update, Delete) sul database.

### Esempio di un DAO

```
public interface UserDAO {
    void create(User user);
    User find(Long id);
    void update(User user);
    void delete(Long id);
}

public class UserDAOImpl implements UserDAO {
    // Implementazione dei metodi per interagire con il database
}
```

---

## Transazioni in Java EE
Le **transazioni** garantiscono che un insieme di operazioni su un database vengano completate con successo o annullate in caso di errore. Java EE supporta la gestione automatica delle transazioni (CMT) attraverso annotazioni come `@Transactional`.

---

## Struttura di un Progetto Java EE
Un tipico progetto Java EE segue questa struttura:
- **src/main/java**: Codice sorgente Java.
- **src/main/resources**: File di configurazione.
- **src/main/webapp**: Contenuto web come JSP, HTML, CSS, e file `web.xml`.
- **META-INF** e **WEB-INF**: Cartelle di configurazione per le risorse del progetto.

---
