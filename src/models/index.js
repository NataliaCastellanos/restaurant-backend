const sequelize = require('../config/database')
const User = require('./user.model')
const Product = require('./product.model')
const Sale = require('./sale.model')
const SaleProduct = require('./saleProduct.model')

User.hasMany(Sale,{
    foreignKey: 'userId',
    as: 'sales',
    onDelete: 'RESCTRICT',
    onUpdate: 'CASCADE'
})

Sale.belongsTo(User,{
    foreignKey: 'userId',
    as: 'user'
})

Sale.hasMany(SaleProduct,{
    foreignKey: 'saleId',
    as: 'saleProducts',
    onDelete: 'RESCTRICT',
    onUpdate: 'CASCADE'
})

SaleProduct.belongsTo(Sale,{
    foreignKey: 'saleId',
    as: 'sale'
})

Product.hasMany(SaleProduct,{
    foreignKey: 'productId',
    as: 'productSales',
    onDelete: 'RESCTRICT',
    onUpdate: 'CASCADE'
})

SaleProduct.belongsTo(Product,{
    foreignKey: 'productId',
    as: 'product'
})

module.exports = {
    sequelize, 
    User,
    Product, 
    Sale, 
    ProductSale
}