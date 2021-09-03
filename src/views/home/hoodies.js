let Layout = require('../layout')

module.exports = async function Hoodie({ ticket }) {
    let content = /*html*/`
        <div id=page>
            <div class=page-title><div><h1>Hoodie Fit Guide</h1></div></div>
            <div id="home" class="page-body narrow">
                <div>Choose from two hoodie options. Both are super soft, midweight fleece hoodies with kangaroo pockets. There is one color option per hoodie.</div>
                <div id="hoodie-fit">
                    <div>
                        <h2>Roomier Fit</h2>
                        <h3>American Apparel Flex Fleece Zip Hoodie</h3>
                        <p>Dark Heather Gray<br/>
                        50/50 cotton/poly blend</p>
                        <div><img src="/images/conf/modeled-gray.jpg" alt="gray hoodie on a model"/></div>
                        <p>Model is 5’4” and wearing size XS</p>
                        <div><img src="/images/conf/hoodie-color-gray.jpg" alt="gray hoodie color swatch"/></div>
                        <p>Color: dark heather gray</p>
                        <h4>Sizes</h4>
                        <p>The arms on this hoodie are longer and wider, creating a roomier fit.</p>
                        <table class="hoodie-sizing">
                            <tr><th>&nbsp;</th><th>XS</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>2XL</th></tr>
                            <tr><th>Chest</th><td>17</td><td>19</td><td>21</td><td>22</td><td>23 ½</td><td>25</td></tr>
                            <tr><th>Length</th><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td></tr>
                        </table>
                    </div>
                    <div>
                        <h2>Slimmer Fit</h2>
                        <h3>Bella+Canvas Tri-blend Full-Zip Hoodie</h3>
                        <p>Navy<br/>
                        50% polyester, 37.5% cotton, 12.5% rayon</p>
                        <div><img src="/images/conf/modeled-navy.jpg" alt="navy hoodie on a model"/></div>
                        <p>Model is 5’4” and wearing size XS</p>
                        <div><img src="/images/conf/hoodie-color-navy.jpg" alt="navy hoodie color swatch"/></div>
                        <p>Color: navy</p>
                        <h4>Sizes</h4>
                        <p>The arms on this hoodie are shorter and more narrow, creating a slimmer fit.</p>
                        <table class="hoodie-sizing">
                            <tr><th>&nbsp;</th><th>XS</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>2XL</th></tr>
                            <tr><th>Chest</th><td>17</td><td>18 ½</td><td>20 ½</td><td>22 ½</td><td>24 ½</td><td>26 ½</td></tr>
                            <tr><th>Length</th><td>26</td><td>27</td><td>28</td><td>29 ¼</td><td>30 ½</td><td>31 ¾</td></tr>
                        </table>
                    </div>
                </div>
                <p>Sizes are unisex. Measurements in inches. Chest is measured across the chest one inch below armholes when laid flat. Length is measured from high point shoulder to finished hem at back.</p>
                <p><b>Please review sizing and fit information carefully before you select a size. Exchanges and refunds will not be provided.</b></p>
                <div style="width:100%;text-align:center;margin-top:32px;">
                    <div class="cta"><a href="https://stores.kotisdesign.com/cascadiajs/products?redemption_code=${ ticket.code }">Order Your Hoodie!</a></div>
                </div>
            </div>
        </div>
        `
    let html = Layout({ content })
    return { html }
}