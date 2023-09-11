# weather-app

Weather app est une application de météo qui informe ses utilisateurs de la température actuelle en
fonction de la ville demandée, ainsi que quelques informations complémentaires.
Au démarrage, l'application donne les informations météo relative à la ville de Cotonou par défaut.
L'utilisateur peut rechercher une ville et ainsi obtenir les informations relatives à la ville demandée.
Il a également la possibilité de voir la température soit en Celcius (°C) ou en Faranheight (°F) grâce à un filtre

## Installation

1. Cloner le projet
   git clone git@github.com:NorrisAkg/weather-app.git

2. Accéder au répertoire
   cd weather-app

3. Installer les dépendances
    npm install

4. Générer et/ou copier la clé API de OpenWeathermap
   https://home.openweathermap.org/api_keys

5. Configurer le fichier d'environnement
    Dans le fichier .env, coller votre clé récupérer sur OpenWeathermap entre les gillemets de la clé "VUE_APP_API_KEY"

6. Démarrer l'application
   npm run serve
