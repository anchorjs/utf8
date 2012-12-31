# Anchor/UTF-8

The UTF-8 module has utilities for UTF-8 character encoding.

## Install

##### volo

    $ volo add anchorjs/utf8

For more information on using volo to manage JavaScript modules, visit [http://volojs.org/](http://volojs.org/).

## Usage

Encode a JavaScript string to UTF-8.

```javascript
utf8.encode('JavaScript');
```

Decode a UTF-8 string to a JavaScript string.

```javascript
utf8.decode('JavaScript')
```

## Tests

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari

##### PhantomJS

To run headless tests from a terminal using [PhantomJS](http://phantomjs.org/):

    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
