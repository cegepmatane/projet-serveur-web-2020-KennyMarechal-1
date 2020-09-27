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

- ## Installer mysql 

	- sudo apt install mysql-server
	- sudo mysql_secure_installation
		- On vous demandera si vous désirez configurer le VALIDATE PASSWORD PLUGIN → Répondre “N”
		- Choisir le mot de passe root
		- Disallow root login remotely? N
		- Répondre “Y” à toutes les autres questions

- ## Réinitialiser le mot de passe 

	- sudo mysql
		- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'passwordXYZ';
		- FLUSH PRIVILEGES;
		- exit
	- sudo service mysql start

# Installation du php

- ## Installer le module php

	- sudo apt install php libapache2-mod-php php-mysql
	- pour ubuntu 18.04 LTS : sudo a2enmod php7.2 pour ubuntu 20.04 LTS : sudo a2enmod php7.4

- ## Prioriser index.php à index.html

	- sudo nano /etc/apache2/mods-enabled/dir.conf
		- Dépacer index.php à la suite de DirectoryIndex
		- Sauver et quitter
	- sudo systemctl restart apache2

- ## Tester le php

	- sudo nano /var/www/html/info.php
		- " php phpinfo(); "
		- Sauver et quitter
	- tester : http://ip.du.serveur/info.php
	- sudo rm /var/www/html/info.php

# Options de php

- ## Activation de modules (parfois automatiquement activé)

	- pour ubuntu 18.04 LTS : cd /etc/php/7.2/apache2 pour ubuntu 20.04 LTS : cd /etc/php/7.4/apache2
	- sudo nano php.ini
		- extension=mysqli
		- extension=pdo_mysql
	- sudo systemctl restart apache2 && sudo systemctl restart mysql

- ## Affichage des erreurs php (serveur dev uniquement)

	- pour ubuntu 18.04 LTS : cd /etc/php/7.2/apache2 pour ubuntu 20.04 LTS : cd /etc/php/7.4/apache2
	- sudo nano php.ini
		- display_errors = On
		- display_startup_errors = On
		- log_errors = On
		- mysqlnd.debug = /var/log/php-mysql
	- sudo systemctl restart apache2 && sudo systemctl restart mysql

# Installation de base de données

- ## Installer phpmyadmin

	- sudo apt-get install phpmyadmin
	- Sélectionner apache dans la liste (avec tab et “space” sur apache)
	- sudo nano /etc/apache2/apache2.conf
	- Include /etc/phpmyadmin/apache.conf  (à la fin si pas déjà là)
	- sudo service apache2 restart

- ## Tester phpmyadmin

	- 51.161.33.181/phpmyadmin

# Configuration des Vhosts

- ## préparer l'espace

	- sudo mkdir /var/www/tikenix.me/
	- sudo mkdir /var/www/wiki.tikenix.me/
	- sudo mkdir /var/www/blog.tikenix.me/
	- sudo mkdir /var/www/tikenix.zonedns.education/

- ## ajouter le fichier de configuration

	- sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/tikenix.me.conf
	- sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/wiki.tikenix.me.conf
	- sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/blog.tikenix.conf
	- sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/tikenix.zonedns.education.conf

*Exemple de fichier de configuration :*
 
![](https://github.com/cegepmatane/projet-serveur-web-2020-KennyMarechal-1/blob/master/doc/images/config_exemple.png)

- ## activer le nouveau site

	- sudo a2ensite tikenix.me.conf
	- sudo a2ensite wiki.tikenix.me.conf
	- sudo a2ensite blog.tikenix.conf
	- sudo a2ensite tikenix.zonedns.education.conf
	- sudo systemctl reload apache2

# Créer des webmestres

## User password Site associé(*propriété*)

- sudo useradd webmestre
- sudo passwd "password"
- sudo chown webmestre /var/www/

- sudo useradd tikenix.me
- sudo passwd "password"
- sudo chown -R tikenix.me  /var/www/tikenix.me

- sudo useradd wiki.tikenix.me
- sudo passwd "password" 
- sudo chown -R wiki.tikenix.me /var/www/wiki.tikenix.me

- sudo useradd blog.tikenix.me
- sudo passwd "password"
- sudo chown -R blog.tikenix.me /var/www/blog.tikenix.me

- sudo useradd tikenix.zonedns.education
- sudo passwd "password" 
- sudo chown -R tikenix.zonedns.education /var/www/tikenix.zonedns.education

## Enlever le shell aux webmestre

sudo usermod --shell /usr/local/bin/sftponly webmestre

sudo usermod --shell /usr/local/bin/sftponly tikenix.me

sudo usermod --shell /usr/local/bin/sftponly wiki.tikenix.me

sudo usermod --shell /usr/local/bin/sftponly blog.tikenix.me

sudo usermod --shell /usr/local/bin/sftponly tikenix.zonedns.education

sudo nano /usr/local/bin/sftponly

![](https://github.com/cegepmatane/projet-serveur-web-2020-KennyMarechal-1/blob/master/doc/images/retirer_shell.png)

sudo chmod +x /usr/local/bin/sftponly

- ## Créer un groupe et y inclure l'utilisateur qui va gérer plusieurs sites

	- sudo groupadd legroupe
	- sudo usermod -a -G legroupe webmestre

- ## Inclure l'utilisateur du service web dans le groupe

	- sudo usermod -a -G legroupe www-data

- ## Appliquer le groupe à tous les répertoires accessibles

	- sudo chown -R :legroupe /var/www/tikenix.me
	- sudo chown -R :legroupe /var/www/wiki.tikenix.me
	- sudo chown -R :legroupe /var/www/blog.tikenix.me
	- sudo chown -R :legroupe /var/www/tikenix.zonedns.education

- ## Créer un utilisateur pour programmer tous les sites

	- sudo adduser programmeur

- ## L'ajouter au groupe legroupe mais aussi au www-data

	- sudo usermod -a -G legroupe programmeur
	- sudo usermod -a -G www-data programmeur



