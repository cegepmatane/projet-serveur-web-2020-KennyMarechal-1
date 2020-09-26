<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpressuser' );

/** MySQL database username */
define( 'DB_USER', 'wordpressuser' );

/** MySQL database password */
define( 'DB_PASSWORD', 'toad781227@' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('FS_METHOD', 'direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4|qDGeATwmj[5/0mj:03(o,!E`%+P+NfO:hoq)YTl^X0D!W~_twG2B-au2sN3LLy');
define('SECURE_AUTH_KEY',  'ZKihr_-]z%;WXM9K$$?b#+x2bO<HD$Q_9=i,p,5q_e<9fFV0A.?_$~+Surr$vnp6');
define('LOGGED_IN_KEY',    'vFLC7<!NEh;(3?l=&;*,CDbY.Fchn`eTLOeu,n/^#uM|?UtUf|B7{,9y-tB]@l@E');
define('NONCE_KEY',        'HOyMT>:{3=hN YQTWIh<[6UNx^F-uZ+:%eZ`@u=b7.>_;3>L+l=sH^^kOE.yvLBu');
define('AUTH_SALT',        'fhw|Gx{fFz>p3utHZ]5U[yyFg|nAj0|Q@_4(_tWHt2VfrLf0:IT,;}eX^wJJUocb');
define('SECURE_AUTH_SALT', '+Q^7z`azT!3$m3F8#S~Se?P|Ps8>20^;?~{`T/AEEcS2zVQyY9h}+&g_C8|ehIcM');
define('LOGGED_IN_SALT',   'V@-an]>2OU4A}^fe,*o]ILr$ileusr]Sq{0%|kB6!1=2.][@*K^Yr7}|>t|3%r).');
define('NONCE_SALT',       ':m0@T,c< @zk[CE*/dCi((T7<dBN.^LSDs+Ftg&QK6Q:Aiy/$qZ@]+Jc<I~xvw]*');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
