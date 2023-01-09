<?php
spl_autoload_register(function($className) {
	$base_path = 'build/';
	$filename = $base_path . trim(str_replace('\\','/', $className), '/') . '.php';
	if (file_exists($filename)) {
		include_once $filename;
	}
});

use Elephize\TestModule;
use Builtins\Console;
use Builtins\ILogFacility;

class LogFacility implements ILogFacility {
    public function write(string $str) {
        echo $str . PHP_EOL;
    }

    public function flush() {
        if (function_exists('flush')) {
            flush();
        }
    }
}

Console::setLogFacility(new LogFacility());

TestModule::getInstance();