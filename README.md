# TutoCI 🎬

TutoCI est une application web de diffusion de vidéos éducatives gratuites, réalisée dans le cadre de l’évaluation du projet transmis le 03 mai 2025.

Ce projet a été développé entre le 05 et le 14 mai, et sera présenté le **samedi 17 mai 2025**.

---

## ✅ Réponse aux livrables attendus

| Livrable                                                       |Réalisé                                                                                                                                 |
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Interface web fonctionnelle (front + back)                     | ✅ Oui, avec React.js (Vite) et Node.js (Express)                                                                                      |


| Système d’affichage de vidéos (YouTube embed ou vidéos locales)| ✅ Intégration YouTube embed                                                                                                           |


| Page d’accueil avec liste de vidéos (titre, catégorie, image)  | ✅ Implémentée               |


| Fiche vidéo (page ou modal) avec description et lecteur        | ✅ page vidéo avec description et lecteur                                                                                              |


| Tri/filtrage par thème                                         | ✅ Filtrage par catégorie intégré                                                                                                      |


| Base d’abonnés (facultatif)                                    | ✅ Implémentée via SQLite                                                                                                              |


| Système de paiement mobile (facultatif)                        | ⚠️ Non réalisé – accès API limité sans compte entreprise                                                                               |


| Code source (Git ou ZIP)                                       | ✅ Dépôt GitHub : front en back (https://github.com/YannYours/frontend_tutoci.git) ; (https://github.com/YannYours/backend_tutoci.git) |


| README explicatif (choix, installation, captures)              | ✅ Présent dans ce fichier (captures accessibles dans le dossier src/assets)                                                           |

---

## ⚙️ Choix techniques

- **Front-end** : [React.js](https://react.dev/) (via Vite)  
- **Back-end** : [Node.js](https://nodejs.org/) + Express  
- **Base de données** : SQLite (locale)  
- **CSS** : Bootstrap + CSS personnalisé  
- **Lecteur vidéo** : Intégration de vidéos YouTube  
- **Hébergement** :  
  - Front-end : [Vercel](https://vercel.com/) – Lien site web => https://frontend-tutoci.vercel.app/  
  - Back-end : [Render](https://render.com/) 

### Pourquoi ces choix ?

- **React + Vite** : J’ai choisi React pour sa flexibilité, sa logique de composants réutilisables et sa forte communauté. Associé à Vite, qui est un bundler moderne ultra-rapide, cela permet un environnement de développement fluide, avec hot-reload instantané, un temps de build très court, et une configuration minimale. Cela m’a permis de me concentrer sur les fonctionnalités sans perdre de temps en configuration complexe. 
- **Bootstrap** : Bootstrap a été intégré pour accélérer la conception de l’interface, notamment pour bénéficier d’une grille responsive, de composants prêts à l’emploi (cards, modals, boutons, etc.), et garantir une cohérence visuelle sans forcement devoir styliser manuellement chaque élément. Cela m’a permis de respecter les délais tout en assurant une bonne lisibilité et accessibilité. 
- **SQLite** : SQLite est un système de gestion de base de données léger, autonome, et sans serveur, idéal pour un prototype local. Il permet de stocker efficacement les abonnés tout en gardant une simplicité d’installation (un seul fichier .db, pas de configuration nécessaire). Ce choix respecte la contrainte de développement rapide tout en restant fonctionnel pour simuler une base d'abonnés réelle.
- **Vercel (front) & Render (back)** : Ces deux plateformes offrent une solution d’hébergement gratuite, rapide et simple à mettre en place.

Vercel déploie automatiquement le front dès qu’une modification est poussée sur GitHub, avec un CDN performant pour assurer un bon temps de chargement.

Render permet de mettre en ligne le back-end Node.js avec support de la base SQLite locale, idéal pour la phase de test et de démonstration.
Ces choix facilitent un déploiement continu, sans maintenance serveur.

---

## 🚀 Installation en local

### Backend & Frontend
Avoir Git et Node.js (>= v.20) installés sur sa machine

```bash
git clone https://github.com/YannYours/backend_tutoci.git
cd backend_tutoci
cd backend_tutoci
npm install
npm run dev

```bash
git clone https://github.com/YannYours/frontend_tutoci.git
cd frontend_tutoci
npm install
npm run dev
