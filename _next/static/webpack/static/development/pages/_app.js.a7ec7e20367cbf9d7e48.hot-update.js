webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducer/cashFlowReducer.js":
/*!************************************!*\
  !*** ./reducer/cashFlowReducer.js ***!
  \************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cashFlowReducer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action/types */ "./action/types.js");
/* harmony import */ var _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/cashFlowUtils */ "./utils/cashFlowUtils.js");
/* harmony import */ var _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_9__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




var initialState = {
  indexPlayer: 0,
  players: [_utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.jobs[0]],
  number: 1,
  selectingCard: 0
};

function processCardCoHoi(curPlayer, payload) {
  var _curPlayer = curPlayer,
      cardTitle = _curPlayer.cardTitle,
      cardVal = _curPlayer.cardVal,
      luong = _curPlayer.luong,
      laiNganHang = _curPlayer.laiNganHang,
      laiCoPhan = _curPlayer.laiCoPhan,
      thuNhapThuDong = _curPlayer.thuNhapThuDong,
      tongThuNhap = _curPlayer.tongThuNhap,
      thue = _curPlayer.thue,
      traLaiVayMuaNha = _curPlayer.traLaiVayMuaNha,
      traTienVayHoc = _curPlayer.traTienVayHoc,
      traTienVayMuaXe = _curPlayer.traTienVayMuaXe,
      traTienVayTinDung = _curPlayer.traTienVayTinDung,
      chiPhiMuaSam = _curPlayer.chiPhiMuaSam,
      chiPhiKhac = _curPlayer.chiPhiKhac,
      chiPhiNuoi1Con = _curPlayer.chiPhiNuoi1Con,
      soCon = _curPlayer.soCon,
      chiPhiNuoiCon = _curPlayer.chiPhiNuoiCon,
      vayNganHang = _curPlayer.vayNganHang,
      laiVayNganHang = _curPlayer.laiVayNganHang,
      khoanNoKhac = _curPlayer.khoanNoKhac,
      tongChiPhi = _curPlayer.tongChiPhi,
      dongTien = _curPlayer.dongTien,
      tuThien = _curPlayer.tuThien,
      tienMat = _curPlayer.tienMat,
      batDongSans = _curPlayer.batDongSans,
      congTys = _curPlayer.congTys,
      chungKhoans = _curPlayer.chungKhoans,
      tienNoMuaNha = _curPlayer.tienNoMuaNha,
      tongTienHocPhi = _curPlayer.tongTienHocPhi,
      tienNoMuaXe = _curPlayer.tienNoMuaXe,
      tienNoTheTinDung = _curPlayer.tienNoTheTinDung,
      tienNoMuaBanLe = _curPlayer.tienNoMuaBanLe,
      noNganHang = _curPlayer.noNganHang;
  var type = cardVal.type,
      gia = cardVal.gia,
      traTruoc = cardVal.traTruoc,
      no = cardVal.no,
      thuNhap = cardVal.thuNhap,
      soPhong = cardVal.soPhong,
      symbol = cardVal.symbol,
      coTuc = cardVal.coTuc;

  switch (type) {
    case _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.cardType.typeChBds:
      curPlayer.batDongSans.push(cardVal);
      curPlayer.tienNoMuaNha += no;
      curPlayer.tienMat -= traTruoc;
      curPlayer.showCardResult = 0;
      break;

    case _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.cardType.typeChKdbtg:
      curPlayer.congTys.push(cardVal);
      curPlayer.tienMat -= traTruoc;
      curPlayer.showCardResult = 0;
      break;

    case _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.cardType.typeChBdsLamHu:
      curPlayer.showCardResult = 0;
      if (curPlayer.batDongSans.length > 0) curPlayer.tienMat -= traTruoc;
      break;

    case _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.cardType.typeChCoPhieuGia:
      var soluongcp = payload.soluongcp;
      var giaMoi = 0;

      if (soluongcp * gia > curPlayer.tienMat) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_9___default.a.error('Số dư tiền mặt không đủ mua, cần giảm số lượng cổ phiếu.');
        curPlayer.showCardResult = 1;
        break;
      } else {
        for (var i = 0; i < curPlayer.chungKhoans.length; i++) {
          if (curPlayer.chungKhoans[i].symbol === symbol) {
            curPlayer.tienMat -= soluongcp * gia;
            giaMoi = (soluongcp * gia + curPlayer.chungKhoans[i].gia * curPlayer.chungKhoans[i].soLuong) / (soluongcp + curPlayer.chungKhoans[i].soLuong);
            curPlayer.chungKhoans[i] = {
              symbol: symbol,
              gia: giaMoi,
              soLuong: soluongcp + curPlayer.chungKhoans[i].soLuong,
              coTuc: coTuc
            };
          }
        }

        if (giaMoi === 0) {
          curPlayer.chungKhoans.push(_objectSpread({}, curPlayer.chungKhoans[i], {
            gia: gia,
            soLuong: soluongcp,
            coTuc: coTuc
          }));
        }

        curPlayer.showCardResult = 0;
      }

      break;

    case _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.cardType.typeChCoPhieuGop:
      //tiLeGoc: 2, tiLeDich: 1, ac
      var tiLe = cardVal.tiLeDich / cardVal.tiLeGoc;

      for (var i = 0; i < curPlayer.chungKhoans.length; i++) {
        if (curPlayer.chungKhoans[i].symbol === symbol) {
          curPlayer.chungKhoans[i] = _objectSpread({}, curPlayer.chungKhoans[i], {
            soLuong: curPlayer.chungKhoans[i].soLuong * tiLe,
            gia: curPlayer.chungKhoans[i].gia / tiLe
          });
        }
      }

      curPlayer.showCardResult = 0;
      break;

    case _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.cardType.typeChCoPhieuChia:
      //tiLeGoc: 1, tiLeDich: 2, ac
      var tiLeChia = cardVal.tiLeDich / cardVal.tiLeGoc;

      for (var i = 0; i < curPlayer.chungKhoans.length; i++) {
        if (curPlayer.chungKhoans[i].symbol === symbol) {
          curPlayer.chungKhoans[i] = _objectSpread({}, curPlayer.chungKhoans[i], {
            soLuong: curPlayer.chungKhoans[i].soLuong * tiLeChia,
            gia: curPlayer.chungKhoans[i].gia / tiLeChia
          });
        }
      }

      curPlayer.showCardResult = 0;
      break;

    default:
      curPlayer.showCardResult = 0;
      break;
  }

  curPlayer = tinhTong(curPlayer);
  return _objectSpread({}, curPlayer);
}

function processCard(curPlayer, payload) {
  var _curPlayer2 = curPlayer,
      cardTitle = _curPlayer2.cardTitle,
      cardVal = _curPlayer2.cardVal;

  if (cardTitle === _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.sinhCon && curPlayer.soCon < 3) {
    curPlayer.soCon = curPlayer.soCon + 1;
    curPlayer.showCardResult = 0;
  } else if (cardTitle == _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.coHoi) return processCardCoHoi(curPlayer, payload);else curPlayer.showCardResult = 0;

  curPlayer = tinhTong(curPlayer);
  return _objectSpread({}, curPlayer);
}

function tinhTong(curPlayer) {
  var laiCoPhan = 0;

  for (var i = 0; i < curPlayer.chungKhoans.length; i++) {
    laiCoPhan += curPlayer.chungKhoans[i].soLuong * curPlayer.chungKhoans[i].coTuc;
  }

  var batDongSanDN = 0,
      thuNhapThuDong = 0,
      tongThuNhap = 0,
      chiPhiNuoiCon = 0,
      laiVayNganHang = 0,
      tongChiPhi = 0,
      dongTien = 0;
  curPlayer.batDongSans && curPlayer.batDongSans.map(function (bds, index) {
    batDongSanDN += bds.thuNhap;
  });
  curPlayer.congTys && curPlayer.congTys.map(function (congTy, index) {
    batDongSanDN += congTy.thuNhap;
  });
  thuNhapThuDong = batDongSanDN + curPlayer.laiNganHang + laiCoPhan;
  tongThuNhap = curPlayer.luong + thuNhapThuDong;
  chiPhiNuoiCon = curPlayer.chiPhiNuoi1Con * curPlayer.soCon;
  laiVayNganHang = curPlayer.vayNganHang * 0.1;
  tongChiPhi = curPlayer.thue + curPlayer.traLaiVayMuaNha + curPlayer.traTienVayHoc + curPlayer.traTienVayMuaXe + curPlayer.traTienVayTinDung + curPlayer.chiPhiMuaSam + curPlayer.chiPhiKhac + laiVayNganHang + chiPhiNuoiCon + laiVayNganHang;
  dongTien = tongThuNhap - tongChiPhi;
  return _objectSpread({}, curPlayer, {
    batDongSanDN: batDongSanDN,
    laiCoPhan: laiCoPhan,
    thuNhapThuDong: thuNhapThuDong,
    tongThuNhap: tongThuNhap,
    chiPhiNuoiCon: chiPhiNuoiCon,
    laiVayNganHang: laiVayNganHang,
    tongChiPhi: tongChiPhi,
    dongTien: dongTien
  });
}

function getPayCheck(curNumber, ran, dongTien) {
  var paycheck = 0,
      i = 1,
      number = 0;

  for (i = 1; i <= ran; i++) {
    number = (curNumber + i) % 24;
    if (number === 6 || number === 14 || number === 22) paycheck += dongTien;
  }

  return paycheck;
}

function cashFlowReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var indexPlayer = state.indexPlayer,
      players = state.players;
  var curPlayer = {};
  var payload = {};
  var ran = 0;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_7__["RANDOM_NUMBER"]:
      curPlayer = players[indexPlayer];
      ran = action.ran;
      curPlayer.ran = ran;
      var paycheck = getPayCheck(curPlayer.number, ran, curPlayer.dongTien);
      curPlayer.tienMat = curPlayer.tienMat + paycheck;
      curPlayer.number = curPlayer.number + ran;
      var cardContent = _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_8___default.a.getResultStep(curPlayer.number);
      curPlayer.cardTitle = cardContent.type;
      curPlayer.cardVal = cardContent.val;
      players[indexPlayer] = curPlayer;
      curPlayer.showCardResult = 1;
      return _objectSpread({}, state, {
        players: players
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_7__["CARD_RESULT_OKCLICK"]:
      curPlayer = players[indexPlayer];
      payload = action.payload;
      curPlayer = processCard(curPlayer, payload); // curPlayer.ran = ran;

      players[indexPlayer] = curPlayer;
      return _objectSpread({}, state, {
        players: players
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_7__["CARD_RESULT_SELLCLICK"]:
      curPlayer = players[indexPlayer];
      var _curPlayer3 = curPlayer,
          cardVal = _curPlayer3.cardVal;
      var gia = cardVal.gia,
          symbol = cardVal.symbol;
      payload = action.payload;
      var _payload = payload,
          soluongcp = _payload.soluongcp;
      var giaMoi = 0;

      for (var i = 0; i < curPlayer.chungKhoans.length; i++) {
        if (curPlayer.chungKhoans[i].symbol === symbol) {
          console.log('CARD_RESULT_SELLCLICK symbol, soluongcp, curPlayer.chungKhoans[i].soLuong', symbol, soluongcp, curPlayer.chungKhoans[i].soLuong);

          if (soluongcp > curPlayer.chungKhoans[i].soLuong) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_9___default.a.error('Số cổ phiếu bán không được lớn hơn số dư.');
            break;
          }

          curPlayer.tienMat += soluongcp * gia;

          if (soluongcp === curPlayer.chungKhoans[i].soLuong) {
            curPlayer.chungKhoans.splice(i, 1);
          } else {
            curPlayer.chungKhoans[i] = {
              symbol: symbol,
              gia: curPlayer.chungKhoans[i].gia,
              soLuong: curPlayer.chungKhoans[i].soLuong - soluongcp
            };
          }

          curPlayer.showCardResult = 0;
        }
      }

      players[indexPlayer] = curPlayer;
      return _objectSpread({}, state, {
        players: players
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_7__["CARD_RESULT_IGNORECLICK"]:
      curPlayer = players[indexPlayer];
      curPlayer.showCardResult = 0;
      players[indexPlayer] = curPlayer;
      return _objectSpread({}, state, {
        players: players
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.a7ec7e20367cbf9d7e48.hot-update.js.map