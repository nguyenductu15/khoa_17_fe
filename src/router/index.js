import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraAdmin from "./kiemTraAdmin";

const routes = [
    // loai-phong
    {
        path: '/admin/loai-phong',
        component: () => import('../components/Admin/LoaiPhong/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    // dich vu
    {
        path: '/admin/dich-vu',
        component: () => import('../components/Admin/DichVu/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // phong
    {
        path: '/admin/quan-ly-phong',
        component: () => import('../components/Admin/Phong/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // chi tiet thue phong
    {
        path: '/admin/chi-tiet-thue-phong',
        component: () => import('../components/Admin/ChiTietThuePhong/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // Tinh Trang Phong
    {
        path: '/admin/tinh-trang-phong',
        component: () => import('../components/Admin/TinhTrangPhong/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // nhan-vien
    {
        path: '/admin/nhan-vien',
        component: () => import('../components/Admin/NhanVien/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // slide
    {
        path: '/admin/slide',
        component: () => import('../components/Admin/Slide/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // Review
    {
        path: '/admin/review',
        component: () => import('../components/Admin/Review/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // Phân Quyền
    {
        path: '/admin/phan-quyen',
        component: () => import('../components/Admin/PhanQuyen/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // Admin dang nhap
    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: {layout: 'auth'}
    },

    {
        path: '/admin/khach-hang',
        component: () => import('../components/Admin/KhachHang/index.vue'),
        beforeEnter: kiemTraAdmin
    },

    // HomePage
    {
        path: '/',
        component: () => import('../components/Client/HomePage/index.vue'),
        meta: {layout: 'client'}
    },
    // Chi tiet phong
    {
        path: '/chi-tiet-phong',
        component: () => import('../components/Client/ChiTietPhong/index.vue'),
        meta: {layout: 'client'}
    },
    // Loai phong
    {
        path: '/dat-phong',
        component: () => import('../components/Client/LoaiPhong/index.vue'),
        meta: {layout: 'client'},
        name: "datPhong",
        props: true
    },
    {
        path: '/admin/bai-viet',
        component: () => import('../components/Admin/BaiViet/index.vue'),
        beforeEnter: kiemTraAdmin
    },

    {
        path: '/tim-loai-phong',
        component: () => import('../components/Client/TimLoaiPhong/index.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/danh-sach-phong',
        component: () => import('../components/Client/DanhSachPhong/index.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/bai-viet',
        component: () => import('../components/Client/BaiViet/index.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/khach-hang/dang-ky',
        component: () => import('../components/Client/DangKy/index.vue'),
        meta: {layout: 'auth'}
    },

    {
        path: '/khach-hang/dang-nhap',
        component: () => import('../components/Client/DangNhap/index.vue'),
        meta: {layout: 'auth'}
    },

    {
        path: '/test',
        component: () => import('../components/Admin/Test/index.vue'),
        meta: {layout: 'auth'}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router