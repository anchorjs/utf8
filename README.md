# Anchor/UTF-8

The UTF-8 module has utilities for UTF-8 character encoding.

## Install

##### component

    $ component install anchorjs/utf8

##### volo

    $ volo add anchorjs/utf8

## Usage

Encode a JavaScript string to UTF-8.

```javascript
utf8.encode('JavaScript');
```

Decode a UTF-8 string to a JavaScript string.

```javascript
utf8.decode('JavaScript')
```

## Compatibility

##### component

This module uses the [AMD](https://github.com/amdjs/amdjs-api) format.  To
include in component builds, use [component-amd](https://github.com/jaredhanson/component-amd):

    component build -u component-amd

## Tests

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
