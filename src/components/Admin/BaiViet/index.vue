<template>
    <div class="row">
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="mt-2">Thêm Bài Viết</h4>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label for="">Tên Bài Viết</label>
                        <input v-model="bai_viet_create.ten_bai_viet" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2 mt-2">
                        <label for="">Mô Tả Ngắn</label>
                        <textarea v-model="bai_viet_create.mo_ta_ngan" name="" id="" cols="30" rows="5" class="form-control"></textarea>
                    </div>
                    <div class="mb-2 mt-2">
                        <label for="">Mô Tả Chi Tiết</label>
                        <textarea v-model="bai_viet_create.mo_ta_chi_tiet" name="" id="" cols="30" rows="5" class="form-control"></textarea>
                    </div>
                    <div class="mb-2 mt-2">
                        <label for="">Ảnh</label>
                        <input v-model="bai_viet_create.hinh_anh" type="text" class="form-control">
                    </div>
                    <div class="mb-2 mt-2">
                        <label for="">Tình Trạng</label>
                        <select v-model="bai_viet_create.tinh_trang" class="form-control mt-2">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoiBaiViet()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Danh Sách Bài Viết</h5>
                    <hr />
                    <div class="accordion" id="accordionExample">
                        <template v-for="(v, k) in ds_bai_viet" :key="k">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button btn-primary collapsed" type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#collapseOne' + v.id" aria-expanded="true" aria-controls="collapseOne">
                                        Bài Viết Số {{ k + 1 }}
                                    </button>
                                </h2>
                                <div :id="'collapseOne' + v.id" class="accordion-collapse collapse"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="text-nowrap align-middle"> Tên Bài Viết</th>
                                                    <td>{{ v.ten_bai_viet }}</td>

                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Mô tả ngắn</th>
                                                    <td>{{ v.mo_ta_ngan }}</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Mô tả Chi Tiết</th>
                                                    <td>{{ v.mo_ta_chi_tiet }}</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Ảnh</th>
                                                    <td class="text-center">
                                                        <img v-bind:src="v.hinh_anh"
                                                            class="img-fluid" alt="..."
                                                            style="width: 300px; height: 200px;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="100" class="text-center align-middle">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <button v-on:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success text-nowrap w-100">Hoạt Động</button>
                                                                <button v-on:click="doiTrangThai(v)" v-else class="btn btn-warning text-nowrap w-100">Tạm Dừng</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="100" class="text-center align-middle" rowspan="100">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <button v-on:click="Object.assign(bai_viet_update, v)" class="btn btn-primary text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#updateModal"><i
                                                                        class="fa-solid fa-pen-to-square"></i></button>

                                                            </div>
                                                            <div class="col-6">
                                                                <button v-on:click="id_can_xoa = v.id" class="btn btn-danger text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal"><i
                                                                        class="fa-solid fa-trash"></i></button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true" style="display: none;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cập Nhật Bài Viết</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-2">
                                <label for="">Tên Bài Viết</label>
                                <input v-model="bai_viet_update.ten_bai_viet" type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2 mt-2">
                                <label for="">Mô Tả Ngắn</label>
                                <textarea v-model="bai_viet_update.mo_ta_ngan" name="" id="" cols="30" rows="5" class="form-control"></textarea>
                            </div>
                            <div class="mb-2 mt-2">
                                <label for="">Mô Tả Chi Tiết</label>
                                <textarea v-model="bai_viet_update.mo_ta_chi_tiet" name="" id="" cols="30" rows="5" class="form-control"></textarea>
                            </div>
                            <div class="mb-2 mt-2">
                                <label for="">Ảnh</label>
                                <input v-model="bai_viet_update.hinh_anh" type="text" class="form-control">
                            </div>
                            <div class="mb-2 mt-2">
                                <label for="">Tình Trạng</label>
                                <select v-model="bai_viet_update.tinh_trang" class="form-control mt-2">
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Tạm Dừng</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button v-on:click="capNhatBaiViet()" type="button" class="btn btn-primary " data-bs-dismiss="modal">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true" style="display: none;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Xóa Bài Viết</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show">
                                <div class="text-dark">Bạn có chắc chắn xoá bài viết
                                    này không!</div><br>
                                <b class="text-danger">Lưu ý: </b><br>
                                Nếu xoá bài viết này sẽ mất vĩnh viễn nễu bạn xoá nó

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button v-on:click="xoaBaiViet()" type="button" class="btn btn-danger " data-bs-dismiss="modal">Xoá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import baseRequest from '../../../core/baseRequest';
export default {
    data() {
        return {
            ds_bai_viet: [],
            bai_viet_create: {},
            bai_viet_update: {},
            id_can_xoa: '',
        }
    },
    mounted() {
        this.layDuLieu();
    },
    methods: {
        layDuLieu() {
            baseRequest
                .get('bai-viet/data')
                .then((res) => {
                    this.ds_bai_viet = res.data.bai_viet;
                })
        },
        themMoiBaiViet() {
            baseRequest
                .post("bai-viet/create", this.bai_viet_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    }
                });
        },
        xoaBaiViet() {
            baseRequest
                .delete("bai-viet/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    }
                });
        },
        capNhatBaiViet() {
            baseRequest
                .put("bai-viet/update", this.bai_viet_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    }
                });
        },
        doiTrangThai(xxx) {
            baseRequest
                .put('bai-viet/doi-trang-thai', xxx)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.layDuLieu();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>