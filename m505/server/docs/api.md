# API - Plataforma de Anomalías

> POST /auth/login

    BODY

```json
{
    "correo": <string>,
    "contraseña": <string>
}
```

    RESPONSE

```json
{
    "error": <false|true>,
    "message": <null|string>,
    "correo": <string>,
    "token": <null|string>
}
```

> GET /auth/token/verify

    QUERY

```
correo=<string>
token=<string>
```

    RESPONSE

```
TRUE: REDIRECT next()
FALSE: STATUS 401
```

> GET /api/anomalias

    RESPONSE

```json
{
    "id_anomalia": <int>,
    "usuario": {
        "id_usuario": <int>,
        "nombre": <string>,
        "correo": <string>,
        "imagen": <string>,
        "activo": <true|false>,
        "creado": <date>,
        "actualizado": <null|date>
    },
    "ubicacion": {
        "id_ubicacion": <int>,
        "id_usuario": <int>,
        "latitud": <double>,
        "longitud": <double>,
        "uuid": <null|string>,
        "info": <null|string>,
        "creado": <date>
    },
    "tipo_anomalia": {
        "id_estado_anomalia": <int>,
        "descripcion": <null|string>,
        "codigo": <null|string>,
        "creado": <date>,
        "actualizado": <null|date>,
    },
    "qr": {
        "id_qr": <int>,
        "id_ubicacion": <int>,
        "texto": <null|string>,
        "imagen": <null|string>,
        "creado": <date>
    },
    "publicado": <null|date>,
    "creado": <date>
}
```

> PUT /api/anomalias/nueva

    BODY

```json
{
    "id_tipo_anomalia": <int>,
    "usuario": {
        "correo": <string>,
        "token": <string>
    },
    "ubicacion": {
        "latitud": <double>,
        "longitud": <double>,
        "uuid": <null|string>,
        "info": <null|string>
    }
}
```

> GET /api/anomalias/publicadas

    RESPONSE

```json
{
    "id_anomalia": <int>,
    "usuario": {
        "id_usuario": <int>,
        "nombre": <string>,
        "correo": <string>,
        "imagen": <string>,
        "activo": <true|false>,
        "creado": <date>,
        "actualizado": <null|date>
    },
    "ubicacion": {
        "id_ubicacion": <int>,
        "id_usuario": <int>,
        "latitud": <double>,
        "longitud": <double>,
        "uuid": <null|string>,
        "info": <null|string>,
        "creado": <date>
    },
    "tipo_anomalia": {
        "id_estado_anomalia": <int>,
        "descripcion": <null|string>,
        "codigo": <null|string>,
        "creado": <date>,
        "actualizado": <null|date>,
    },
    "qr": {
        "id_qr": <int>,
        "id_ubicacion": <int>,
        "texto": <null|string>,
        "imagen": <null|string>,
        "creado": <date>
    },
    "publicado": <date>,
    "creado": <date>
}
```

> GET /api/anomalias/no_publicadas

    RESPONSE

```json
{
    "id_anomalia": <int>,
    "usuario": {
        "id_usuario": <int>,
        "nombre": <string>,
        "correo": <string>,
        "imagen": <string>,
        "activo": <true|false>,
        "creado": <date>,
        "actualizado": <null|date>
    },
    "ubicacion": {
        "id_ubicacion": <int>,
        "id_usuario": <int>,
        "latitud": <double>,
        "longitud": <double>,
        "uuid": <null|string>,
        "info": <null|string>,
        "creado": <date>
    },
    "tipo_anomalia": {
        "id_estado_anomalia": <int>,
        "descripcion": <null|string>,
        "codigo": <null|string>,
        "creado": <date>,
        "actualizado": <null|date>,
    },
    "qr": {
        "id_qr": <int>,
        "id_ubicacion": <int>,
        "texto": <null|string>,
        "imagen": <null|string>,
        "creado": <date>
    },
    "publicado": null,
    "creado": <date>
}
```

> GET /api/anomalias/usuario/:id_usuario

    RESPONSE

```json
{
    "id_anomalia": <int>,
    "usuario": {
        "id_usuario": :id_usuario,
        "nombre": <string>,
        "correo": <string>,
        "imagen": <string>,
        "activo": <true|false>,
        "creado": <date>,
        "actualizado": <null|date>
    },
    "ubicacion": {
        "id_ubicacion": <int>,
        "id_usuario": :id_usuario,
        "latitud": <double>,
        "longitud": <double>,
        "uuid": <null|string>,
        "info": <null|string>,
        "creado": <date>
    },
    "tipo_anomalia": {
        "id_estado_anomalia": <int>,
        "descripcion": <null|string>,
        "codigo": <null|string>,
        "creado": <date>,
        "actualizado": <null|date>,
    },
    "qr": {
        "id_qr": <int>,
        "id_ubicacion": <int>,
        "texto": <null|string>,
        "imagen": <null|string>,
        "creado": <date>
    },
    "publicado": <null|date>,
    "creado": <date>
}
```