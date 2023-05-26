function textShuffle(_txt) {
  var _this = this;
  _this._index = 0;

  var _finalString,
    _finalLength,
    _currentString = "";
  var _randChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
  ];
  var _chars = _randChars.length;
  var _casing = 0; //0=normal, 1=upper, 2=lower

  _this.to = function (_newStr, _time, casing) {
    (_finalString = _newStr), (_casing = casing);
    (_finalLength = _finalString.length), (_this._index = 0);
    TweenLite.killTweensOf(_this);
    TweenLite.to(_this, _time || 2, {
      _index: _finalLength * 2,
      ease: Quad.easeOut,
      onUpdate: shuffle,
    });
  };

  function shuffle() {
    //Start writing the correct text when halfways
    if (_this._index > _finalLength)
      _currentString =
        _finalString.slice(0, _this._index - _finalLength) +
        randomString().slice(0, _finalLength - _this._index);
    else _currentString = randomString();

    if (_casing == 0) _txt.innerHTML = _currentString;
    else if (_casing == 1) _txt.innerHTML = _currentString.toUpperCase();
    else _txt.innerHTML = _currentString.toLowerCase();
  }

  function randomString() {
    var _char = "",
      _str = "";
    for (var i = 0; i < _this._index * 0.5; ++i) {
      _char = _randChars[Math.floor(Math.random() * _chars)];
      if (_casing == 2) _char = _char.toLowerCase();
      _str += _char;
    }
    return _str;
  }
}

var _index = -1;
var _demoTexts = [
  "U HAVE BEEN HACKED ..!!! YOUR ACCOUNT HAS BEEN BREACHED ",
  "YOUR ACCOUNT HAS BEEN BREACHED",
  "WAIT FOR A CALL TO PROCEED FURTHER ",
];
_shuffle = new textShuffle(document.getElementById("container"));

document.addEventListener("mousedown", newText, false);
function newText(e) {
  _index++;
  if (_index >= _demoTexts.length) _index = 0;
  _shuffle.to(_demoTexts[_index], 1.2, Math.floor(Math.random() * 2));
}
