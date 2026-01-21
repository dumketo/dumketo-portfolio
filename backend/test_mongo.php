<?php
echo "PHP Version: " . phpversion() . "\n";
echo "PHP INI: " . php_ini_loaded_file() . "\n";
echo "Extension Dir: " . ini_get('extension_dir') . "\n";
echo "Thread Safety: " . (ZEND_THREAD_SAFE ? 'Enabled' : 'Disabled') . "\n";
echo "Int Size: " . PHP_INT_SIZE . " (8 means x64, 4 means x86)\n";

if (extension_loaded('mongodb')) {
    echo "SUCCESS: MongoDB extension is loaded!\n";
} else {
    echo "FAILURE: MongoDB extension is NOT loaded.\n";
    if (!file_exists('H:\php\ext\php_mongodb.dll')) {
        echo "WARNING: H:\php\ext\php_mongodb.dll does not exist!\n";
    } else {
        echo "CONFIRMED: H:\php\ext\php_mongodb.dll exists.\n";
    }
}
