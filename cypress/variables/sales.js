import {id} from '../variables/generator'

//Pre-Condition
export const btn_add_sales = "button:contains('Tambah Baru')"

//Sales - Add / Edit
export const field_no_pesanan = "input[name='salesorder_no']"
export const field_pelanggan = "input[placeholder='Pilih pelanggan']"
export const field_lokasi = "input[placeholder='Pilih lokasi']"
export const btn_add_list_product = "button:contains('Tambah Baru')"
export const field_scan_product = "input[placeholder='Scan produk']"
export const btn_simpan = "button:contains('Simpan')"
export const field_disc_lainnya = "input[name='add_disc']"
export const field_ongkos_kirim = "input[name='shipping_cost']"
export const field_disc_ongkos_kirim = "input[name='shipping_cost_discount']"
export const field_no_ref = "input[name='ref_no']"

export const no_pesanan_dynamic = "pesanan - auto - " + id //dynamic
export const pelanggan = "Akulaku" //static
export const lokasi = "Pusat" //static
export const product_1 = "SKUPRODUCT"
export const product_2 = "SKUPRODUCT750798"
export const product_3 = "SKUPRODUCT 25983"

//Sales - Index
export const field_cari_pesanan = "input[placeholder='Cari pesanan']"
export const btn_terapkan_filter = "btn:contains('Terapkan')"
export const no_pesanan_static = "pesanan - manual - 1" //static
export const status_all = "button:contains('Semua')"
export const status_unpaid = "button:contains('Belum Dibayar')"
export const status_failed = "button:contains('Gagal Download')"
export const status_ready_to_process = "button:contains('Siap Proses')"

//Sales - Detail
export const no_pesanan_detail = "h4:contains('Pesanan - pesanan - manual - 1')" //static
export const btn_edit_sales = "button:contains('Edit')"