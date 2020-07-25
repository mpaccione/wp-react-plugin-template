<?php
/**
 * @wordpress-plugin
 * Plugin Name:       React App Plugin Template
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Your awesome React app!
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      5.4
 * Author:            Michael Paccione
 * Author URI:        https://mpaccione.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       react-app-plugin-template
 */

defined( 'ABSPATH' ) or die( 'Direct script access disallowed.' );

define( 'ERW_WIDGET_PATH', plugin_dir_path( __FILE__ ));
define( 'ERW_ASSET_MANIFEST', ERW_WIDGET_PATH . '/build/asset-manifest.json' );
define( 'ERW_INCLUDES', plugin_dir_path( __FILE__ ) . 'includes' );

require_once( ERW_INCLUDES . '/enqueue.php' );
require_once( ERW_INCLUDES . '/shortcode.php' );
