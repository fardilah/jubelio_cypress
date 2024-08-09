import {id} from '../variables/generator'

//Pre-Condition
export const btn_add_product = "button:contains('Tambah Baru')"
export const btn_product_satuan = "p:contains('Satuan')"

//Product - Index
export const filter_nama = "input[placeholder='Cari nama & SKU']"
export const btn_terapkan_filter = "btn:contains('Terapkan')"

export const btn_edit_product = "button:contains('Edit')"

//Product - Section
export const detail_produk = "h2:contains('Detail Produk')"
export const informasi_penjualan_dan_pembelian = "h2:contains('Informasi Penjualan dan Pembelian')"
export const informasi_pengiriman = "h2:contains('Informasi Pengiriman')"
export const gambar_produk = "h2:contains('Gambar Produk')"
export const combinedProductName = 'Product ' + id;
export const sku = 'SKUPRODUCT ' + id
export const existingProduct = 'Produk 1'

//Product - Detail Product
export const field_nama_product = "input[name='name']"
export const btn_category = "button:contains('Pilih Kategori')"
export const btn_save_category = "button:contains('Simpan')"
export const category_1 = "span:contains('Aksesoris Fashion')" //e.g
export const category_2 = "span:contains('Aksesoris & Set Perhiasan')"
export const category_3 = "span:contains('Bordir')"
export const no_brand = "input[name='no_brand']"
export const field_sku = "input[name='sku']"
export const field_barcode = "input[name='barcode']"
export const consignment_product = "input[name='consignment_product']"
export const field_desc_product = "div[class='notranslate public-DraftEditor-content']"

//Product - Informasi Penjualan dan Pembelian
export const price_penjualan = "input[name='default_price']"

//Product - Informasi Pengiriman
export const berat_paket = "input[name='package_weight']"

//Product - Gambar Produk
export const btn_upload = "button:contains('Upload')"
export const checkbox_image = "input[class*='PrivateSwitchBase-input']"