<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5c710dda439711851f8ddf1ea77848be
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Cocur\\Slugify\\' => 14,
        ),
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Cocur\\Slugify\\' => 
        array (
            0 => __DIR__ . '/..' . '/cocur/slugify/src',
        ),
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/App',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5c710dda439711851f8ddf1ea77848be::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5c710dda439711851f8ddf1ea77848be::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
