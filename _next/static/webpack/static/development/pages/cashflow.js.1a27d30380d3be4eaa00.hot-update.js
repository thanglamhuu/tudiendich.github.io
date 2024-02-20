webpackHotUpdate("static/development/pages/cashflow.js",{

/***/ "./utils/cashFlowUtils.js":
/*!********************************!*\
  !*** ./utils/cashFlowUtils.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //#region CacHangGiaTri

var typeChBds = 'Bất Động Sản';
var typeChBdsLamHu = 'Người Thuê Lam Hư Bất Động Sản';
var typeChKdbtg = 'Kinh Doanh Bán Thời Gian';
var typeChCoPhieuGia = 'Giá Cổ Phiếu';
var typeChCoPhieuGop = 'Gộp Cổ Phiếu';
var typeChCoPhieuChia = 'Chia Cổ Phiếu';
var ch = 'Cơ hội';
var cp = 'Chi phí';
var tuThien = 'Từ thiện';
var nl = 'Nhận lương';
var tt = 'Thị trường';
var sc = 'Sinh con';
var tn = 'Thất nghiệp'; //#region cardCoHoi

var chBdsLamHu = {
  type: typeChBdsLamHu,
  title: 'Người thuê nhà làm hư tài sản',
  description: 'Thiếu nợ 2 tháng tiền nhà, anh ta bỏ trốn khỏi khu phố và làm hư một số tài sản. Bảo hiểm phải chịu phần lớn thiệt hại, nhưng bạn phải bỏ thêm $500. Trả $500 nếu bạn sở hữu tài sản cho thuê',
  gia: 500,
  traTruoc: 500,
  no: 0,
  thuNhap: 0,
  soPhong: 0,
  acceptedIgnore: true
};
var chBds2Br1Ba = {
  type: typeChBds,
  title: 'Căn hộ 2 ngủ 1 tắm',
  description: 'Một doanh nhân thành công muốn bán một căn hộ 2 phòng ngủ 1 phòng tắm tuyệt vời có nhiều tiện ích bên trong, lí do là cô ta chuyển sang nơi ở khác. Giá thị trường khoảng $45,000-$65,000',
  gia: 60000,
  traTruoc: 5000,
  no: 55000,
  thuNhap: -100,
  soPhong: 2,
  acceptedIgnore: true
};
var chBds2Br1BaNH = {
  type: typeChBds,
  title: 'Căn hộ 2 ngủ 1 tắm',
  description: 'Ngân hàng thanh lý tài sản thế chấp nợ bị tịch thu! Đây là một căn hộ 2 phòng ngủ 1 phòng tắm đáng khao khát, trong khu dân cư sầm uất. Giấy tờ OK, thủ tục tài chính ngân hàng thuận tiện. Mua cơ hội này hoặc bán cho người khác.',
  gia: 40000,
  traTruoc: 5000,
  no: 35000,
  thuNhap: 220,
  soPhong: 2,
  acceptedIgnore: true
};
var chBds2Br1BaCu = {
  type: typeChBds,
  title: 'Căn hộ 2 ngủ 1 tắm',
  description: 'Căn hộ đã cũ, xuống cấp 50%, cặp vợ chồng muốn chuyển tới căn hộ 3 ngủ 2 tắm rộng hơn. Giấy tờ đã sẵn sàng. Mua cơ hội này hoặc bán cho người khác.',
  gia: 55000,
  traTruoc: 5000,
  no: 50000,
  thuNhap: 160,
  soPhong: 2,
  acceptedIgnore: true
};
var chBds3Br2Ba = {
  type: typeChBds,
  title: 'Căn hộ 3 ngủ 2 tắm',
  description: 'Cần bán một căn nhà cho thuê 3 ngủ 2 tắm đẹp bất ngờ, đây là tài sản thừa kế, được bảo quản tốt, đang có người thuê. Mua cơ hội này hoặc bán cho người khác.',
  gia: 65000,
  traTruoc: 5000,
  no: 60000,
  thuNhap: 160,
  soPhong: 3,
  acceptedIgnore: true
};
var chBds3Br2BaNH = {
  type: typeChBds,
  title: 'Căn hộ 3 ngủ 2 tắm',
  description: 'Ngân hàng bán căn nhà niêm phong gần 6 tháng. Món nợ bao gồm cả chi phí tu sửa. 60% ROI có thể bán $65,000 - $135,000. Mua cơ hội này hoặc bán cho người khác.',
  gia: 50000,
  traTruoc: 4000,
  no: 46000,
  thuNhap: 200,
  soPhong: 3,
  acceptedIgnore: true
};
var chBds3Br2BaTv = {
  type: typeChBds,
  title: 'Căn hộ 3 ngủ 2 tắm',
  description: 'Chính quyền hoá giá căn nhà 3 ngủ 2 tắm, đang có người thuê. 132% ROI có thể bán $65,000 - $135,000. Mua cơ hội này hoặc bán cho người khác.',
  gia: 35000,
  traTruoc: 2000,
  no: 33000,
  thuNhap: 220,
  soPhong: 3,
  acceptedIgnore: true
};
var chBds10MauDat = {
  type: typeChBds,
  title: '10 mẫu đất trống',
  description: 'Một công viên tuyệt vời trải dài hơn 10 mẫu ở vùng quê chưa phát triển, không đường xá cơ sở hạ tầng yếu kém, không có tiếng ồn. Mua cơ hội này hoặc bán cho người khác.',
  gia: 5000,
  traTruoc: 5000,
  no: 0,
  thuNhap: 0,
  soPhong: 0,
  acceptedIgnore: true
};
var plex8_1 = {
  type: typeChBds,
  title: 'Căn hộ 8 phòng',
  description: 'Giá $80,000, trả trước $40000, thu nhập hàng tháng $2000',
  gia: 80000,
  traTruoc: 40000,
  no: 40000,
  thuNhap: 2000,
  soPhong: 8,
  acceptedIgnore: true
};
var d2u = {
  type: typeChKdbtg,
  title: 'Kinh doanh bán thời gian D2U',
  description: 'Phát triển từ một ý tưởng kinh doanh phần mềm, bạn bắt đầu thành lập công ty để triển khai. Chưa có lợi nhuận trong thời kì đầu, mất nhiều thời gian, không phụ phí. Mua cơ hội này hoặc bán cho người khác.',
  gia: 5000,
  traTruoc: 5000,
  no: 0,
  thuNhap: 0,
  acceptedIgnore: true
};
var ctyPhanMem = {
  type: typeChKdbtg,
  title: 'Kinh doanh bán thời gian phần mềm',
  description: 'Bạn gia nhập công ty Direct 2 You (D2U). Một công ty tiếp thị theo mạng. Sản phẩm tốt, lợi nhuận ban đầu thấp, tiềm năng phát triển. Được huấn luyện về kỹ năng kinh doanh và lãnh đạo. Không hứa hẹn nhiều.',
  gia: 200,
  traTruoc: 200,
  no: 0,
  thuNhap: -100,
  acceptedIgnore: true
};
var bqSach = {
  type: typeChKdbtg,
  title: 'Bản quyền sách',
  description: 'Giá $8000, trả trước $8000, thu nhập hàng tháng $250',
  gia: 8000,
  traTruoc: 8000,
  no: 0,
  thuNhap: 250,
  acceptedIgnore: true
};
var OK4U5 = {
  type: typeChCoPhieuGia,
  symbol: 'OK4U',
  title: 'Giá vàng cao nhất 20 năm',
  description: 'Báo cáo thất nghiệp và lạm phát tăng cao. Chính phủ các nước bơm tiền để cứu nền kinh tế. Giá vàng liên tục được đẩy lên cao. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu OK4U có thể bán với giá này.',
  gia: 5,
  bienDo: '$5-$50',
  coTuc: 0,
  acceptedIgnore: true
};
var OK4U10 = {
  type: typeChCoPhieuGia,
  symbol: 'OK4U',
  title: 'Cổ phiếu Công ty dược OK4U',
  description: 'Nhà sản xuất thuốc lâu đời, đặc biệt là thuốc dành cho những người già trên 70 tuổi. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu OK4U có thể bán với giá này.',
  gia: 10,
  bienDo: '$5-$50',
  coTuc: 0,
  acceptedIgnore: true
};
var OK4U40 = {
  type: typeChCoPhieuGia,
  symbol: 'OK4U',
  title: 'Cổ phiếu Công ty dược OK4U',
  description: 'Lạm phát thấp dẫn đến gía cổ phiếu công ty sản xuất dược phẩm tăng cao. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu OK4U có thể bán với giá này.',
  gia: 40,
  bienDo: '$5-$50',
  coTuc: 0,
  acceptedIgnore: true
};
var OK4U50LS = {
  type: typeChCoPhieuGia,
  symbol: 'OK4U',
  title: 'Cổ phiếu Công ty dược OK4U',
  description: 'Lạm phát thấp dẫn đến gía cổ phiếu công ty sản xuất dược phẩm tăng cao. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu OK4U có thể bán với giá này.',
  gia: 50,
  bienDo: '$5-$50',
  coTuc: 0,
  acceptedIgnore: true
};
var OK4U50 = {
  type: typeChCoPhieuGia,
  symbol: 'OK4U',
  title: 'Cổ phiếu Công ty dược OK4U',
  description: 'Giá thị trường cổ phiếu của Công ty sản xuất được tăng đột biến. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu OK4U có thể bán với giá này.',
  gia: 50,
  bienDo: '$5-$50',
  coTuc: 0,
  acceptedIgnore: true
};
var OK4UCHIA = {
  type: typeChCoPhieuChia,
  symbol: 'OK4U',
  title: 'Cổ phiếu Công ty dược OK4U',
  description: 'Công việc kinh doanh phát triển đột ngột nên công ty tiến hành chia cổ phiếu! Những ai đang sở hữu cổ phiếu OK4U nâng cấp gấp đôi số lượng cổ phiếu đang nắm giữ. (Không trả tiền mặt, tổng giá trị không thay đổi). Không chia cổ tức. Không ai được mua hoặc bán trong thời điểm này.',
  tiLeGoc: 1,
  tiLeDich: 2,
  acceptedIgnore: false
};
var OK4UGOP = {
  type: typeChCoPhieuGop,
  symbol: 'OK4U',
  title: 'Cổ phiếu Công ty dược OK4U',
  description: 'Công ty làm ăn khó khăn, tổn thất lớp do scandal về thuốc. Những ai đang nắm giữ OK4U phải chia số lượng cổ phiếu. (Không trả tiền mặt, tổng giá trị không đổi). Không chia cổ tức, không ai được mua, bán trong thời điểm này.',
  tiLeGoc: 2,
  tiLeDich: 1,
  acceptedIgnore: false
};
var MYT4U1 = {
  type: typeChCoPhieuGia,
  symbol: 'MYT4U',
  title: 'Cổ phiếu Công ty điện tử MYT4U',
  description: 'Thị trường yếu dẫn đến sự sụt giảm giá cổ phiếu của công ty bán đồ gia dụng. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu MYT4U có thể bán với giá này.',
  gia: 1,
  bienDo: '$1-$30',
  coTuc: 0,
  acceptedIgnore: true
};
var MYT4U5 = {
  type: typeChCoPhieuGia,
  symbol: 'MYT4U',
  title: 'Cổ phiếu Công ty điện tử MYT4U',
  description: 'Việc giữ tỉ lệ lãi tức dẫn đến giá cổ phiếu giảm dưới tiêu chuẩn của một công ty bản đồ điện tử gia dụng. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu MYT4U có thể bán với giá này.',
  gia: 5,
  bienDo: '$1-$30',
  coTuc: 0,
  acceptedIgnore: true
};
var MYT4U30 = {
  type: typeChCoPhieuGia,
  symbol: 'MYT4U',
  title: 'Cổ phiếu Công ty điện tử MYT4U',
  description: 'Thị trường phát triển mạnh dẫn đến giá cổ phiếu tăng cao. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu MYT4U có thể bán với giá này.',
  gia: 30,
  bienDo: '$1-$30',
  coTuc: 0,
  acceptedIgnore: true
};
var MYT4U40 = {
  type: typeChCoPhieuGia,
  symbol: 'MYT4U',
  title: 'Cổ phiếu Công ty điện tử MYT4U',
  description: 'Thị trường chứng khoán bùng nổ dẫn đến giá cổ phiếu tăng rất cao. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu MYT4U có thể bán với giá này.',
  gia: 40,
  bienDo: '$1-$40',
  coTuc: 0,
  acceptedIgnore: true
};
var MYT4UCHIA = {
  type: typeChCoPhieuChia,
  symbol: 'MYT4U',
  title: 'Cổ phiếu Công ty dược MYT4U',
  description: 'Công việc kinh doanh phát triển đột ngột nên công ty tiến hành chia cổ phiếu! Những ai đang sở hữu cổ phiếu OK4U nâng cấp gấp đôi số lượng cổ phiếu đang nắm giữ. (Không trả tiền mặt, tổng giá trị không thay đổi). Không chia cổ tức. Không ai được mua hoặc bán trong thời điểm này.',
  tiLeGoc: 1,
  tiLeDich: 2,
  acceptedIgnore: false
};
var MYT4UGOP = {
  type: typeChCoPhieuGop,
  symbol: 'MYT4U',
  title: 'Cổ phiếu Công ty dược MYT4U',
  description: 'Công ty tái cơ cấu! Do sự mở rộng quá mức và suy thoái. Những ai đang nắm giữ MYT4U phải chia số lượng cổ phiếu. (Không trả tiền mặt, tổng giá trị không đổi). Không chia cổ tức, không ai được mua, bán trong thời điểm này.',
  tiLeGoc: 2,
  tiLeDich: 1,
  acceptedIgnore: false
};
var GRO4US10 = {
  type: typeChCoPhieuGia,
  symbol: 'GRO4US',
  title: 'Chứng chỉ Quỹ hỗ tương GRO4US Fund',
  description: 'Lợi nhuận giảm sút từ hầu hết các công ty dẫn đầu, làm cho giá quỹ tương hỗ giảm sút. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu GRO4US có thể bán với giá này.',
  gia: 10,
  bienDo: '$5-$40',
  coTuc: 0,
  acceptedIgnore: true
};
var GRO4US20 = {
  type: typeChCoPhieuGia,
  symbol: 'GRO4US',
  title: 'Chứng chỉ Quỹ hỗ tương GRO4US Fund',
  description: 'Lợi nhuận từ hầu hết các công ty dẫn đầu khả quan, làm cho giá quỹ tương hỗ tăng nhẹ. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu GRO4US có thể bán với giá này.',
  gia: 20,
  bienDo: '$5-$40',
  coTuc: 0,
  acceptedIgnore: true
};
var GRO4US40 = {
  type: typeChCoPhieuGia,
  symbol: 'GRO4US',
  title: 'Chứng chỉ Quỹ hỗ tương GRO4US Fund',
  description: 'Thị trường nhà ở đang nóng làm cho giá chứng chỉ quỹ tăng mạnh đạt tới đỉnh điểm. Chỉ có bạn mới mua được cổ phiếu này nếu muốn. Mọi người sở hữu GRO4US có thể bán với giá này.',
  gia: 20,
  bienDo: '$5-$40',
  coTuc: 0,
  acceptedIgnore: true
};
var BIGPower = {
  type: typeChCoPhieuGia,
  symbol: '2BIGPower',
  title: 'Cổ phần ưu đãi 2 BIG Power',
  description: 'Lợi tức tăng cao, rao bán cổ phần ưu đãi của một công ty điện lực địa phương. Hội đồng của bang cam kết lợi tức và gía sẽ không đổi. Mọi người có thể mua, bán nếu muốn giá này.',
  gia: 1200,
  bienDo: '$1200 - $1200',
  coTuc: 10,
  acceptedIgnore: true
}; //4 chBds2Br1Ba,chBds2Br1BaCu,chBds2Br1BaNH

var coHoiList = [// {type: 'khac', title:'Tăng giá phòng trọ.', description: 'Giá phòng trọ trên thị trường tăng $30 1 căn.', gia: 0, traTruoc: 0, thuNhap: 30, acceptedIgnore: true},
// chBdsLamHu,
// chBds2Br1Ba, chBds2Br1Ba, chBds2Br1Ba, chBds2Br1Ba, chBds2Br1BaNH, chBds2Br1BaCu, chBds3Br2Ba, chBds3Br2Ba, chBds3Br2BaNH, chBds3Br2BaNH, chBds3Br2BaTv, chBds3Br2BaTv, chBds10MauDat, plex8_1,
// d2u, d2u, d2u, d2u, d2u, d2u, ctyPhanMem, ctyPhanMem, bqSach,
// OK4UCHIA, OK4UGOP, OK4U5, OK4U5, OK4U5, OK4U5, OK4U10, OK4U40, OK4U50LS, OK4U50,
// MYT4U1, MYT4U5,MYT4U5,MYT4U30, MYT4U40, MYT4UCHIA, MYT4UGOP,
// GRO4US10, GRO4US20, GRO4US40, GRO4US40, 
BIGPower, BIGPower, BIGPower]; //#endregion cardCoHoi
//#endregion CacHangGiaTri

module.exports = {
  cardType: {
    typeChBds: typeChBds,
    typeChKdbtg: typeChKdbtg,
    typeChBdsLamHu: typeChBdsLamHu,
    typeChCoPhieuGia: typeChCoPhieuGia,
    typeChCoPhieuGop: typeChCoPhieuGop,
    typeChCoPhieuChia: typeChCoPhieuChia
  },
  coHoi: ch,
  chiPhi: cp,
  tuThien: tuThien,
  nhanLuong: nl,
  thiTruong: tt,
  sinhCon: sc,
  thatNghiep: tn,
  xucXacMax: 6,
  ratRaceSteps: [ch, cp, ch, tuThien, ch, nl, ch, tt, ch, cp, ch, sc, ch, nl, ch, tt, ch, cp, ch, tn, ch, nl, ch, tt],
  getResultStep: function getResultStep(number) {
    var index = number % this.ratRaceSteps.length - 1;

    if (index < 0) {
      index = 23;
    }

    var type = this.ratRaceSteps[index];
    var value = {};

    if (type === ch) {
      var ran = Math.round(Math.random() * (coHoiList.length - 1));
      value = coHoiList[ran];
    }

    return {
      type: type,
      val: value
    };
  },
  batDongSanList: {
    chBds2Br1Ba: chBds2Br1Ba,
    chBds2Br1BaNH: chBds2Br1BaNH,
    chBds2Br1BaCu: chBds2Br1BaCu,
    chBds3Br2Ba: chBds3Br2Ba,
    chBds3Br2BaNH: chBds3Br2BaNH,
    chBds3Br2BaTv: chBds3Br2BaTv,
    chBds10MauDat: chBds10MauDat,
    plex8_1: plex8_1
  },
  coHoiList: coHoiList,
  jobs: [{
    name: 'Nhân viên cảnh sát',
    luong: 3500,
    laiNganHang: 0,
    laiCoPhan: 0,
    thuNhapThuDong: 0,
    tongThuNhap: 3000,
    thue: 580,
    traLaiVayMuaNha: 400,
    traTienVayHoc: 0,
    traTienVayMuaXe: 100,
    traTienVayTinDung: 60,
    chiPhiMuaSam: 50,
    chiPhiKhac: 690,
    chiPhiNuoi1Con: 160,
    soCon: 0,
    chiPhiNuoiCon: 0,
    vayNganHang: 0,
    laiVayNganHang: 0,
    khoanNoKhac: 0,
    tongChiPhi: 1880,
    dongTien: 1120,
    number: 1,
    lastDice: 1,
    tuThien: 1,
    tienMat: 0,
    batDongSans: [],
    congTys: [],
    chungKhoans: [],
    tienNoMuaNha: 20000,
    tongTienHocPhi: 0,
    tienNoMuaXe: 4000,
    tienNoTheTinDung: 700,
    tienNoMuaBanLe: 1000,
    noNganHang: 0
  }]
};

/***/ })

})
//# sourceMappingURL=cashflow.js.1a27d30380d3be4eaa00.hot-update.js.map