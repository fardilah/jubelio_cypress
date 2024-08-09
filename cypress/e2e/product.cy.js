import * as vars from '../variables/product'
import {btn_minimize_tutorial_sidebar, katalog_menu, product_submenu} from '../variables/footer-header-sidebar'

describe('Flow Product', () => {
    beforeEach(() => {
        cy.login()
        cy.wait(5000)
        cy.get(katalog_menu).click({force: true})
        cy.get(product_submenu).click({force: true})
        cy.wait(5000)
        cy.get(btn_minimize_tutorial_sidebar).click()
    })

    it('Create Product Dynamic', () => {
        cy.get(vars.btn_add_product).click()
        cy.get(vars.btn_product_satuan).click()
        cy.get(vars.field_nama_product).type(vars.combinedProductName)
        // cy.get(btn_category).click()
        cy.get('div.box-content').find('button').contains('Pilih Kategori').click({force: true});
        cy.wait(3000)
        cy.get(vars.category_1).click()
        cy.get(vars.category_2).click()
        cy.get(vars.category_3).click()
        cy.wait(1500)
        cy.get("div[role='dialog']").within( ()=> {
            cy.get(vars.btn_save_category).click()
        })
        cy.get(vars.no_brand).click()
        cy.get(vars.field_sku).type(vars.sku)
        cy.get(vars.field_desc_product).type('test desc product harus ampe 30 karakter buat panjangnya masuk validasi')

        cy.get(vars.informasi_penjualan_dan_pembelian).click()
        cy.get(vars.price_penjualan).type('10000')

        cy.get(vars.informasi_pengiriman).click()
        cy.get(vars.berat_paket).type(500)

        cy.get(vars.gambar_produk).click()
        cy.get(vars.btn_upload).click()
        cy.get('input[type="file"]').selectFile('cypress/files/image2.jpeg', {force: true})
        cy.wait(3000)
        cy.get(vars.checkbox_image).eq(0).click()
        cy.get('div.title-card').find('button').contains('Simpan').click()
        
        cy.wait(5000)
        cy.url().should('include', '/catalog/items/master')
    })

    it('Edit Product Dynamic (After Created)', () => {
        cy.get(vars.filter_nama).type(vars.combinedProductName)
        cy.get('div:has(button)').contains('button', 'Terapkan').click()

        cy.contains(vars.combinedProductName)
        .parents('div')           
        .find('img')            
        .click()
        cy.wait(3000)

        cy.get('div.title-card').find('button').contains('Edit').click()
        cy.wait(3000)

        cy.get(vars.field_nama_product).type(' - Edited')
        cy.get(vars.field_sku).type(' - Edited')

        cy.get('div.title-card').find('button').contains('Simpan').click()
        
        cy.wait(3000)
        cy.url().should('include', '/catalog/items/master')
    })

    it('Edit Product Static (Existing)', () => {
        cy.get(vars.filter_nama).type(vars.existingProduct)
        cy.get('div:has(button)').contains('button', 'Terapkan').click()

        cy.contains(vars.existingProduct)
        .parents('div')           
        .find('img')            
        .click()
        cy.wait(3000)

        cy.get('div.title-card').find('button').contains('Edit').click()
        cy.wait(3000)

        cy.get('div.title-card').find('button').contains('Simpan').click()
        
        cy.wait(3000)
        cy.url().should('include', '/catalog/items/master')
    })
})