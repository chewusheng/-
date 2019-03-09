import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
export default new Vuex.Store({
    state : {
        // 管理底部导航栏是否显示
        footerNavFlag : true,
        //  所有商品的数据
        goodsShopcar: [
            {id: 'goods1', price: 89, number: 5, isSelected: true, title:'Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03', img_url:'../../images/category/category_info1.jpg'},
            {id: 'goods2', price: 89, number: 3, isSelected: false, title:'Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03', img_url:'../../images/category/category_info2.jpg'}
        ],
        //  未付款的商品
        unPaymentGoods: [
            {id: 'goods2', price: 48, number: 8, isSelected: true, title:'Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03', img_url:'../../images/category/category_info2.jpg'}
        ],
        //  等待发货的商品
        waitOrderGoods : [
            {id: 'goods4', price: 66, number: 2, isSelected: false, title:'Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03', img_url:'../../images/category/category_info4.jpg'}
        ],
        // 等待收货商品
        waitGoodsGoods : [
            {id: 'goods3', price: 49, number: 6, isSelected: true, title:'Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03', img_url:'../../images/category/category_info3.jpg'},
            {id: 'goods6', price: 38, number: 4, isSelected: false, title:'Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03', img_url:'../../images/category/category_info6.jpg'}
        ]
    },
    mutations : {
        //  改变底部导航栏的flag
        changeFooterNavFlag(state, bool) {
            state.footerNavFlag = bool;
        },
        //  根据obj中的id、number修改购物车对应中的商品数量
        changeGoodsShopcarNumber(state, obj) {
            obj.number = parseInt(obj.number);
            state.goodsShopcar.some(ele=>{
                if (ele.id === obj.id) {
                    ele.number = obj.number
                    return true;
                }
            });
        },
        //  根据传递过来的id改变对应商品的勾选状态
        changeGoodsShopcarSelected(state, id){
            state.goodsShopcar.some(ele=>{
                if (ele.id === id) {
                    ele.isSelected = !ele.isSelected;
                    return true
                }
            })
        },
        //  全选按钮 事件
        changGoodsShopcarAllSelected(state) {
            if (this.getters.getIsAllGoodsSelected) {
                state.goodsShopcar.forEach(ele=>{
                    ele.isSelected = false
                })
            } else {
                state.goodsShopcar.forEach(ele=>{
                    ele.isSelected = true
                })
            }
            
        },
        //  删除购物车中的某个商品 
        deleteGoodsShopcarById(state, id ){
            state.goodsShopcar.some((ele, index, arr)=>{
                if ( ele.id === id ){
                    arr.splice(index, 1)
                }
            
            })
        },
        //  往购物车中添加商品，传入商品的全部数据
        addGoodsShopcar(state, goodsObj) {
            goodsObj.price = parseInt(goodsObj.price)
            goodsObj.number = parseInt(goodsObj.number)
            let index = state.goodsShopcar.findIndex(ele=>{
                return ele.id == goodsObj.id
            })
            if (index === -1 ) {
                state.goodsShopcar.push(goodsObj)
            } else {
                state.goodsShopcar[index].number += goodsObj.number;
            }
        },
        //  点击结算按钮之后，点击取消，清除已选商品, 添加至未付款商品中
        shopcarToUnPaymentGoods(state){
            state.goodsShopcar.forEach((ele, index)=>{
                if (ele.isSelected) {
                    state.unPaymentGoods.unshift(state.goodsShopcar.splice(index, 1)[0])
                }
            })
        },
         //  点击结算按钮之后，点击确定，清除已选商品, 添加至未付款商品中
        shopcarToWaitOrder(state){
            state.goodsShopcar.forEach((ele, index)=>{
                if (ele.isSelected) {
                    state.waitOrderGoods.unshift(state.goodsShopcar.splice(index, 1)[0])
                }
            })
        }

    },
    getters : {
        // 获得已选商品的总价
        getAllCartSelectedMoney(state){
            let allMoney = 0;
            state.goodsShopcar.forEach(ele => {
                if (ele.isSelected) {
                    allMoney+= ele.number * ele.price;
                }
            });
            return allMoney
        },
        //  获取已选商品的总数目
        getAllCartSelectedNumber(state){
            let allNumber = 0;
            state.goodsShopcar.forEach(ele => {
                if (ele.isSelected) {
                    allNumber+= ele.number;
                }
            });
            return allNumber
        },
        //  确认所有商品是否被选中
        getIsAllGoodsSelected(state){
            let flag = true;
            state.goodsShopcar.some(ele => {
                if ( !ele.isSelected ) {
                    flag = false;
                    return true
                }
            });
            return flag;
        },
        // 获取所有选进购物车的商品数目
        getAllCartNumber(state){
            let allNumber = 0;
            state.goodsShopcar.forEach(ele => {
                    allNumber+= ele.number;
            });
            return allNumber
        },
        //  确定购物车中是否有被选中的商品
        getIsSelectedGoodsShopcar(state){
           if (state.goodsShopcar.findIndex(ele => {
            return ele.isSelected
         }) === -1) {
            return false
         } else {
             return true
         }

        }
    }
})





