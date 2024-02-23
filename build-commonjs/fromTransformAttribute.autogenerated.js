"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyntaxError = peg$SyntaxError;
exports.default = void 0;
exports.parse = peg$parse;

// Generated by PEG.js v0.11.0-master.b7b87ea, https://pegjs.org/
function peg$subclass(child, parent) {
  function C() {
    this.constructor = child;
  }

  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError"; // istanbul ignore next

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found, location) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function (expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    class: function (expectation) {
      var escapedParts = expectation.parts.map(function (part) {
        return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
      });
      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function () {
      return "any character";
    },
    end: function () {
      return "end of input";
    },
    other: function (expectation) {
      return expectation.description;
    },
    not: function (expectation) {
      return "not " + describeExpectation(expectation.expected);
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return "\\x" + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return "\\x" + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;
    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};
  var peg$FAILED = {};
  var peg$startRuleFunctions = {
    transformList: peg$parsetransformList
  };
  var peg$startRuleFunction = peg$parsetransformList;
  var peg$c0 = "matrix";
  var peg$c1 = "(";
  var peg$c2 = ")";
  var peg$c3 = "translate";
  var peg$c4 = "scale";
  var peg$c5 = "rotate";
  var peg$c6 = "skewX";
  var peg$c7 = "skewY";
  var peg$c8 = ",";
  var peg$c9 = ".";
  var peg$r0 = /^[eE]/;
  var peg$r1 = /^[+\-]/;
  var peg$r2 = /^[0-9]/;
  var peg$r3 = /^[ \t\r\n]/;
  var peg$e0 = peg$literalExpectation("matrix", false);
  var peg$e1 = peg$literalExpectation("(", false);
  var peg$e2 = peg$literalExpectation(")", false);
  var peg$e3 = peg$literalExpectation("translate", false);
  var peg$e4 = peg$literalExpectation("scale", false);
  var peg$e5 = peg$literalExpectation("rotate", false);
  var peg$e6 = peg$literalExpectation("skewX", false);
  var peg$e7 = peg$literalExpectation("skewY", false);
  var peg$e8 = peg$literalExpectation(",", false);
  var peg$e9 = peg$otherExpectation("fractionalConstant");
  var peg$e10 = peg$classExpectation(["e", "E"], false, false);
  var peg$e11 = peg$classExpectation(["+", "-"], false, false);
  var peg$e12 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e13 = peg$classExpectation([" ", "\t", "\r", "\n"], false, false);

  var peg$f0 = function (ts) {
    return ts;
  };

  var peg$f1 = function (t, ts) {
    return t.concat(ts);
  };

  var peg$f2 = function (a, b, c, d, e, f) {
    return [{
      type: 'matrix',
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f
    }];
  };

  var peg$f3 = function (tx, ty) {
    var t = {
      type: 'translate',
      tx: tx
    };
    if (ty) t.ty = ty;
    return [t];
  };

  var peg$f4 = function (sx, sy) {
    var s = {
      type: 'scale',
      sx: sx
    };
    if (sy) s.sy = sy;
    return [s];
  };

  var peg$f5 = function (angle, c) {
    var r = {
      type: 'rotate',
      angle: angle
    };

    if (c) {
      r.cx = c[0];
      r.cy = c[1];
    }

    return [r];
  };

  var peg$f6 = function (angle) {
    return [{
      type: 'skewX',
      angle: angle
    }];
  };

  var peg$f7 = function (angle) {
    return [{
      type: 'skewY',
      angle: angle
    }];
  };

  var peg$f8 = function (f) {
    return parseFloat(f.join(""));
  };

  var peg$f9 = function (i) {
    return parseInt(i.join(""));
  };

  var peg$f10 = function (n) {
    return n;
  };

  var peg$f11 = function (n1, n2) {
    return [n1, n2];
  };

  var peg$f12 = function (ds) {
    return ds.join("");
  };

  var peg$f13 = function (f, e) {
    return [f, e || null].join("");
  };

  var peg$f14 = function (d, e) {
    return [d, e].join("");
  };

  var peg$f15 = function (d1, d2) {
    return [d1 ? d1.join("") : null, ".", d2.join("")].join("");
  };

  var peg$f16 = function (d) {
    return d.join("");
  };

  var peg$f17 = function (s, d) {
    return ['e', s, d.join("")].join("");
  };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{
    line: 1,
    column: 1
  }];
  var peg$expected = [];
  var peg$silentFails = 0;
  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }

  function error(message, location) {
    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$anyExpectation() {
    return {
      type: "any"
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;

  function peg$computeLocation(startPos, endPos) {
    var loc = {};
    if (peg$VALIDFILENAME) loc.filename = options.filename;
    var startPosDetails = peg$computePosDetails(startPos);
    loc.start = {
      offset: startPos,
      line: startPosDetails.line,
      column: startPosDetails.column
    };
    var endPosDetails = peg$computePosDetails(endPos);
    loc.end = {
      offset: endPos,
      line: endPosDetails.line,
      column: endPosDetails.column
    };
    return loc;
  }

  function peg$begin() {
    peg$expected.push({
      pos: peg$currPos,
      variants: []
    });
  }

  function peg$expect(expected) {
    var top = peg$expected[peg$expected.length - 1];

    if (peg$currPos < top.pos) {
      return;
    }

    if (peg$currPos > top.pos) {
      top.pos = peg$currPos;
      top.variants = [];
    }

    top.variants.push(expected);
  }

  function peg$end(invert) {
    var expected = peg$expected.pop();
    var top = peg$expected[peg$expected.length - 1];
    var variants = expected.variants;

    if (top.pos !== expected.pos) {
      return;
    }

    if (invert) {
      variants = variants.map(function (e) {
        return e.type === "not" ? e.expected : {
          type: "not",
          expected: e
        };
      });
    }

    Array.prototype.push.apply(top.variants, variants);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found, location), expected, found, location);
  }

  function peg$buildError() {
    var expected = peg$expected[0];
    var failPos = expected.pos;
    return peg$buildStructuredError(expected.variants, failPos < input.length ? input.charAt(failPos) : null, failPos < input.length ? peg$computeLocation(failPos, failPos + 1) : peg$computeLocation(failPos, failPos));
  }

  function peg$parsetransformList() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();

    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewsp();
    }

    s2 = peg$parsetransforms();

    if (s2 === peg$FAILED) {
      s2 = null;
    }

    s3 = [];
    s4 = peg$parsewsp();

    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$parsewsp();
    }

    peg$savedPos = s0;
    s0 = peg$f0(s2);
    return s0;
  }

  function peg$parsetransforms() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsetransform();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsecommaWsp();

      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsecommaWsp();
        }
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsetransforms();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$parsetransform();
    }

    return s0;
  }

  function peg$parsetransform() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parsematrix();

    if (s0 === peg$FAILED) {
      s0 = peg$parsetranslate();

      if (s0 === peg$FAILED) {
        s0 = peg$parsescale();

        if (s0 === peg$FAILED) {
          s0 = peg$parserotate();

          if (s0 === peg$FAILED) {
            s0 = peg$parseskewX();

            if (s0 === peg$FAILED) {
              s0 = peg$parseskewY();
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsematrix() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e0);

    if (input.substr(peg$currPos, 6) === peg$c0) {
      s1 = peg$c0;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }

      rule$expects(peg$e1);

      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }

        s5 = peg$parsenumber();

        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWsp();

          if (s6 !== peg$FAILED) {
            s7 = peg$parsenumber();

            if (s7 !== peg$FAILED) {
              s8 = peg$parsecommaWsp();

              if (s8 !== peg$FAILED) {
                s9 = peg$parsenumber();

                if (s9 !== peg$FAILED) {
                  s10 = peg$parsecommaWsp();

                  if (s10 !== peg$FAILED) {
                    s11 = peg$parsenumber();

                    if (s11 !== peg$FAILED) {
                      s12 = peg$parsecommaWsp();

                      if (s12 !== peg$FAILED) {
                        s13 = peg$parsenumber();

                        if (s13 !== peg$FAILED) {
                          s14 = peg$parsecommaWsp();

                          if (s14 !== peg$FAILED) {
                            s15 = peg$parsenumber();

                            if (s15 !== peg$FAILED) {
                              s16 = [];
                              s17 = peg$parsewsp();

                              while (s17 !== peg$FAILED) {
                                s16.push(s17);
                                s17 = peg$parsewsp();
                              }

                              rule$expects(peg$e2);

                              if (input.charCodeAt(peg$currPos) === 41) {
                                s17 = peg$c2;
                                peg$currPos++;
                              } else {
                                s17 = peg$FAILED;
                              }

                              if (s17 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s0 = peg$f2(s5, s7, s9, s11, s13, s15);
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetranslate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e3);

    if (input.substr(peg$currPos, 9) === peg$c3) {
      s1 = peg$c3;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }

      rule$expects(peg$e1);

      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }

        s5 = peg$parsenumber();

        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspNumber();

          if (s6 === peg$FAILED) {
            s6 = null;
          }

          s7 = [];
          s8 = peg$parsewsp();

          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }

          rule$expects(peg$e2);

          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }

          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f3(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsescale() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e4);

    if (input.substr(peg$currPos, 5) === peg$c4) {
      s1 = peg$c4;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }

      rule$expects(peg$e1);

      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }

        s5 = peg$parsenumber();

        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspNumber();

          if (s6 === peg$FAILED) {
            s6 = null;
          }

          s7 = [];
          s8 = peg$parsewsp();

          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }

          rule$expects(peg$e2);

          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }

          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f4(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parserotate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e5);

    if (input.substr(peg$currPos, 6) === peg$c5) {
      s1 = peg$c5;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }

      rule$expects(peg$e1);

      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }

        s5 = peg$parsenumber();

        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspTwoNumbers();

          if (s6 === peg$FAILED) {
            s6 = null;
          }

          s7 = [];
          s8 = peg$parsewsp();

          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }

          rule$expects(peg$e2);

          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }

          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f5(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseskewX() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e6);

    if (input.substr(peg$currPos, 5) === peg$c6) {
      s1 = peg$c6;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }

      rule$expects(peg$e1);

      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }

        s5 = peg$parsenumber();

        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parsewsp();

          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parsewsp();
          }

          rule$expects(peg$e2);

          if (input.charCodeAt(peg$currPos) === 41) {
            s7 = peg$c2;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
          }

          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f6(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseskewY() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e7);

    if (input.substr(peg$currPos, 5) === peg$c7) {
      s1 = peg$c7;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }

      rule$expects(peg$e1);

      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }

        s5 = peg$parsenumber();

        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parsewsp();

          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parsewsp();
          }

          rule$expects(peg$e2);

          if (input.charCodeAt(peg$currPos) === 41) {
            s7 = peg$c2;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
          }

          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f7(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsesign();

    if (s2 === peg$FAILED) {
      s2 = null;
    }

    s3 = peg$parsefloatingPointConstant();

    if (s3 !== peg$FAILED) {
      s2 = [s2, s3];
      s1 = s2;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f8(s1);
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsesign();

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      s3 = peg$parseintegerConstant();

      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f9(s1);
      }

      s0 = s1;
    }

    return s0;
  }

  function peg$parsecommaWspNumber() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsecommaWsp();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumber();

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f10(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecommaWspTwoNumbers() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsecommaWsp();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumber();

      if (s2 !== peg$FAILED) {
        s3 = peg$parsecommaWsp();

        if (s3 !== peg$FAILED) {
          s4 = peg$parsenumber();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f11(s2, s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecommaWsp() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewsp();
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma();

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      s3 = [];
      s4 = peg$parsewsp();

      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parsewsp();
      }

      s1 = [s1, s2, s3];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsecomma();

      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewsp();

        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewsp();
        }

        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsecomma() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e8);

    if (input.charCodeAt(peg$currPos) === 44) {
      s0 = peg$c8;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseintegerConstant() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsedigitSequence();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f12(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsefloatingPointConstant() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsefractionalConstant();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseexponent();

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      peg$savedPos = s0;
      s0 = peg$f13(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsedigitSequence();

      if (s1 !== peg$FAILED) {
        s2 = peg$parseexponent();

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f14(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsefractionalConstant() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e9);
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parsedigitSequence();

    if (s1 === peg$FAILED) {
      s1 = null;
    }

    if (input.charCodeAt(peg$currPos) === 46) {
      s2 = peg$c9;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }

    if (s2 !== peg$FAILED) {
      s3 = peg$parsedigitSequence();

      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f15(s1, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsedigitSequence();

      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c9;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f16(s1);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    peg$silentFails--;
    return s0;
  }

  function peg$parseexponent() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e10);

    if (peg$r0.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parsesign();

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      s3 = peg$parsedigitSequence();

      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f17(s2, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesign() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e11);

    if (peg$r1.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedigitSequence() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = [];
    s1 = peg$parsedigit();

    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsedigit();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedigit() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e12);

    if (peg$r2.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewsp() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e13);

    if (peg$r3.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  peg$begin();
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$expect(peg$endExpectation());
    }

    throw peg$buildError();
  }
}

var _default = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
exports.default = _default;