# Installation du serveur

- ##  Ouverture du firewall
	- sudo ufw allow OpenSSH
	- sudo ufw enable
- ## Installation du serveur web
	- sudo apt update
	- sudo apt install apache2
- ## Ouverture du firewall
	- sudo ufw app list
	- sudo ufw app info "Apache Full"
	- sudo ufw allow in "Apache Full"
	- sudo ufw enable

# Installation de base de données
- ##Installer mysql 
	- sudo apt install mysql-server
	- sudo mysql_secure_installation
		- On vous demandera si vous désirez configurer le VALIDATE PASSWORD PLUGIN → Répondre “N”
		- Choisir le mot de passe root
		- Disallow root login remotely? N
		- Répondre “Y” à toutes les autres questions

