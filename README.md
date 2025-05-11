# Tutoci 🎬

Tutoci est une application web de diffusion de vidéos éducatives gratuites, réalisée dans le cadre de l’évaluation du projet transmis le 03 mai 2025.

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

- **React + Vite** : rapidité de build, hot-reload, structure modulaire.  
- **Bootstrap** : composants et mise en page responsive rapide.  
- **SQLite** : base légère, sans configuration, idéale pour l’évaluation locale.  
- **Vercel & Render** : déploiement continu full-stack simple et gratuit.  

---

## 🚀 Installation en local

### Backend & Frontend

```bash
git clone https://github.com/YannYours/backend_tutoci.git
cd backend_tutoci
cd backend_tutoci
npm install
npm run dev

```bash
git clone https://github.com/YannYours/frontend_tutoci.git
cd backend_tutoci
npm install
npm run dev
