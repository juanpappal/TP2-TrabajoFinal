# TP2-TrabajoFinal

Trabajo final de Taller de Programación 2.

## Requisitos

* Node.js
* MySQL

## Configuración

Crear un archivo `.env` en la raíz del proyecto tomando como referencia `.env.example`.

Ejemplo:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=biblioteca_db
DB_USER=root
DB_PASSWORD=contoso
JWT_SECRET=cambiar_este_secret
```

## Instalación

Instalar las dependencias:

```bash
npm install
```

## Ejecución

Iniciar la aplicación:

```bash
npm start
```

## Documentación

La documentación de la API se encuentra disponible en Swagger una vez iniciada la aplicación.

URL:

```txt
http://localhost:3000/api-docs
```
