# BlindtestMaker

Un générateur de blindtest dynamique basé sur l'API Deezer, construit avec **Next.js** et **Socket.io**.

## Fonctionnalités

- **Authentification complète** : Système d'inscription et de connexion pour sauvegarder vos préférences.
- **Génération Flexible** : Créez des parties de blindtest à partir de :
    - Un lien de playlist Deezer.
    - Des mots-clés spécifiques.
    - Un genre musical particulier.
- **Mode Multijoueur** : Jouez en temps réel avec vos amis grâce à l'intégration de **Socket.io**.

## Stack Technique

- **Frontend & Framework** : [Next.js](https://nextjs.org/)
- **Hébergement Frontend** : [Vercel](https://vercel.com/)
- **Serveur Temps Réel (Socket.io)** : Hébergé sur [Render](https://render.com/)
- **Source de données** : [API Deezer](https://developers.deezer.com/api)

## Notes sur le Serveur Socket

Le serveur gérant le mode multijoueur est hébergé via un service "à la demande" sur Render. 

- **Latence de démarrage** : Si le serveur n'a pas été utilisé récemment, il peut mettre quelques secondes à s'éveiller lors de la première connexion.
- **Maintenance** : En cas de crash ou de serveur injoignable, merci de contacter l'administrateur pour un redémarrage manuel.

## Installation Locale

1. Clonez le dépôt :
   ```bash
   git clone [https://github.com/votre-username/nom-du-repo.git](https://github.com/votre-username/nom-du-repo.git)

2. Lancer le site
  ```bash
  npm start
  ```

3. Lancer le serveur socket
  ```bash
  npm start-server
  ```
