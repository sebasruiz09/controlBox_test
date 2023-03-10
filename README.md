# Ebooks API books

Prueba tecnica para ```controlbox.it``` la cual es un sistema de valoracion de libros por diferentes usuarios



## Prerrequisitos

| Dependecia | Link                                            | version  |
| -----------|-------------------------------------------------|----------|
| Docker     | https://www.docker.com/products/docker-desktop/ |  20.10   |
| NodeJs     | https://nodejs.org/en/                          |  18.12.1 |
| Angular    | https://angular.io/                             |  15.0.1  |
| NestJs     | https://nestjs.com/                             |  9.2.0   |


## Construccion

En el proyecto server debe crear un archivo ```.env``` con las variables de entorno para el correcto levantamiento del servidor el cual correra en el puerto ```:3000```

## Env Valores
| Propiedades | Valores   |
|-------------|-----------|
| DBNAME      |           |
| DBUSER      |           |
| DBPASSWORD  |           |
| PORT        | 5432      |
| HOST        | localhost |
| JWT_KEY     |           |
| JWT_EXPIRES |           |

Las propiedades de Base de datos tambien deben ser modificadas en el archivo ```docker-compose.yaml```


## Ejecucion Desarrollo
*  Ejecuta en el directorio server ```docker-compose up -d``` el cual iniciara la base de datos bajando una imagen de postgres y corriendolo en modo detach con la bandera ```-d```

* Instala depedencias en el directorio server y client con el commando ```yarn```

* Ejecuta el server con el comando ```yarn start:dev``` y este sera expuesto en el puerto ```:3000```

* Ejecuta el cliente con el comando ```ng serve``` y este compilara la aplicacion angular y sera expuesta en el puerto ```:4200```

