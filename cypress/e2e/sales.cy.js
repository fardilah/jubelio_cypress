import * as vars from '../variables/sales'
import {btn_minimize_tutorial_sidebar, penjualan_menu, transaksi_penjualan_submenu} from '../variables/footer-header-sidebar'

describe('Flow Sales', () => {
    beforeEach(() => {
        cy.login()
        cy.wait(5000)
        cy.get(penjualan_menu).eq(0).click({force: true})
        cy.get(transaksi_penjualan_submenu).click({force: true})
        cy.wait(5000)
        cy.get(btn_minimize_tutorial_sidebar).click()
    })

    it('Create Sales Dynamic', () => {
        cy.get(vars.btn_add_sales).click()
        cy.wait(1500)
        cy.get(vars.field_no_pesanan).type(`{selectall}{backspace}{selectall}{backspace} ${vars.no_pesanan_dynamic}`)
        // cy.get(field_no_pesanan).type('pesanan - auto - 1')
        cy.get(vars.field_pelanggan).click()
        cy.wait(1500)
        cy.get(vars.field_pelanggan).type(vars.pelanggan)
        cy.wait(1000)
        cy.get(vars.field_pelanggan).type("{downArrow}")
        cy.get(vars.field_pelanggan).type("{enter}")
        cy.get(vars.field_no_ref).click()
        cy.get(vars.field_pelanggan).should('have.value', vars.pelanggan)
        cy.get(vars.field_lokasi).type(vars.lokasi)
        cy.wait(1000)
        cy.get(vars.field_lokasi).type("{downArrow}")
        cy.get(vars.field_lokasi).type("{enter}")
        cy.get(vars.field_no_ref).click()
        cy.get(vars.field_lokasi).should('have.value', vars.lokasi)
        cy.get(vars.field_scan_product).type(`${vars.product_1} {enter}`)
        cy.wait(1500)
        
        cy.get("div[data-test-id='virtuoso-item-list']").contains(vars.product_1)
        cy.wait(2000)

        cy.get('div.title-card').find('button').contains('Simpan').click()

        cy.wait(3000)
        cy.url().should('include', '/sales/transactions/orders')
    })

    it('Edit Sales Dynamic (After Created)', () => {
        cy.get(vars.status_all).click()
        cy.wait(2000)
        cy.get(vars.field_cari_pesanan).type(vars.no_pesanan_dynamic)
        cy.get('div:has(button)').contains('button', 'Terapkan').click()
        cy.wait(2000)
        cy.get("table[id='table-content']").contains(vars.no_pesanan_dynamic).click()
        
        cy.wait(2000)
        cy.get(vars.btn_edit_sales).click()
        cy.wait(1000)
        cy.get(vars.field_no_pesanan).type(' - Edited')
        cy.get(vars.field_disc_lainnya).type(1500)
        cy.get(vars.field_ongkos_kirim).type(5000)
        cy.get(vars.field_disc_ongkos_kirim).type(2000)
        cy.get(vars.field_scan_product).type(`${vars.product_2} {enter}`)
        cy.wait(1500)

        cy.get("div[data-test-id='virtuoso-item-list']").contains(vars.product_2)
        cy.wait(2000)

        cy.get('div.title-card').find('button').contains('Simpan').click()

        cy.wait(3000)
        cy.url().should('include', '/sales/transactions/orders')
    })
})