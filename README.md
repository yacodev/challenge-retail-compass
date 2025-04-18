
#  - challenge - Retail-compass

En este repositorio se utiliza el stack de React + TypeScript + Vite para desarrollar el reto frontend de Retail-compass.
Herramientas que se utilizaron:
- Material UI
- Axios para obtener los datos de la API.

## Explicación de la App

1. En la primera vista, la aplicación mostrará el listado de todos los productos
2. Podras filtrar los productos por status, como por la marca del mismo.

Puedes acceder al link desplegado en:
https://challenge-atlantic.vercel.app/


## Estructura del repositorio

This repository has the following  organization:

    ├── src                     # React - app
        ├── components
            ├── Filters              # Component
            ├── Header  # Component
            ├── InputSearch                 # Component
            ├── ProductTable             # Component
            ├── SelectOption             # Component
        ├── Page
            ├── Home                   # Page show all products
        ├── hooks
            ├── usePagination                # Manage pagination table
        ├── helpers
            ├── formatCurrency               # show in format currency
        ├── constants
            ├── status            # status filters constants
        ├── interfaces
            ├── Option                  
            ├── Product                  
        ├── services
            ├── productServices         #  API services 
            
    └── README.md                   # README

## Run

En caso de querer clonar el repositorio y probar localmente, haz lo siguiente:

1. Clone el repositorio.
2. Renombra  el archivo `.env.template` con `.env` y   completa los valores de las variables de entorono :
```
VITE_BASE_URL = 
VITE_API_KEY = 
```
3. Ejecutar:

```bash
npm install
```


4. Ejecutar

```bash
npm run dev
```

## Contacto
* Linkedin: [carlos yaco](https://www.linkedin.com/in/carlos-yaco-tincusi/)
* website: [web](https://yacodev.com)

##  Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).
