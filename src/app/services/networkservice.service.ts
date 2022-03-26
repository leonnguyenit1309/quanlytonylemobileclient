import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NbMenuItem } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})


export class NetworkserviceService {



  MENU_ITEMS: NbMenuItem[]  = [
    {
      title: 'Quản Lý Mua Hàng',
      icon: 'shopping-cart-outline',
      link: '/pages/tables/danhsachsanpham',
      home: true,
      children: [
        {
          title: 'Sản Phẩm',
          link: '/pages/tables/danhsachsanpham',
        },
        {
          title: 'Sản Phẩm Đã Bán',
          link: '/pages/tables/quanlydanhsachsanphamdaban',
        },
        {
          title: 'Danh Sách Đơn Hàng',
          link: '/pages/tables/quanlydanhsachdonhang',
        },
      
      ]
    },
    {
      title: 'Quản Lý Thu Chi',
      icon: 'grid-outline',
      hidden: localStorage.getItem('role') != 'admin',
      children: [
        {
          title: 'Quản Lý Thu',
          link: '/pages/tables/quanlythu',
        },
        {
          title: 'Quản Lý Chi',
          link: '/pages/tables/quanlychi',
        },
        {
          title: 'Quản Lý Tổng Thu Chi',
          link: '/pages/tables/quanlythuchi',
        },
      ],
    },
    // {
    //   title: 'IoT Dashboard',
    //   icon: 'home-outline',
    //   link: '/pages/iot-dashboard',
    // },
    // {
    //   title: 'Quản Lý',
    //   group: true,
    //   hidden: localStorage.getItem('role') != 'admin'
    // },
  
    // {
    //   title: 'Layout',
    //   icon: 'layout-outline',
    //   children: [
    //     {
    //       title: 'Stepper',
    //       link: '/pages/layout/stepper',
    //     },
    //     {
    //       title: 'List',
    //       link: '/pages/layout/list',
    //     },
    //     {
    //       title: 'Infinite List',
    //       link: '/pages/layout/infinite-list',
    //     },
    //     {
    //       title: 'Accordion',
    //       link: '/pages/layout/accordion',
    //     },
    //     {
    //       title: 'Tabs',
    //       pathMatch: 'prefix',
    //       link: '/pages/layout/tabs',
    //     },
    //   ],
    // },
    // {
    //   title: 'Forms',
    //   icon: 'edit-2-outline',
    //   children: [
    //     {
    //       title: 'Form Inputs',
    //       link: '/pages/forms/inputs',
    //     },
    //     {
    //       title: 'Form Layouts',
    //       link: '/pages/forms/layouts',
    //     },
    //     {
    //       title: 'Buttons',
    //       link: '/pages/forms/buttons',
    //     },
    //     {
    //       title: 'Datepicker',
    //       link: '/pages/forms/datepicker',
    //     },
    //   ],
    // },
    // {
    //   title: 'UI Features',
    //   icon: 'keypad-outline',
    //   link: '/pages/ui-features',
    //   children: [
    //     {
    //       title: 'Grid',
    //       link: '/pages/ui-features/grid',
    //     },
    //     {
    //       title: 'Icons',
    //       link: '/pages/ui-features/icons',
    //     },
    //     {
    //       title: 'Typography',
    //       link: '/pages/ui-features/typography',
    //     },
    //     {
    //       title: 'Animated Searches',
    //       link: '/pages/ui-features/search-fields',
    //     },
    //   ],
    // },
    // {
    //   title: 'Modal & Overlays',
    //   icon: 'browser-outline',
    //   children: [
    //     {
    //       title: 'Dialog',
    //       link: '/pages/modal-overlays/dialog',
    //     },
    //     {
    //       title: 'Window',
    //       link: '/pages/modal-overlays/window',
    //     },
    //     {
    //       title: 'Popover',
    //       link: '/pages/modal-overlays/popover',
    //     },
    //     {
    //       title: 'Toastr',
    //       link: '/pages/modal-overlays/toastr',
    //     },
    //     {
    //       title: 'Tooltip',
    //       link: '/pages/modal-overlays/tooltip',
    //     },
    //   ],
    // },
    // {
    //   title: 'Extra Components',
    //   icon: 'message-circle-outline',
    //   children: [
    //     {
    //       title: 'Calendar',
    //       link: '/pages/extra-components/calendar',
    //     },
    //     {
    //       title: 'Progress Bar',
    //       link: '/pages/extra-components/progress-bar',
    //     },
    //     {
    //       title: 'Spinner',
    //       link: '/pages/extra-components/spinner',
    //     },
    //     {
    //       title: 'Alert',
    //       link: '/pages/extra-components/alert',
    //     },
    //     {
    //       title: 'Calendar Kit',
    //       link: '/pages/extra-components/calendar-kit',
    //     },
    //     {
    //       title: 'Chat',
    //       link: '/pages/extra-components/chat',
    //     },
    //   ],
    // },
    // {
    //   title: 'Maps',
    //   icon: 'map-outline',
    //   children: [
    //     {
    //       title: 'Google Maps',
    //       link: '/pages/maps/gmaps',
    //     },
    //     {
    //       title: 'Leaflet Maps',
    //       link: '/pages/maps/leaflet',
    //     },
    //     {
    //       title: 'Bubble Maps',
    //       link: '/pages/maps/bubble',
    //     },
    //     {
    //       title: 'Search Maps',
    //       link: '/pages/maps/searchmap',
    //     },
    //   ],
    // },
    {
      title: 'Thống Kê & Báo Cáo',
      icon: 'pie-chart-outline',
      children: [
        {
          title: 'Echarts (Tham khảo lựa mẫu)',
          link: '/pages/charts/echarts',
        },
        {
          title: 'Charts.js (Tham khảo lựa mẫu)',
          link: '/pages/charts/chartjs',
        },
        {
          title: 'Thống Kê',
          link: '/pages/charts/d3',
        },
        {
          title: 'Báo Cáo Thuế',
          link: '/pages/tables/baocaothue',
        }
      ],
    },
    // {
    //   title: 'Editors',
    //   icon: 'text-outline',
    //   children: [
    //     {
    //       title: 'TinyMCE',
    //       link: '/pages/editors/tinymce',
    //     },
    //     {
    //       title: 'CKEditor',
    //       link: '/pages/editors/ckeditor',
    //     },
    //   ],
    // },
    // {
    //   title: 'Quản Lý Khách Hàng',
    //   icon: 'grid-outline',
    //   hidden: localStorage.getItem('role') != 'admin',
    //   children: [
    //     // {
    //     //   title: 'Smart Table',
    //     //   link: '/pages/tables/smart-table',
    //     // },
    //     {
    //       title: 'Danh Sách Khách Hàng',
    //       link: '/pages/tables/smart-table-nguoidung',
    //     },
  
  
    //   ],
    // },
    // {
    //   title: 'Quản Lý Đơn Hàng',
    //   icon: 'grid-outline',
    //   hidden: localStorage.getItem('role') != 'admin',
    //   children: [
    //     // {
    //     //   title: 'Smart Table',
    //     //   link: '/pages/tables/smart-table',
    //     // },
    //     {
    //       title: 'Tạo Đơn Hàng Cho Đại Lý',
    //       link: '/pages/tables/smart-table-tao-don-hang-cho-dai-ly',
    //     },
    //     {
    //       title: 'Danh Sách Đơn Hàng Chờ Xử Lý',
    //       link: '/pages/tables/smart-table-don-hang-dang-xu-ly-admin',
    //     },
    //     {
    //       title: 'Đơn Hàng Đã Hoàn Thành',
    //       link: '/pages/tables/smart-table-don-hang-da-xu-ly-thanh-cong',
    //     },
  
    //   ],
    // },
    // {
    //   title: 'Giỏ Hàng',
    //   icon: 'grid-outline',
    //   hidden: localStorage.getItem('role') != 'dailycap1' && localStorage.getItem('role') != 'dailycap2',
    //   children: [
    //     // {
    //     //   title: 'Smart Table',
    //     //   link: '/pages/tables/smart-table',
    //     // },
    //     {
    //       title: 'Đơn Hàng Mới',
    //       link: '/pages/tables/smart-table-danh-sach-don-hang-moi',
    //     },
    //     {
    //       title: 'Danh Sách Đơn Hàng Đang Xử lý',
    //       link: '/pages/tables/smart-table-don-hang-dang-xu-ly-nguoi-mua',
    //     },
    //     {
    //       title: 'Đơn Hàng Đã Hoàn Thành',
    //       link: '/pages/tables/smart-table-da-xu-ly-nguoi-mua',
    //     },
    //   ],
    // },
    {
      title: 'Quản Lý Cấu Hình Máy',
      icon: 'grid-outline',
      hidden: localStorage.getItem('role') != 'admin',
      children: [
        // {
        //   title: 'Smart Table',
        //   link: '/pages/tables/smart-table',
        // },
        // {
        //   title: 'Quản Lý Loại Máy',
        //   link: '/pages/tables/smart-table-loai-may',
        // },
        // {
        //   title: 'Quản Lý Đời Máy',
        //   link: '/pages/tables/smart-table-doi-may',
        // },
        // {
        //   title: 'Quản Lý Màn Hình',
        //   link: '/pages/tables/smart-table-man-hinh',
        // },
        // {
        //   title: 'Quản Lý Chip',
        //   link: '/pages/tables/smart-table-chip',
        // },
        {
          title: 'Quản Lý Nhóm Sản Phẩm',
          link: '/pages/tables/nhomsanpham',
        },
        {
          title: 'Quản Lý Tên Sản Phẩm',
          link: '/pages/tables/tensanpham',
        },
        {
          title: 'Quản Lý Dung Lượng',
          link: '/pages/tables/dungluong',
        },
        {
          title: 'Quản Lý Loại Sản Phẩm',
          link: '/pages/tables/loaisanpham',
        },
        {
          title: 'Quản Lý Màu Sắc',
          link: '/pages/tables/mau',
        },
        {
          title: 'Quản Lý Phiên Bản',
          link: '/pages/tables/phienban',
        },
        {
          title: 'Quản Lý Danh Sách Sản Phẩm',
          link: '/pages/tables/quanlydanhsachsanpham',
        },
        // {
        //   title: 'Quản Lý Sản Phẩm Đã Bán',
        //   link: '/pages/tables/quanlydanhsachsanphamdaban',
        // },
        // {
        //   title: 'Quản Lý Danh Sách Đơn Hàng',
        //   link: '/pages/tables/quanlydanhsachdonhang',
        // },
        // {
        //   title: 'Danh Sách Sản Phẩm',
        //   link: '/pages/tables/danhsachsanpham',
        // },
        // {
        //   title: 'Quản Lý Ram',
        //   link: '/pages/tables/smart-table-ram',
        // },
        // {
        //   title: 'Quản Lý Ổ Cứng',
        //   link: '/pages/tables/smart-table-o-cung',
        // },
        // {
        //   title: 'Tree Grid',
        //   link: '/pages/tables/tree-grid',
        // },
      ],
    },
    
    // {
    //   title: 'Quản Lý Máy',
    //   icon: 'grid-outline',
    //   hidden: localStorage.getItem('role') != 'admin',
    //   children: [
    //     // {
    //     //   title: 'Smart Table',
    //     //   link: '/pages/tables/smart-table',
    //     // },
    //     {
    //       title: 'Quản Lý Máy',
    //       link: '/pages/tables/smart-table-may',
    //     },
    //     {
    //       title: 'Quản Lý Máy Đã Bán',
    //       link: '/pages/tables/smart-table-may-da-ban',
    //     },
  
    //   ],
    // },
    // {
    //   title: 'Miscellaneous',
    //   icon: 'shuffle-2-outline',
    //   children: [
    //     {
    //       title: '404',
    //       link: '/pages/miscellaneous/404',
    //     },
    //   ],
    // },
   
        {
          title: 'Đăng Nhập',
          icon: 'lock-outline',
          link: '/pages/tables/login',
          hidden: localStorage.getItem('role') != null,
        },
        // {
        //   title: 'Register',
        //   link: '/auth/register',
        // },
        // {
        //   title: 'Request Password',
        //   link: '/auth/request-password',
        // },
       
      

    {
      title: 'Đổi Mật Khẩu',
      icon: 'lock-outline',
      link: '/pages/tables/changepass',
      hidden: localStorage.getItem('role') == null,
    },
    {
      title: 'Đăng Xuất',
      icon: 'lock-outline',
      link: '/pages/tables/logout',
      hidden: localStorage.getItem('role') == null,
    },
  ];
  



  role="";

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllMobile() {
    const getAllMobile = 'https://salemobileserver.herokuapp.com/detail';
    return this.httpClient.get<any>(getAllMobile);
  }

  quanlymay(data): Observable<any> {
    const quanlymayAPI = `https://salemobileserver.herokuapp.com/quanlymay`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  loaimay(data): Observable<any> {
    const loaimayAPI = `https://salemobileserver.herokuapp.com/loaimay`;
    return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions)
  }
  danhsachdonhang(data): Observable<any> {
    const danhsachdonhangAPI = `https://salemobileserver.herokuapp.com/danhsachdonhang`;
    return this.httpClient.post<any>(danhsachdonhangAPI, data, this.httpOptions)
  }
  danhsachdonhangtemp(data): Observable<any> {
    const danhsachdonhangAPI = `https://salemobileserver.herokuapp.com/danhsachdonhangtemp`;
    return this.httpClient.post<any>(danhsachdonhangAPI, data, this.httpOptions)
  }
  getdanhsachdonhangtheonguoimua(data): Observable<any> {
    const danhsachdonhangAPI = `https://salemobileserver.herokuapp.com/getdanhsachdonhangtheonguoimua`;
    return this.httpClient.post<any>(danhsachdonhangAPI, data, this.httpOptions)
  }
  getdanhsachdonhangtheonguoimuareal(data): Observable<any> {
    const danhsachdonhangAPI = `https://salemobileserver.herokuapp.com/getdanhsachdonhangtheonguoimuareal`;
    return this.httpClient.post<any>(danhsachdonhangAPI, data, this.httpOptions)
  }
  doimay(data): Observable<any> {
    const doimayAPI = `https://salemobileserver.herokuapp.com/doimay`;
    return this.httpClient.post<any>(doimayAPI, data, this.httpOptions)
  }

  manhinh(data): Observable<any> {
    const manhinhAPI = `https://salemobileserver.herokuapp.com/manhinh`;
    return this.httpClient.post<any>(manhinhAPI, data, this.httpOptions)
  }

  chip(data): Observable<any> {
    const chipAPI = `https://salemobileserver.herokuapp.com/chip`;
    return this.httpClient.post<any>(chipAPI, data, this.httpOptions)
  }

  ram(data): Observable<any> {
    const ramAPI = `https://salemobileserver.herokuapp.com/ram`;
    return this.httpClient.post<any>(ramAPI, data, this.httpOptions)
  }

  ocung(data): Observable<any> {
    const ocungAPI = `https://salemobileserver.herokuapp.com/ocung`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }
  user(data): Observable<any> {
    const userAPI = `https://salemobileserver.herokuapp.com/user`;
    return this.httpClient.post<any>(userAPI, data, this.httpOptions)
  }
  deleteuser(data): Observable<any> {
    const userAPI = `https://salemobileserver.herokuapp.com/deleteuser`;
    return this.httpClient.post<any>(userAPI, data, this.httpOptions)
  }
  deletedanhsachdonhang(data): Observable<any> {
    const userAPI = `https://salemobileserver.herokuapp.com/deletedanhsachdonhang`;
    return this.httpClient.post<any>(userAPI, data, this.httpOptions)
  }
  deletedanhsachdonhangreal(data): Observable<any> {
    const userAPI = `https://salemobileserver.herokuapp.com/deletedanhsachdonhangreal`;
    return this.httpClient.post<any>(userAPI, data, this.httpOptions)
  }
  deletedanhsachdonhangsanphamreal(data): Observable<any> {
    const userAPI = `https://salemobileserver.herokuapp.com/deletedanhsachdonhangsanphamreal`;
    return this.httpClient.post<any>(userAPI, data, this.httpOptions)
  }
  getquanlymaytheomasanpham(data): Observable<any> {
    const userAPI = `https://salemobileserver.herokuapp.com/getquanlymaytheomasanpham`;
    return this.httpClient.post<any>(userAPI, data, this.httpOptions)
  }
  getloaimay() {
    const get = 'https://salemobileserver.herokuapp.com/getloaimay';
    return this.httpClient.get<any>(get);
  }
  getdoimay() {
    const get = 'https://salemobileserver.herokuapp.com/getdoimay';
    return this.httpClient.get<any>(get);
  }
  getmanhinh() {
    const get = 'https://salemobileserver.herokuapp.com/getmanhinh';
    return this.httpClient.get<any>(get);
  }
  getchip() {
    const get = 'https://salemobileserver.herokuapp.com/getchip';
    return this.httpClient.get<any>(get);
  }
  getram() {
    const get = 'https://salemobileserver.herokuapp.com/getram';
    return this.httpClient.get<any>(get);
  }
  getocung() {
    const get = 'https://salemobileserver.herokuapp.com/getocung';
    return this.httpClient.get<any>(get);
  }
  getquanlymay() {
    const get = 'https://salemobileserver.herokuapp.com/getquanlymay';
    return this.httpClient.get<any>(get);
  }
  getdanhsachdonhang() {
    const get = 'https://salemobileserver.herokuapp.com/getdanhsachdonhang';
    return this.httpClient.get<any>(get);
  }
  getdanhsachdonhangtemp() {
    const get = 'https://salemobileserver.herokuapp.com/getdanhsachdonhangtemp';
    return this.httpClient.get<any>(get);
  }
  getalluser() {
    const get = 'https://salemobileserver.herokuapp.com/getalluser';
    return this.httpClient.get<any>(get);
  }

  quyennhanvien(data): Observable<any> {
    const quyennhanvienAPI = `https://salemobileserver.herokuapp.com/authen`;
    return this.httpClient.post<any>(quyennhanvienAPI, data, this.httpOptions)
  }

  getdanhsachdonhangtheomadonhang(data): Observable<any> {
    const API = `https://salemobileserver.herokuapp.com/getdanhsachdonhangtheomadonhang`;
    return this.httpClient.post<any>(API, data, this.httpOptions)
  }

  deleteloaimay(data): Observable<any> {
    const loaimayAPI = `https://salemobileserver.herokuapp.com/deleteloaimay`;
    return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions)
  }

  deletedoimay(data): Observable<any> {
    const doimayAPI = `https://salemobileserver.herokuapp.com/deletedoimay`;
    return this.httpClient.post<any>(doimayAPI, data, this.httpOptions)
  }

  deletemanhinh(data): Observable<any> {
    const manhinhAPI = `https://salemobileserver.herokuapp.com/deletemanhinh`;
    return this.httpClient.post<any>(manhinhAPI, data, this.httpOptions)
  }

  deletechip(data): Observable<any> {
    const chipAPI = `https://salemobileserver.herokuapp.com/deletechip`;
    return this.httpClient.post<any>(chipAPI, data, this.httpOptions)
  }

  deleteram(data): Observable<any> {
    const ramAPI = `https://salemobileserver.herokuapp.com/deleteram`;
    return this.httpClient.post<any>(ramAPI, data, this.httpOptions)
  }

  deleteocung(data): Observable<any> {
    const ocungAPI = `https://salemobileserver.herokuapp.com/deleteocung`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }
  deletequanlymay(data): Observable<any> {
    const quanlymayAPI = `https://salemobileserver.herokuapp.com/deletequanlymay`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  gettonggiatientemp(data): Observable<any> {
    const quanlymayAPI = `https://salemobileserver.herokuapp.com/gettonggiatientemp`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  gettonggiatienreal(data): Observable<any> {
    const quanlymayAPI = `https://salemobileserver.herokuapp.com/gettonggiatienreal`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  updatepass(data): Observable<any> {
    const API = `https://salemobileserver.herokuapp.com/updatepassword`;
    return this.httpClient.put<any>(API, data, this.httpOptions)
  }
  resetpassword(data): Observable<any> {
    const API = `https://salemobileserver.herokuapp.com/resetpassword`;
    return this.httpClient.put<any>(API, data, this.httpOptions)
  }
  updatetrangthaidonhang(data): Observable<any> {
    const API = `https://salemobileserver.herokuapp.com/updatetrangthaidonhang`;
    return this.httpClient.put<any>(API, data, this.httpOptions)
  }
  updatequanlymaynguoimua(data): Observable<any> {
    const API = `https://salemobileserver.herokuapp.com/updatequanlymaynguoimua`;
    return this.httpClient.put<any>(API, data, this.httpOptions)
  }

  //quanlytonylemobile

  getdanhsachsanphamdabanquanlymobile() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachsanphamdabanquanlymobile';
    return this.httpClient.get<any>(get);
  }
  getdanhsachdonhangquanlymobiletransaction(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobiletransaction`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  getdanhsachdonhangquanlymobile() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobile';
    return this.httpClient.get<any>(get);
  }
  getdanhsachsanphamdabanquanlymobiletransaction(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/getdanhsachsanphamdabanquanlymobiletransaction`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  getdanhsachdonhangquanlymobileid(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobileid`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  getnhomsanpham() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getnhomsanpham';
    return this.httpClient.get<any>(get);
  }
  nhomsanpham(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/nhomsanpham`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deletenhomsanpham(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletenhomsanpham`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }


  gettensanpham() {
    const get = 'https://quanlytonylemobile.herokuapp.com/gettensanpham';
    return this.httpClient.get<any>(get);
  }
  tensanpham(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/tensanpham`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deletetensanpham(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletetensanpham`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }

  getdungluong() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getdungluong';
    return this.httpClient.get<any>(get);
  }
  dungluong(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/dungluong`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deletedungluong(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletedungluong`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }

  getloaisanpham() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getloaisanpham';
    return this.httpClient.get<any>(get);
  }
  getsanpham(data) {
    const getsanpham = 'https://quanlytonylemobile.herokuapp.com/getsanpham';
    return this.httpClient.post<any>(getsanpham, data, this.httpOptions)
  }
  taodanhsachdonhang(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/taodanhsachdonhang`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  danhsachsanphamdaban(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/danhsachsanphamdaban`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  updateimeisanphamtonkho(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/updateimeisanphamtonkho`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  loaisanpham(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/loaisanpham`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deleteloaisanpham(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deleteloaisanpham`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }

  getmau() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getmau';
    return this.httpClient.get<any>(get);
  }
  mau(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/mau`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deletemau(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletemau`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }

  getquanlychi() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getquanlychi';
    return this.httpClient.get<any>(get);
  }
  quanlychi(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/quanlychi`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deletequanlychi(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletequanlychi`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }
  editquanlychi(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/updatequanlychi`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }

  getquanlythu() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getquanlythu';
    return this.httpClient.get<any>(get);
  }
  quanlythu(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/quanlythu`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deletequanlythu(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletequanlythu`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }
  editquanlythu(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/updatequanlythu`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }

  getphienban() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getphienban';
    return this.httpClient.get<any>(get);
  }
  phienban(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/phienban`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deletephienban(data): Observable<any> {
    const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletephienban`;
    return this.httpClient.post<any>(ocungAPI, data, this.httpOptions)
  }

  getsanphamtonkho() {
    const get = 'https://quanlytonylemobile.herokuapp.com/getsanphamtonkho';
    return this.httpClient.get<any>(get);
  }
  sanphamtonkho(data): Observable<any> {
    const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/sanphamtonkho`;
    return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions)
  }
  deletesanphamtonkho(data): Observable<any> {
    const sanphamtonkho = `https://quanlytonylemobile.herokuapp.com/deletesanphamtonkho`;
    return this.httpClient.post<any>(sanphamtonkho, data, this.httpOptions)
  }
  updatesanpham(data): Observable<any> {
    const sanphamtonkho = `https://quanlytonylemobile.herokuapp.com/updatesanpham`;
    return this.httpClient.post<any>(sanphamtonkho, data, this.httpOptions)
  }
}
