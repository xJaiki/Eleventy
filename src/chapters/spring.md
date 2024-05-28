---
title: SPRING
layout: chapter.njk
---
## Introduzione a Spring Framework
Spring è un framework open-source per lo sviluppo di applicazioni Java di livello enterprise. Fornisce un supporto completo per lo sviluppo di applicazioni robuste, sicure e scalabili. Le principali funzionalità di Spring includono Inversion of Control (IoC), Aspect-Oriented Programming (AOP) e accesso ai dati.

## Caratteristiche Principali
### Inversion of Control (IoC)
IoC è un principio di design in cui il controllo del flusso del programma viene invertito rispetto alla tradizionale programmazione. In Spring, IoC è realizzato tramite il concetto di dependency injection (DI), che permette di gestire le dipendenze tra gli oggetti.

### Aspect-Oriented Programming (AOP)
AOP permette di separare le preoccupazioni trasversali (cross-cutting concerns) come logging, sicurezza e gestione delle transazioni dal codice business logic principale.

### Accesso ai Dati
Spring fornisce un supporto robusto per l'accesso ai dati, integrandosi facilmente con JDBC, JPA, Hibernate e altri framework ORM.

## Spring Boot
Spring Boot è un'estensione di Spring che semplifica la creazione di applicazioni stand-alone, pronte per la produzione, con una configurazione minima. Offre configurazioni predefinite e consente di avviare rapidamente un progetto Spring.

### Creazione di un Progetto Spring Boot
Puoi creare un progetto Spring Boot utilizzando Spring Initializr (https://start.spring.io/).

1. Vai su Spring Initializr.
2. Seleziona le dipendenze richieste (es. Spring Web, Spring Data JPA).
3. Genera il progetto e importalo nel tuo IDE preferito.

### Struttura di un Progetto Spring Boot
Un tipico progetto Spring Boot contiene le seguenti directory:
- `src/main/java`: Contiene il codice sorgente dell'applicazione.
- `src/main/resources`: Contiene i file di configurazione e le risorse statiche.
- `src/test/java`: Contiene i test dell'applicazione.

## Configurazione di Spring
Spring utilizza annotazioni per configurare i componenti dell'applicazione. Alcune annotazioni comuni includono:
- `@SpringBootApplication`: Indica la classe principale di un'applicazione Spring Boot.
- `@Component`: Indica una classe come componente gestito da Spring.
- `@Service`: Indica una classe di servizio.
- `@Repository`: Indica una classe di accesso ai dati.
- `@Controller`: Indica una classe controller per gestire le richieste web.
- `@RestController`: Combina `@Controller` e `@ResponseBody` per semplificare la creazione di API RESTful.

```java
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

## Dependency Injection
Spring supporta la dependency injection tramite costruttori, setter e campi.

### Dependency Injection tramite Costruttore
```java
@Component
public class MyService {
    private final MyRepository myRepository;

    @Autowired
    public MyService(MyRepository myRepository) {
        this.myRepository = myRepository;
    }
}
```

### Dependency Injection tramite Setter
```java
@Component
public class MyService {
    private MyRepository myRepository;

    @Autowired
    public void setMyRepository(MyRepository myRepository) {
        this.myRepository = myRepository;
    }
}
```

### Dependency Injection tramite Campo
```java
@Component
public class MyService {
    @Autowired
    private MyRepository myRepository;
}
```

## Spring Data JPA
Spring Data JPA semplifica l'accesso ai dati in applicazioni Spring utilizzando JPA. Fornisce un supporto completo per l'accesso ai dati, inclusi repository, query methods e paginazione.

### Creazione di un Repository
```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByLastName(String lastName);
}
```

### Utilizzo di un Repository
```java
@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsersByLastName(String lastName) {
        return userRepository.findByLastName(lastName);
    }
}
```

## Spring MVC
Spring MVC è un framework per lo sviluppo di applicazioni web basate sul pattern Model-View-Controller. Spring MVC gestisce le richieste HTTP e le mappa ai controller.

### Creazione di un Controller
```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
```

## Gestione delle Eccezioni
Spring fornisce un meccanismo per gestire le eccezioni a livello globale utilizzando `@ControllerAdvice`.

```java
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFoundException(ResourceNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}
```

## Spring Security
Spring Security è un framework per la gestione della sicurezza nelle applicazioni Spring. Fornisce autenticazione e autorizzazione, protezione contro attacchi comuni e integrazione con altri sistemi di sicurezza.

### Configurazione di Spring Security
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
            .and()
            .logout()
                .permitAll();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .inMemoryAuthentication()
                .withUser("user").password("{noop}password").roles("USER");
    }
}
```

## Testing con Spring Boot
Spring Boot supporta il testing delle applicazioni utilizzando JUnit e altre librerie di testing.

### Test di Unità
```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {
    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @Test
    public void testGetUsersByLastName() {
        when(userRepository.findByLastName("Rossi")).thenReturn(Arrays.asList(new User("Mario", "Rossi")));
        List<User> users = userService.getUsersByLastName("Rossi");
        assertEquals(1, users.size());
        assertEquals("Mario", users.get(0).getFirstName());
    }
}
```

## Conclusione